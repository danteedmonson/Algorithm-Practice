function BinarySearch (arr, high, low, value) {

    while(low <= high) {
        let mid = parseInt((high + low) / 2)

        if(arr[mid] == value) {
            return true
        }
        if(value < arr[mid]) {
            high = mid-1;
        } 
        else {
            low = mid + 1;
        }
        console.log(mid)

    }
    return false;

}

let test = [
    1,   3,   3,   4,  7,   9,
    9,  34,  54,  74, 98, 234,
  435, 454, 786, 787
]

let high = test.length - 1;
let low = 0;
let result = BinarySearch(test, high, low, 7);
console.log(result)