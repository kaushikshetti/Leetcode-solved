function binarySearch(arr:number[],value:number,start:number,end:number): number{
    if(start<=end){
        let mid=start + Math.floor((end - start) / 2);
        if(arr[mid]===value){
            return mid;
        }
        else if (value>arr[mid]){
            return binarySearch(arr,value,mid+1,end);
        }
        else{
            return binarySearch(arr,value,start,mid-1);
        }
    }
    return -1

}

const arr=[1,2,3,4];
const p=3;
let n=arr.length-1;
const index=binarySearch(arr,p,0,n);
console.log("The position of the element is",index+1);
