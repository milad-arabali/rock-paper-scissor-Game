const v=["rock","paper","scissor"]
const user=prompt("your choose: rock , paper , scissor")
if(user){
    console.log(`your choose is: ${user}`)
}
else{
     console.log("choose again!")
    }

const rdsystem = Math.floor(Math.random()* 3);
const choosesystem=v[rdsystem]
console.log(`system choose is: ${choosesystem}`)

if(user === choosesystem){
    console.log(`again!`)
}else if(user === "rock"){
    if(choosesystem === "scissor"){
        console.log("you win!")
    } 
    else{
        console.log("you lose!")
    }
}else if(user === "paper"){
    if(choosesystem === "rock"){
        console.log("you win!")
    }
    else{
        console.log("you lose!")
    }
}else if(user === "scissor"){
    if(choosesystem === "paper"){
        console.log("you win!")
    }
    else{
        console.log("you lose!")
    }
}
