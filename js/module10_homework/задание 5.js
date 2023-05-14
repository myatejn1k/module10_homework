let arr = ["Я", "пытаюсь", "разобраться", "в", "JavaScript"];
arr.forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (" + arr + ")" );
});