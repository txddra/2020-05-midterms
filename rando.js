const nums =[3, 5, 70]
//
for(let i = 0; i<nums.length; i++){
    console.log(nums[i])
}

for(const num of nums){
    console.log(nums)
}


const creatures =['king kong', 'godzilla', 'cloverfeild']

for(const king of creatures){
    console.log(king)
}

//if there is no space in the word add it to singleWordCreatures


const singleWordCreatures = []
for(const singleC of creatures ){
    if( singleC.includes(' ')=== false){
        singleWordCreatures.push(singleC)
    }

}

singleWordCreatures;