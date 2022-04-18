const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Kostya', 'Illya'];

function sortStudentsByGroups(arr) {
    const firstGroup = [];
    const secondGroup = [];
    const thirdGroup = [];
    const sortedArr = arr.sort();
    let result = "";
    let ostacha = [];
    let resArr = [];
    for (let key of sortedArr){
        if (firstGroup.length < 3){
            firstGroup.push(key);
        }
        else if (secondGroup.length < 3){
            secondGroup.push(key);
        }
        else if (thirdGroup.length < 3){
            thirdGroup.push(key);
        }
        else {
            ostacha.push(key);
        }
    }
    if (ostacha.length === 0){
        result = `Оставшиеся студенты: -`;
    } else {
        result = `Оставшиеся студенты: ${ostacha.join(", ")}`;
    }
    resArr = [firstGroup, secondGroup, thirdGroup, result];
    console.log(resArr);
}
sortStudentsByGroups(students);