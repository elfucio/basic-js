const chainMaker = {
  arr: [],
  result: 0,
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.getLength() || !(Number(position)) || position < 1) {
      this.arr = [];
      throw new Error();
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    result = this.arr.join(("~~"));
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;