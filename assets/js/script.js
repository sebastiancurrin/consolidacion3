// oracion tecleada para ser enviada
var inputSentence = document.getElementById('input_sentence');

// oraciones se agregaran como div hijos de chat dialogue
var chatDialogue = document.getElementById('chat-dialogue');
//boton para enviar oracion
var btnSend = document.getElementById('btn-send');



// evento para enviar mensaje 
inputSentence.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      btnSend.click();
    }
  });


//evento que envia mensaje al presionar el boton
btnSend.addEventListener('click', (e)=> {
    var newSentence = document.createElement('div');
    newSentence.classList.add('chat__record');
    newSentence.innerText = inputSentence.value ;

    inputSentence.value = '';
    chatDialogue.prepend(newSentence);

});


// funcion que simula mensajes entrantes con peridicidad aleatoria

function mensajeEntrante() {
    mensajes = ['bien y tu','hola','como estas','adios']; // largo 4

    var newReplay = document.createElement('div');
    newReplay.classList.add('chat__record','in1');
    newReplay.innerText = mensajes[Math.floor(Math.random()*4)]

    chatDialogue.prepend(newReplay);

    setInterval(mensajeEntrante, 4000+Math.random()*15000);
    
}

//mensajeEntrante()