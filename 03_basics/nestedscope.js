function one(){
    const username="egofever"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true)
{
    const username="Yashu"
    if(username==="Yashu")
    {
        const website=" youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
}
//console.log(username);

//INTERESTING
console.log(addone(5))
function addone(num)
{
    return num+1
}


addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo=function(num)
{
    return num+2
}


