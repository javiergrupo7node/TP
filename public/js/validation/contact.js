let form = document.querySelector("form");

let matchEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
let letters = /^[A-Za-z]+$/;

form.addEventListener("submit", function (e) {
    e.preventDefault()
    
    let name = form["user_name"].value;
    let mail = form["user_email"].value;
    let tel = form["user_tel"].value;
    let textarea = form["user_textarea"].value;

    if ((name.length > 0 && name.length < 20 && name.match(letters))
        && (mail.length > 0 && mail.match(matchEmail))
        && (tel.length > 0 && tel.length == 10 && !/\D/.test(tel))
        && (textarea.length >= 10 && textarea.length <= 200))
    {
        form.submit()
    }
    
    if (name.length == 0) {
        alert("nombre no puede estar vacio");
    } else if (name.length >= 20) {
        alert("nombre debe ser menor a 20 caracteres \n" + name.length);
    } else if (!name.match(letters)) {
        alert("nombre solo debe contener letras");
    } else if (mail.length == 0) {
        alert("mail no puede estar vacio");
    } else if (!mail.match(matchEmail)) {
        alert("mail no coincide con un formato valido");
    } else if (tel.length == 0) {
        alert("teléfono no puede estar vacio");
    } else if (tel.length != 10) {
        alert("teléfono debe ser 10 caracteres de largo");
    } else if (/\D/.test(tel)) {
        alert("teléfono solo debe tener números");
    } else if (textarea.length < 10) {
        alert("el campo del mensaje no puede ser menor a 10 caracteres");
    } else if (textarea.length > 200) {
        alert("el campo del mensaje no puede ser mayor a 200 caracteres");
    } 
})