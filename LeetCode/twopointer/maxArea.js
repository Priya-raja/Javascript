//Given an array of values which represent the height of wall. Find the max area mad of two heights that can fill water

function maxArea(height){
    let maxArea = 0;
    let leftIndex =0;
    let rightIndex= height.length - 1

    while (leftIndex < rightIndex){
        maxArea = Math.max(maxArea, ( Math.min(height[rightIndex], height[leftIndex])* (rightIndex - leftIndex)));

        if(height[leftIndex] < height[rightIndex]){
            leftIndex++
        }
        else {
            rightIndex--
        }
    }
    return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))