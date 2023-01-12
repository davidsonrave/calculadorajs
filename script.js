const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');//seleccionar todoas la etiquetas de botones

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id == "clear") {
            display.innerText=""; // si doy clic en id clear ejecutar un string vacio (se borra todo)
            
        }else if (button.id == "backspace") {
            let string = display.innerText.toString();//convertir todo lo que tenemso en nuestr #display a string
            display.innerText = string.substr(0, string.length-1)//substr nos va extraer el ultimo caracter para ir borrando la longitud del ultimo indice -1 iniciando de 0
        }else if (display.innerText !="" && button.id=="equal") { //si es dirente a vacion y doy click en (=) se va ejecutar la siguiente linea con eval
            display.innerText = eval(display.innerText)//va tomar como una operacion arimetica lo que sea "5+5" "5" "8*8" es decir operaciones string
        }else if (display.innerText == "" && button.id == "equal") {// si al dar clic esta vacio y oprino el id equal (=)
            display.innerText="Null";// se escribira "Null" y despues se eejcuta setTimeout
            setTimeout(()=>(display.innerText=""),2000)//tiempo de espera para que pueda ejecutar "" se va volver un string vacio es decir se borrara
        }else{
            display.innerText+=button.id// delo contrario aparece el id del boton clic
        }
    })
});


const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark=true;

themeToggleBtn.addEventListener("click", () => {
    calculator.classList.toggle("dark")//que afecte a todas la clase de .calculator y que le agregue la clase "dark" como una palanca para cambiar la clases
    themeToggleBtn.classList.toggle("active")//volver al estado inicial
    isDark =! isDark;//si ha sido true se cambia a false y vicervversa
});
 