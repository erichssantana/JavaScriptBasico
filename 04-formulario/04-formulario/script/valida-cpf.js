document.getElementById("validarButton").
addEventListener("click", function(){
    // alert("Deu Certo!!!");
    const cpf = document.getElementById("cpfinput").value;

    if( validaCPF(cpf) ){
        document.getElementById("resultado").textContent = "CPF Valido"
    }else{
        document.getElementById("resultado").textContent = "CPF Invalido"

























        
    }
})

function validaCPF(vrCPF){
    return vrCPF.length === 11 & !isNaN(vrCPF);
}