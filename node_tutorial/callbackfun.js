function callback() {
  console.log("Sunil is calling a callback function");
}
const add = function (a, b, callback) {
  let result = a + b;
  console.log("result:" + result); //main function work completed
  callback();
};
add(5, 8, callback);
