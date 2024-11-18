class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(request) {
        if (this.isEmpty()) {
            this.queue.push(request);
        } else {
            let added = false;
            for (let i = 0; i < this.queue.length; i++) {
                if (request.priority > this.queue[i].priority) {
                    this.queue.splice(i, 0, request);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.queue.push(request);
            }
        }
    }

    dequeue() {
        return this.isEmpty() ? null : this.queue.shift();
    }

    peek() {
        return this.isEmpty() ? null : this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

module.exports = PriorityQueue;
