//Define a closure as a property of a function
//Call it in a different function other than where it is defined

function handleLike(step) {
    let likePost = 0;

    return function addLike() {
        likePost += step;
        return likePost;
    }
    console.log('The like is:', likePost)
}

const doubleLike = handleLike(2);
console.log(doubleLike) // [Function: addLike]

console.log(doubleLike())//2
console.log(doubleLike())//4