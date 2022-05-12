let form = document.getElementById("frm-usuario");
let campos = document.querySelectorAll("#frm-usuario input");

const reglas = {
    textos: /^[a-zA-Z-AÁ-ÿ^\s]{1,50}$/, //Letras, min, may, tíldes, diéresis, espacios de 1 a 50 caracteres
    numeros: /^\d{7,10}$/, //Teléfonos solo números mínimo 7 y ,áximo 10 caracteres
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/, //Correo electrónico
    password: /^(?=.\d)(?=.[!#$@%&])(?=.[a-z])(?=.*[A-Z]).{8,}$/
}

form.addEventListener('submit', e => {
    alert("se envió el formulario");
})

let validarCampos = (e) => {
    console.log('se genero un evento sobre el input: ');
    console.log(e.target.name);

let validarInput=(regla,grupo,input)=>{
    if(regla.test(input.value)){
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible')
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-check');
        
    }else{
        document.getElementById(`g-${grupo}`).classList.add('error'); 
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible')
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-check');
    }
}
    switch (e.target.name) {
        case "numdoc":
            validarInput(reglas.numeros,e.target.name,e.target); 
        break;
        case "nombre":
            validarInput(reglas.textos,'nombre',e.target);
        break;
        case "apellido":
            validarInput(reglas.textos,e.target.name,e.target);
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target.name,e.target);
        break;
        case "correo":
            validarInput(reglas.correo,e.target.name,e.target);
        break;
        case "nombre":
        validarInput(reglas.textos,e.target.name,e.target);
        break;
        
        
    }
}

campos.forEach((campo) => {
    campo.addEventListener('keyup', validarCampos);
    campo.addEventListener('blur', validarCampos);
})

