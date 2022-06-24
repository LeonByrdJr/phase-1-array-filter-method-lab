const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']


function findMatching(drivers, name){
    // console.log(name)
    // const notMatching = [];
    // for(let driver of drivers){
    //     if(driver.toLowerCase() === name.toLowerCase()){
    //     notMatching.push(driver)
    //     }
    // }
    // return notMatching;
    let newDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
    return newDrivers;
}


function fuzzyMatch(drivers, name){
    console.log(name)
    let newDrivers = drivers.filter(driver => driver.charAt(0,1) === name.charAt(0,1))
    return newDrivers;
}
function matchName(drivers, string){
    console.log(drivers)
    console.log(string)
    let newDrivers = drivers.filter(driver => driver.name === string)
    return newDrivers;
}


