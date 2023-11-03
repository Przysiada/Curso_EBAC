const form = document.getElementById('form-numero');
const numeroUm = document.getElementById('campo-A');
const numeroDois = document.getElementById('campo-B');
let formValido = false;

function validaValor(nUm , nDois) {
    
    if (nUm < nDois) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit' , function(e) {
    
    e.preventDefault();
        
    const mensagemSucesso = `Valor 1 = <b>${numeroUm.value}</b> menor Valor 2 = <b>${numeroDois.value}</b> - Muito bem, acertou`;
    const mensagemErro = `Valor 1 = <b>${numeroUm.value}</b> maior Valor 2 = <b>${numeroDois.value}</b> - Deve ser mudado`;

    formValido = validaValor(numeroUm.value , numeroDois.value)
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        numeroUm.value = '';
        numeroDois.value = '';
    } else {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemErro;
        containerMensagemSucesso.style.display = 'block';
    }
})