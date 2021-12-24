// Write your solution in this file!
const employee = {
    name:"Ben",
    streetAddress: "123, rockmac, vic, 2121"
}

let updatingEmployee = updateEmployeeWithKeyAndValue = (employee, key, vaule) => {
    const copyOfEmployeeObj = Object.assign({},employee)
    copyOfEmployeeObj[key] = vaule
    return copyOfEmployeeObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, vaule){
    employee[key] = vaule
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const copyOfEmployeeObj = Object.assign({},employee)
    delete copyOfEmployeeObj[key]
    return copyOfEmployeeObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

console.log(updatingEmployee(employee,"streetAddress","11 broadway"))
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "josh"))