//#region Circular Queue
/**
 * @template TItem
 */
class CircularQueue {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    /**
     * @private
     * @type {number}
     */
    this._capacity = capacity;
    /**
     * @private
     * @type {number}
     */
    this._size = 0;
    /**
     * @private
     * @type {number}
     */
    this._bottom = 0;

    /**
     * @private
     * @type {number}
     */
    this._maxSize = 0;

    /**
     * @private
     * @type {TItem[]}
     */
    this._data = new Uint16Array(capacity);
  }

  /**
   * @private
   * @param {number} index
   * @returns {number}
   */
  _getCircularIndex(index) {
    const result = index % this._capacity;
    if (result < 0) result += this._capacity;
    return result;
  }

  get capacity() {
    return this._capacity;
  }

  get size() {
    return this._size;
  }

  get nextItem() {
    return this._size ? this._data[this._bottom] : undefined;
  }

  get lastItem() {
    return this._size
      ? this._data[this._getCircularIndex(this._bottom + this._size - 1)]
      : undefined;
  }

  fromFirst(index) {
    return index < this._size
      ? this._data[this._getCircularIndex(this._bottom + index)]
      : undefined;
  }

  fromLast(index) {
    return index < this._size
      ? this._data[
          this._getCircularIndex(this._bottom + this._size - 1 - index)
        ]
      : undefined;
  }

  /**
   * @param  {...TItem} items
   */
  enqueue(...items) {
    if (this._size + items.length > this._capacity)
      throw new Error("Queue capacity exceeded.");

    let queueIndex = (this._bottom + this._size) % this._capacity;
    this._size += items.length;
    this._maxSize = Math.max(this._size, this._maxSize);
    for (let i = 0; i < items.length; i++) {
      this._data[queueIndex] = items[i];
      queueIndex = (queueIndex + 1) % this._capacity;
    }
  }

  /**
   * @returns {TItem | undefined}
   */
  dequeue() {
    if (!this._size) return undefined;

    const result = this._data[this._bottom];
    this._bottom = (this._bottom + 1) % this._capacity;
    this._size--;

    return result;
  }

  clear() {
    this._size = 0;
  }

  get maxSize() {
    return this._maxSize;
  }
}
//#endregion

/**
 * @typedef {{ aNodes: number[] }} TGraphNode
 * @param {number} n
 * @param {[number,number,number?][]} edges
 * @return {TGraphNode[]}
 */
function buildGraph(n, edges) {
  /** @type {TGraphNode[]} */
  let nodes = [];
  for (let i = 0; i < n; i++) nodes.push({ aNodes: [] });

  let m = edges.length;
  for (let i = 0; i < m; i++) {
    let [u, v] = edges[i];
    --u;
    --v;
    nodes[u].aNodes.push(v);
    nodes[v].aNodes.push(u);
  }

  return nodes;
}

let visited = new Uint16Array(2e4);
let q = new CircularQueue(2e4);

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
  let g = buildGraph(n, edges);

  visited.fill(0, 0, n << 1);
  visited[0] = 1;
  q.enqueue(0);

  while (q.size) {
    let u = q.dequeue();
    let d = visited[u] + 1;
    u >>= 1;

    let { aNodes } = g[u];
    for (let v of aNodes) {
      if (!visited[v << 1]) {
        visited[v << 1] = d;
        q.enqueue(v << 1);
      } else if (d > visited[v << 1] && !visited[(v << 1) | 1]) {
        visited[(v << 1) | 1] = d;
        q.enqueue((v << 1) | 1);
      }
    }
  }

  let d = visited[(n << 1) - 1] - 1;
  let change2 = change << 1;
  let res = 0;

  for (let i = 0; i < d; ++i) {
    let r = res % change2
    if (r >= change) {
      res += change2 - r;
    }
    res += time;
  }

  return res;
};