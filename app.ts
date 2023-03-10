console.log("Hello world");
function binarySearch(arr:number[],value:number){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        const mid=(start+end)/2;
        if(arr[mid]===value){
            return mid;
        }
        else if (value>arr[mid]){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return -1

}

const arr=[1,2,3,4,5,6,7,8,9];
const p=7;
const index=binarySearch(arr,p);
console.log("The position of the element is",index+1);
