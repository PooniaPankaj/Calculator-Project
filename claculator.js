var a1 = document.getElementsByTagName('button');   // fetching all buttons
var answer = document.getElementById('answere');    // fetching all elements with id answere 

var operand1 = 0; // intially operand 1 is 0 and operator need to be performed is also null as not specified yet
var operand2 = 0;
var operator = null;
var done = false;
var second_data_entered =false;

for (var i = 0;i<a1.length;++i){  // just itterating over all buttons to know which one is clicked 
    var a2 = a1[i];   // fechin clicked buttons into th e variables
    a1[i].addEventListener('click',function(){  // adding event listener to the buttons 
        var value = this.getAttribute('data-value'); // fetching  value of the buttons into variables 
        if (value=='+' || value=='-' || value=='/' || value=='*'){
            operator = value; // fetching operator 
            operand1 = parseFloat(answer.textContent); // setting the operand one on getting the operator
            done = true; 
        }
        else if(value=='%'){
            var g1 = parseFloat(answer.textContent);
            g1/=100;
            operand1 = g1;
            answer.innerText = g1;
        }
        else if(value=='+/-'){
            if (answer.innerText[0]=='-'){
                var temp = answer.innerText;
                var temp1 = temp.slice(1);// if intially our number is -ve than we just need to make it positive by just removing the -ve sign
                answer.innerText = temp1;
            }
            else {
                answer.innerText = "-"+answer.innerText;
            }
        }
        else if(value=='='){
            
                operand2 = parseFloat(answer.textContent);
                if (!second_data_entered){// if we call = without entering th evalue of 2nd operand than it will just make it as 0
                    operand2 =0;
                }
                var temp = eval(operand1+" "+operator+" "+operand2);  // eval function for evaluating our expression 
                answer.innerText=temp;
                operand1 = temp;// setting the result as operand 1 as there might be the case that we can again perform more operations on it
                operand2 = 0;
                operator = null;
            
        }
        else if(value=='AC'){
            operand1 = null;
            operand2 = null;
            operator = null;
            done = false;
            answer.innerText = 0;
        }
        else if (value=='.'){
            answer.innerText+=value;
        }
        else{
            if (answer.innerText==0){
                answer.innerText = value;
            }
            else if(operator!=null){
                second_data_entered = true;
                if (done){
                    answer.innerText = value;
                    done = false;
                }
                else{
                    answer.innerText+=value;
                }

            }
            else{
                answer.innerText+=value;
            }
        }
    })
   
}
function onclick_event_1(key_address){
    key_address.style.opacity = 1;
}
function onclick_event(key_address){
    key_address.style.opacity=0.2;
    setTimeout(onclick_event_1,100,key_address)
}

