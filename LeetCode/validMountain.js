function validMountain(A) {
    
         let i = 1;

         while(i <A.length && A[i] > A[i-1]){
            i++
         }

         if( i=== 1 || i=== A.length ){
            return false
         }

         while( i <A.length && A[i] < A[i-1]){
            i++
         }
     return i=== A.length       
    

}

console.log(validMountain([0,3,4,6,5,4,3,2]))
console.log(validMountain([0,3,4,]))