function linearSearch(arr: number[], value: number) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            return i
        }
    }
    return -1;
}

const arr=[5,6,7,8]
const index=linearSearch(arr,8)
console.log("The element is found at position",index);
