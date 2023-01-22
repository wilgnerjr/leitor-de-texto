const textarea = document.getElementById('text');
const button = document.getElementById('btn');

button.addEventListener('click', () =>{
    const text = textarea.value;
    const speaks = new SpeechSynthesisUtterance(text);
    if(text == ''){
        alert('Campo vazio, Não há nada para ler!')
    }
    else{
        speaks.lang ='pt-BR';
        window.speechSynthesis.speak(speaks);
    }
});