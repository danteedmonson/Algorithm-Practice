const mergeSort = (arr, upper, lower) => {
    if(lower === upper) {
        return;
    }

    let mid = parseInt((upper + lower) / 2);

    mergeSort(arr, mid, lower);
    mergeSort(arr, upper, mid+1);
    merge(arr, upper, lower, mid);   
}

const merge = (arr, upper, lower, mid) => {
    let L = arr.slice(lower,mid+1);
    let R = arr.slice(mid+1,upper+1);
    let i =0, j=0, k=lower;

    while(i < L.length && j < R.length) {
        if(L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
            k++;
        }
        else {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

     if(i == L.length) {
         while(j < R.length) {
            arr[k] = R[j];
            j++;
            k++;
         }
     }

     if(j == R.length) {
        while(i < L.length) {
           arr[k] = L[i];
           i++;
           k++;
        }
    }


}

//let arr = [7,1,43,8,345,6,23,9,45,5, 10 ,12, 5, 6, 7, 8,9];
let arr = [1,54,7,4,9,454,9,3,74,3,787,435,786,234,98,34]

let upper = arr.length - 1;
let lower = 0;
mergeSort(arr, upper, lower);
console.log(arr)




