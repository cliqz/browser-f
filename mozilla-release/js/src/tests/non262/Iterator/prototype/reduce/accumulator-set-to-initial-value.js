// |reftest| skip-if(!this.hasOwnProperty('Iterator')) -- Iterator is not enabled unconditionally

const reducer = (acc, value) => acc;
const iterator = [1, 2, 3].values();

assertEq(iterator.reduce(reducer, 0), 0);

if (typeof reportCompare === 'function')
  reportCompare(0, 0);
