var basic_price = document.getElementById('basic_price');
var prof_price = document.getElementById('prof_price');
var master_price = document.getElementById('master_price');

var check = document.getElementById('switch');



check.addEventListener('click', validate)

function validate() {
    if (check.checked) {
        basic_price.innerText = "$" + "199.99";
        prof_price.innerText = "$" + "249.99";
        master_price.innerText = "$" + "399.99";
    } else {
        basic_price.innerText = "$" + "19.99";
        prof_price.innerText = "$" + "24.99";
        master_price.innerText = "$" + "39.99"
    }
}



