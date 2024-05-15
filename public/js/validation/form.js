let form = document.querySelector("form");

let letters = /^[A-Za-z]+$/;

form.addEventListener("submit", function (e) {
    e.preventDefault()
    
    let name = form["user_name"].value;
    let telephone = form["user_tel"].value;
    let commensal = form["user_comensales"].value;

    let commensalTotalNum;

    try {
        commensalTotalNum = parseInt(commensal)
    } catch (error) {
        alert("comensales debe ser un valor entero")
    }

    if ((name.length > 0 && name.length < 20 && name.match(letters))
     && (telephone.length > 0 && telephone.length == 10 && !/\D/.test(telephone))
     && (commensal.length > 0 && commensalTotalNum < 100 && !/\D/.test(commensal))) 
    {
        form.submit()
    }
    
    if (name.length == 0) {
        alert("nombre no puede estar vacio");
    } else if (name.length >= 20) {
        alert("nombre debe ser menor a 20 caracteres \n" + name.length);
    } else if (!name.match(letters)) {
        alert("nombre solo debe contener letras");
    } else if (telephone.length == 0) {
        alert("teléfono no puede estar vacio");
    } else if (telephone.length != 10) {
        alert("teléfono debe ser 10 caracteres de largo \n" + telephone.length);
    } else if (/\D/.test(telephone)) {
        alert("teléfono solo debe tener números");
    } else if (commensal.length == 0) {
        alert("comensales no puede ser 0");
    } else if (commensalTotalNum > 99) {
        alert("comensales no puede ser mayor a 99");
    } else if (/\D/.test(commensal)) {
        alert("comensales debe ser un valor entero");
    }
})