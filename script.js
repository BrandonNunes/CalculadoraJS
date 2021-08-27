

function insert(n){
    if(n=='x'){
        n='*'
    }
    const display = document.getElementById('display');
    display.value += n
    
}

function clean(){
    document.getElementById('display').value = "";
}

function backspace(){
    const display =  document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length -1)
}

function calculate(){
    let display =  document.getElementById('display').value;

    if(display){
        document.getElementById('display').value = eval(display)
    }else{
        alert('Nada para calcular!')
    }

}