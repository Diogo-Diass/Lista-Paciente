const botaoImportar = document.querySelector('[data-add-button]')

botaoImportar.addEventListener('click',function(){

    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function(){
        const resposta = xhr.responseText        

        const pacienteAdd = JSON.parse(resposta)
                
        pacienteAdd.forEach(function(indice){
            montaTr(indice)
        })
    })
    xhr.send()
})