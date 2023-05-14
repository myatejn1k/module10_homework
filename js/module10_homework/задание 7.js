let arr = [1, 2, 3, 4, 5]
let arr1 = 0;
let arr2 = 0;
let arr3 = 0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i] > arr[0]){
    if(arr[i] % 2 == 0) {
      arr1++;
    }
    if(arr[i] % 2 == 1) {
      arr2++;
    }
  } else {
    arr3++;
  }
}
console.log(`У вас ${arr1} четных и ${arr2} нечетных и ${arr3} нулевое значение`);