var months    = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var output = document.getElementById('output');
console.log(thisMonth);

 if(output.textContent !== undefined) {
    output.textContent = thisMonth;
  }
  else {
    output.innerText = thisMonth;
  };