# Merge Sort
As, we already know, the **top-down merge sort** approach is the methodology which uses recursion mechanism.  
It starts at the Top and proceeds downwards, with each recursive turn asking the same question such as  
**“What is required to be done to sort the array?”** and having the answer as,  
**“split the array into two, make a recursive call, and merge the results.”**, until one gets to the bottom of the array-tree.

## Bottom-Up Merge Sort Implementation
**The Bottom-Up Merge Sort** approach uses iterative methodology.

It starts with the “single-element” array, and combines two adjacent elements and also sorting the two at the same time.  
The combined-sorted arrays are again combined and sorted with each other until one single unit of sorted array is achieved.

**Example:** Let us understand the concept with the following example.

1. **Iteration 1** 
![alt text](https://s3-us-west-2.amazonaws.com/tutorials-image/Bottom-Up+Merge+Sort.png)
&nbsp;
&nbsp;
2. **Iteration 2**
![alt text](https://s3-us-west-2.amazonaws.com/tutorials-image/bottom+up+Iteration+2.png)
&nbsp;
&nbsp;
3. **Iteration 3**
![alt text](https://s3-us-west-2.amazonaws.com/tutorials-image/bottom+up+implementation.png)
&nbsp;
&nbsp;
