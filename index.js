// Your code here

function createEmployeeRecord (array) {

    let employee = {
        firstName: array[0],
        familyName:array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return employee;
}


function createEmployeeRecords (array) {
    return array.map(createEmployeeRecord(e))
}