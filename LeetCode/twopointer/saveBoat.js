// You are given an array people where people[i] is the weight of the ith person, and an
//  infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of 
// those people is at most limit.

let numRescueBoats = function(people, limit) {
    //sort the weights 
    people.sort((a,b) => a - b)
    console.log(people)
    let biggest = people.length -1
    let smaller = 0
    let boats= 0;

    while(biggest >= smaller){
        if((people[biggest] + people[smaller]) <= limit){
             
            biggest--
            smaller++ 
        }
        else{
            biggest--
            
        }
       boats++ 
    }
    
    return boats
    
};


console.log(numRescueBoats([3,2,2,1], 3))