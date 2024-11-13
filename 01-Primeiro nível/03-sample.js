let date1 = "2024-01-01";
let date2 = "2024-12-31";

function calculateDateDifference(date1, date2) {
    return new Date(date2) - new Date(date1);
}

let result = calculateDateDifference(date1, date2);
console.log(result);
