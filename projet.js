let email=document.getElementById("login");
let submit = document.getElementById("password");
let form = document.getElementById('form');

form.addEventListener('click', function(e){
    even.REVENTDefault();
    form_verify();
});

email.addEventListener("submit", function () {
    let error = document.getElementById('error');
    error.innerHTML = "veuillez remplir ce champs svp";
    error.style.color = 'red';
    even.preventDefault();
});

submit.addEventListener("submit", function(){
    evven.prevent
});



