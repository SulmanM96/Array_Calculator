document.addEventListener("DOMContentLoaded", function() {
  console.log("The script DOM is loaded");
  //store number button
  var num1 ; //first vairaible
  var num2 ;//2nd variable
  var op ; //operator 0 = nothing (1=+), (2=-), (3=*),(4=/)
var turn1 =1; // the reset button

  //assign the number buttons on the calculator
  var buttonNum = document.getElementsByClassName("buttonNum");
  //links the display
  var display = document.getElementById('screen');
  //the operator
  var operator = document.getElementsByClassName('operator');
// clear button
  var ac = document.getElementsByClassName('buttonClear');
  //= button
  var eq = document.getElementsByClassName('equals');

  //used if statment to go through all buttons to find array value for each one

  ac[0].addEventListener('click', function() {
    //num1 and num2 set to 0 (acts like clear)
    num1 = 0;
    num2 = 0;
    display.innerHTML = "";
turn1 = 1;//reset to turn1
  });
  //button selector, buttons are in a dodgy order so its hard trying to use an array to loop through them

//button 1
//stoping any parents from being notified and makes the other numbers listen.
//this basically stops a free-for-all and doesnt allow random divs firing off in the distance
//using an else statement
  buttonNum[6].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "1";
    if (turn1 === 1) {
      num1 = 1;
    } else {
      num2 = 1;
    }
  })

  //button 2
  buttonNum[7].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "2";
    if (turn1 === 1) {
      num1 = 2;
    } else {
      num2 = 2;
    }
  })

//button 3
  buttonNum[8].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "3";
    if (turn1 === 1) {
      num1 = 3;
    } else {
      num2 = 3;
    }
  })

//button 4
  buttonNum[3].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "4";
    if (turn1 === 1) {
      num1 = 4;
    } else {
      num2 = 4;
    }
  })

//button 5
  buttonNum[4].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "5";
    if (turn1 === 1) {
      num1 = 5;
    } else {
      num2 = 5;
    }

  })

  //button 6
  buttonNum[5].addEventListener("click", function(event) {
     event.stopPropagation();
    display.innerHTML = "6";
    if (turn1 === 1) {
      num1 = 6;
    } else {
      num2 = 6;
    }

  })

  //button 7
  buttonNum[0].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "7";
    if (turn1 === 1) {
      num1 = 7;
    } else {
      num2 = 7;
    }
  })
 //button 8
  buttonNum[1].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "8";
    if (turn1 === 1) {
      num1 = 8;
    } else {
      num2 = 8;
    }
  })

//button 9
  buttonNum[2].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "9";
    if (turn1 === 1) {
      num1 = 9;
    } else {
      num2 = 9;
    }

  })


  //if statments for operations
  //as soon as you press an operator it would instigate turn 2 or 2nd run through
  //multiply
  if (turn1 === 1) {
    operator[0].addEventListener('click', function(event) {
      display.innerHTML = "*";
      op = 3;
      turn1 =2;

    });
    //divide
    operator[1].addEventListener('click', function(event) {
      display.innerHTML = "/";
      op = 4;
      turn1 =2;

    });
   //subtract
    operator[2].addEventListener('click', function(event) {
      display.innerHTML = "-";
      op = 2;
      turn1 =2;

    });
    //add
    operator[3].addEventListener('click', function(event) {
      op = 1;
      turn1 =2;
      display.innerHTML = "+";

    });
    //!!!!!!
    //had to put if statement in otherwise it wouldn't get turn1===2 as the if statement runs instantly
    //we need to listen for if statement only when we press "="
        //equal function to activate phase 2
      //wait for equal button to be clicked before making calculaations
    eq[0].addEventListener('click' , function(event){

      //next turn
        if(turn1 === 2)
        {
      var answer;
if(op==1)
{
  answer = num1 +num2;

}
if(op==2)
{
  answer = num1 -num2;

}
if(op==3)
{
  answer = num1 *num2;

}
if(op==4)
{
  answer = num1 /num2;

}

display.innerHTML = (answer);
//marksaons true loop trick
  turn1 =true;//reset back to turn1

num1=0;
num2=0;
}
});

}
});
