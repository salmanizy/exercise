function result1(){
    console.log("Welcome to")    
}

function result2(){
    setTimeout(() => {
        console.log("Javascript Callback Lesson");
    }, 1000);
}

function result3(){
    setTimeout(() => {
        console.log("Jayjay Academy");
    }, 1000);
}

function allResult(){
    result1();
    result2();
    result3();
}

allResult();