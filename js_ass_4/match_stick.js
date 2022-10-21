// Create a function that takes a number (step) as an argument and returns the
// number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function no_of_msticks(n){
    if (n > 0){
        var First = 6
        var all = (n-1)*5
    }
    else {
        var First = 0
        var all = 0
    }
    var total = First + all

    console.log(total)
}

no_of_msticks(4)