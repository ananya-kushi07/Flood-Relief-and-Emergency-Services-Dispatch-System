class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.isEmpty() ? null : this.stack.pop();
    }

    peek() {
        return this.isEmpty() ? null : this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

module.exports = Stack;
