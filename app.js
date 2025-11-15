let listadeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNtela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMesagemInicial(){
    exibirTextoNtela('h1', 'Jogo do número Secreto.');
    exibirTextoNtela('p', 'Escolha um número entre 1 e 10.');
}
exibirMesagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNtela('h1', 'Acertouuu!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mesagemTentativas = 'Você descobriu o número secreto com '+tentativas+' '+palavraTentativa+'.';
        exibirTextoNtela('p',mesagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        if (chute > numeroSecreto){
            exibirTextoNtela('p', 'número secreto é menor');
          }  else{
                    exibirTextoNtela('p', 'número secreto é maior');
            }
            tentativas++;
            limparoCampo()
        } 
    }

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * 10 + 1);
     let quantidadedeNumerosEscolhidos = listadeNumerosSorteados.length;
     if (quantidadedeNumerosEscolhidos == 10 ){
        listadeNumerosSorteados = [];
     } 
     if(listadeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
        } else{ 
            listadeNumerosSorteados.push(numeroEscolhido);
            console.log(listadeNumerosSorteados);
            return numeroEscolhido;
        }        
    }


function limparoCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciaJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparoCampo();
    exibirMesagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}