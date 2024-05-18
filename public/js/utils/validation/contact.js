let form = document.querySelector("form");

let matchEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
let letters = /^[A-Za-záéíóú]+$/;

form.addEventListener("submit", function (e) {
    let name = form["user_name"].value;
    let mail = form["user_email"].value;
    let tel = form["user_tel"].value;
    let textarea = form["user_textarea"].value;
    
    try {
        new Validator(name, true)
            .isNotEmpty("nombre no puede estar vacio", name.length)
            .isLess(21, "nombre debe ser menor a 20 caracterers \n total:" + name.length, name.length)
            .isMatch(letters, "nombre solo debe contener letras");
    
        new Validator(mail, true)
            .isNotEmpty("mail no puede estar vacio", mail.length)    
            .isMatch(matchEmail, "mail no coincide con un formato valido");
            
    
        new Validator(tel, true)
            .isNotEmpty("teléfono no puede estar vacio", tel.length)
            .isEqual(10, "teléfono debe ser 10 caracteres de largo \n total:" + tel.length, tel.length)
            .isMatch(/^[0-9]+$/, "teléfono solo debe tener números");
    
        new Validator(textarea, true)
            .isGreater(9, "el campo del mensaje debe ser como mínimo 10 caracteres", textarea.length)
            .isLess(201, "el campo del mensaje no puede ser mayor a 200 caracteres\n total:" + textarea.length, textarea.length)
    } catch (error) {
        return e.preventDefault();
    }

    form.submit();
})