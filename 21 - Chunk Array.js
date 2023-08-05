// Link in Leetcode
// https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript


// (----------------------------- THE ANSWER -----------------------------)


const chunk = function(arr, size) {
  let full_size = arr.length ;
  let resArr = [], temp = [];
  
  for(let i=0; i< full_size ; i++){ //iterate over arr
      temp.push(arr[i]); //push element into the temporary array

      if(temp.length == size){
          resArr.push(temp);
          temp = []; //reset array into an empty array//
      }
  }

  if(temp.length){ // if any elements are left theyre pushed regardless of the size//
      resArr.push(temp);
  }

  return resArr;
};