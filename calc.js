var num1=' ';
var num2=' ';
var state=' ';
var screen = document.getElementById('screen1');
var items=document.querySelectorAll('.grid-item');
items.forEach(item=> {
    item.addEventListener('click',function() {
        var curr=this.textContent;
        if (isDigit(curr)) {
          if (state) {
            num2 += curr; 
          } else {
            num1 += curr; 
          }
          updateDisplay(num1 + state + num2);
        } else if (curr === '=') {
          if (num1 && num2 && state) {
            calculate();
          }
        }else if(curr==='C'){
            clear();
        } else { 
          if (!num2) {
            state = curr; 
            updateDisplay(num1 + state);
          }
        }
    });
});
    function clear() {
        num1 = '';
        num2 = '';
        state = '';
        updateDisplay('0');
      }
function updateDisplay(value) {
    screen.textContent = value || '0';
  }
function isDigit(char){
    return (char >='0' && char <='9') ;
}
function calculate() {
    var result = 0;
    var a = parseFloat(num1);
    var b = parseFloat(num2);

    switch (state) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b !== 0 ? a / b : 'Error'; break;
      default: result = 'Error';
    }  
    updateDisplay(result);
  }



