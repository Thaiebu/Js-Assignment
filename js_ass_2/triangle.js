
function triangle(x,y,z)
{

    if (x == y && y == z)
        console.log("Equilateral Triangle")
    
    else if(x == y || y == z || z == x)
        console.log("Equilateral Triangle")
    
    else
        console.log("Scalene")

}

let ans = triangle(8,7,9)

// console.log(ans)