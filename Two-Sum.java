public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int [] result=new int[2];
        int n=nums.length;
        //Traversing through Array
        for(int i=0;i<n;i++){
          for(int j=i+1;j<n;j++){
              if(nums[i]+nums[j]==target){
                  result[0]=i;
                  result[1]=j;
        
                }
            }
        }
         return result;
    }
}
