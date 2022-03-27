// Q1. Write a JavaScript program to compute the sum of an array of integers.

let arr=[1,2,3,4,5]
let sum=0
for(let i=0;i<arr.length;i++){
    sum=sum+ arr[i];
}
console.log(sum)

// Q2. Write a JavaScript program to get the first n Fibonacci numbers

// const number = parseInt(prompt('Enter the number: '));
let a=0
let b=1
let c
console.log(a)
console.log(b)
for(let i=1;i<=number;i++){
    console.log(b)
    c=a+b
    a=b
    b=c;
}

// Q3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leap(year){
    if((year%4==0) && (year%100!==0) || (year%4==400)){
    console.log(year +" is a leap year");
    }
    else{
    console.log(year +" is not a leap year");    
    }
}
const year = prompt('Enter a year:');
leap(year);

// Q4. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function diff(number){
    if(number<=19){
        return number-19;
    }
    else{
        return number*3;
    }
}
const number= prompt('Enter a number')
console.log(diff(number))

// Q5. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

function string(str){
    if(str.substring(0,2)==='Py'){
        return str;
    }
    else{
        return "Py"+str;
    }
}
console.log(string("Pycharm"))
console.log(string("test"))

// Q6. Write a JavaScript function which accepts an argument and returns the type of argument.

function type(val){
    const datatype =[Number, String, Boolean, Object, undefined]
    if(typeof val ==="object"|| typeof val=== "function"){
        for(let i=0;i<datatype.length;i++){
            if(val instanceof datatype[i]){
                return datatype[i];
            }
        }
    }
    else{
    return typeof val;
}
}
console.log(type(12))
console.log(type("hello"))
console.log(type(true))
console.log(type())

// Q7. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestword(string){
    let split= string.split(' ')
    let word=""
    for(let i=0;i<split.length;i++){
        if(split[i].length>word.length){
            word= split[i];
        }
    }
        return word;
}
console.log(longestword("Javascript is a programming language"))

// Q8. Write a JavaScript program to sort the items of an array.

let arr=[15,8,6,45,36,97,2]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        }
    }
    console.log(arr[i])
}

