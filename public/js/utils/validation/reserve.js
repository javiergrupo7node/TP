let form = document.querySelector("form");

let matchEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
let letters = /^[A-Za-z]+$/;

form.addEventListener("submit", function (e) {
    let name = form["user_name"].value;
    let tel = form["user_tel"].value;
    let commensal = form["user_comensales"].value;

    try {
        new Validator(name, true)
            .isNotEmpty("nombre no puede estar vacio", name.length)
            .isLess(21, "nombre debe ser menor a 20 caracterers \n total:" + name.length, name.length)
            .isMatch(letters, "nombre solo debe contener letras");
            
        new Validator(tel.length, true)
            .isNotEmpty("teléfono no puede estar vacio")
            .isEqual(10, "teléfono debe ser 10 caracteres de largo \n total:" + tel.length)
            .isMatch(/^[0-9]+$/, "teléfono solo debe tener números", tel);
        
        new Validator(parseInt(commensal), true)
            .isNotEmpty("comensales no puede estar vacio", commensal.length)
            .isNotNaN("comensales debe ser un valor entero")
            .isLess(99, "comensales debe ser menor a 99")
            .isMatch(/^[0-9]+$/, "comensales solo debe contener números", commensal);
   
    } catch (error) {
        return e.preventDefault();
    }

    form.submit();
});