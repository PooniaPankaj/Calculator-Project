var a1 = document.getElementsByTagName('button');
var answer = document.getElementById('answere');

var operand1 = 0;
var operand2 = 0;
var operator = null;
var done = false;
var second_data_entered =false;
console.log("hello");

for (var i = 0;i<a1.length;++i){
    var a2 = a1[i];
    a1[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if (value=='+' || value=='-' || value=='/' || value=='*'){
            operator = value;
            operand1 = parseFloat(answer.textContent);
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
                var temp1 = temp.slice(1);
                answer.innerText = temp1;
            }
            else {
                answer.innerText = "-"+answer.innerText;
            }
        }
        else if(value=='='){
            
                operand2 = parseFloat(answer.textContent);
                if (!second_data_entered){
                    operand2 =0;
                }
                var temp = eval(operand1+" "+operator+" "+operand2);
                answer.innerText=temp;
                operand1 = temp;
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

