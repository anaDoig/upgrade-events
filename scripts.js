const btnToClick = document.querySelector('#btnToClick');
const inputClick = document.querySelector('.focus');
const inputOnInput = document.querySelector('.value');

function printInConsole(event) { console.log(event); };

function getInputValue(value) {
    value = this.value;
    console.log(value);
};

function getValueOnInput(value) {
    value = this.value;
    console.log(value);
}


btnToClick.addEventListener('click', printInConsole);
// Tal y como está planteado el ejercicio, en el caso del focus ya que no hay un value predefinido en el input, es necesario poner el foco en el input, escribir algo, poner el foco en otro lado del documento y volver a poner el foco en el mismo input.
inputClick.addEventListener('focus', getInputValue);
inputOnInput.addEventListener('input', getValueOnInput);