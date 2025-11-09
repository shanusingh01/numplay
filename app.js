const max = prompt("enter the maximum number");

const random = Math.floor(Math.random()*max)+1;
console.log(random);

let guess = prompt("guess the number");
while (true){
    if(guess=="quit"){
        console.log("You Quit The Game!");
        break;
    }
    else if(guess==random){
        console.log(`You win! the number is ${random}`);
        break;
    }
    else if(guess<random){
        guess = prompt("Hint: your number is small, please try again!");
    }
    else if(guess>random){
        guess = prompt("Hint: your number is large, please try again!");
    }
    // else if(guess!=random){
    //     guess = prompt("wrong guess! Try Again");
    // }
};