

function reduce(arr, fn, initial) {
  fn = (prev, curr, index, arr)  => {
    prev = index - 1;
    console.log(arr[prev]);
  }
};

reduce([1,2,3], () => {}, 0);

// reduce([1,2,3], function(prev, curr, index, arr) {
//       return prev + curr
// }, 0);
