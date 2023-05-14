const arr = [1, 1, 1]
let check = true;
for(let i = 1; i < arr.length; i++) {
  if(arr[i] !== arr[0]){
    check = false;
    break;
  }
}
console.log(check);