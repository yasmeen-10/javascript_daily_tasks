const myObj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for(const key in myObj)
{
    //console.log(`${key} Shortcut is for ${myObj[key]}`);  
}

const fruits=["apple","kiwi","orange"]
for(const fruit in fruits)
{
    //console.log(fruits[fruit]);
}

// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States Of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for(const key in map)
// {
//     console.log(key); 
// }



// Summary :
// We can use For of loop for values iterating over values directly over [[[[ Strings & Array  ]]] & maps also
// We can use For in loop for values iterating  values by Indexes/Keys over Objects and Arrays & Strings . But not maps
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well. Also objects and maps

// FOR in DESCRIPTION       =>     it works for ARRAY and OBJECT but not works on MAP
// FOR of DESCRIPTION      =>     it works for ARRAY and MAP[ key, value] but not works on OBJECT.
// FOR each DESCRIPTION =>     it works for ARRAY, OBJECT and MAP.