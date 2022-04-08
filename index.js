// // Code your solution here
// const findMatching = drivers.filter(
//     (drivers) => drivers.name === "Bobby"
//  )

    

function findMatching(drivers, name){
    let driver = drivers.filter(obj => obj.toLowerCase() == name.toLowerCase())
   //if (driver){
       return driver
       //console.log(name)
   } 
//}
// const firstIntial = [`Sa`]
function fuzzyMatch(drivers, firstIntial){
   let length = firstIntial.length
   //console.log(length)
    let driver = drivers.filter(obj => obj.slice(0, length) == firstIntial)
    return driver
    console.log(firstIntial)
}

function matchName(collection, string){
    for (const drivers of collection) {
     if (driver.hometown === string){
     return hometown.string === string
     }
    }
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(collection, name){
    return collection.filter((hometown) => { return hometown.name === name })
  }

  

    //     let driver = drivers.filter(obj => obj === drivers.hometown)
//     console.log(string)
//     return string
// }
// // const matchName = drivers.filter(
//     (drivers) => drivers.hometown
// )
// console.log(drivers)