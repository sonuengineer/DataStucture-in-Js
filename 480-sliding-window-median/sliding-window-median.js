/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.items = [];
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.items.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.items.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.items[this.getParentIndex(index)];
  }

  size() {
    return this.items.length;
  }

  swap(index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  peek() {
    return this.items[0];
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    if (this.items.length === 1) {
      return this.items.pop();
    }
    const item = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown();
    return item;
  }

  push(item) {
    this.items.push(item);
    this.heapifyUp();
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      return false;
    }
    this.items[index] = this.items[this.items.length - 1];
    this.items.pop();
    const parentIndex = this.getParentIndex(index);
    if (
      this.hasParent(index) &&
      this.compareFn(this.items[index], this.items[parentIndex]) < 0
    ) {
      this.heapifyUp(index);
    } else {
      this.heapifyDown(index);
    }
    return true;
  }

  heapifyUp(index) {
    let currentIndex = index || this.items.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.compareFn(this.items[currentIndex], this.parent(currentIndex)) < 0
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(index) {
    let currentIndex = index || 0;
    while (this.hasLeftChild(currentIndex)) {
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.hasRightChild(currentIndex) &&
        this.compareFn(this.rightChild(currentIndex), this.leftChild(currentIndex)) < 0
      ) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }
      if (this.compareFn(this.items[currentIndex], this.items[smallerChildIndex]) < 0) {
        break;
      }
      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    }
  }
}


class MedianFinder {
  constructor() {
    this.minHeap = new Heap((a, b) => a - b);
    this.maxHeap = new Heap((a, b) => b - a);
  }

  add(value) {
    if (this.maxHeap.size() === 0 || this.maxHeap.peek() > value) {
      this.maxHeap.push(value);
    } else {
      this.minHeap.push(value);
    }
    this.balance();
  }

  remove(value) {
    if (value <= this.maxHeap.peek()) {
      this.maxHeap.remove(value);
    } else {
      this.minHeap.remove(value);
    }
    this.balance();
  }

  median() {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    }
    if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.peek();
    }
    return this.maxHeap.peek() / 2 + this.minHeap.peek() / 2;
  }

  balance() {
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
}

var medianSlidingWindow = function (nums, k) {
  const result = [];
  const medianFinder = new MedianFinder();
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    medianFinder.add(nums[end]);
    const size = end - start + 1;
    if (size === k) {
      result.push(medianFinder.median());
      medianFinder.remove(nums[start]);
      start++;
    }
  }
  return result;
};