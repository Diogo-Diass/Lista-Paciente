let pacientesTable = document.querySelectorAll('.paciente')


/* for(i = 0; i < pacientesTable.length; i++){
    pacientesTable[i].addEventListener('dblclick', function(){
        this.remove()
    })
} */

/* pacientesTable.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
            console.log('Clique Duplo!!!')
            paciente.remove()
    })
}) */

const tabelaRemove = document.querySelector('table')

tabelaRemove.addEventListener('dblclick', function(event){
    const alvoEvento = event.target
    const paiAlvoEvento = alvoEvento.parentNode
    
    paiAlvoEvento.remove()

} )  

