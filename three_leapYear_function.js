// a year will be a leap year if divisible by 4
// nt 100% true

function isLeapYear(year){
    if(year%4===0){
        return true;
    }else{
        return false;
    }
}

console.log(isLeapYear(2052));

// Correct logic: those year that is not divisible  by 100 and if the year is divisible by 4 then it is a leap year

// if year divisible by both 100 and 400

function isLeapYear2(year){
    if(year%100!==0 && year%4===0){
         return true;
    }
    if(year%100===0 && year %400===0){
        return true;
    }
    return false;
}

console.log(isLeapYear2(2100));
console.log(isLeapYear2(2400));
console.log(isLeapYear2(2050));
console.log(isLeapYear2(1900));

