class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper function to swap two elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Heapify up operation
    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[parent][1] < this.heap[index][1]) {
            this.swap(parent, index);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    // Heapify down operation
    heapifyDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;

        if (left < this.heap.length && this.heap[left][1] > this.heap[largest][1]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right][1] > this.heap[largest][1]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    // Insert operation
    insert(item) {
        this.heap.push(item);
        this.heapifyUp(this.heap.length - 1);
    }

    // Extract max operation
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    // Peek operation
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }
}

var frequencySort = function(s) {
    const counter = new Map();
    for (const char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    const maxHeap = new MaxHeap();
    counter.forEach((value, key) => {
        maxHeap.insert([key, value]);
    });

    let result = '';
    while (maxHeap.peek()) {
        const [char, freq] = maxHeap.extractMax();
        result += char.repeat(freq);
    }

    return result;
};