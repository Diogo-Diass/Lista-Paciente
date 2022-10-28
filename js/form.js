const botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault()
    //Obtendo informações do Formulário
    const formulario = document.querySelector('#form-adiciona')
    const pacienteForm = obtemPaciente(formulario)

    const alertaErro = document.querySelector('.alerta-erro')

    let pesoValido = true
    let alturaValida = true

    if (pacienteForm.peso < 0 || pacienteForm.peso > 300) {
        alertaErro.textContent = 'Peso Inválido'
        return
    }
    if (pacienteForm.altura < 0 || pacienteForm.altura > 3) {
        alertaErro.textContent = 'Altura inválida'
        return
    }
    if(pacienteForm.nome == "" || pacienteForm.peso == "" || pacienteForm.altura == "" || pacienteForm.gordura == ""){
        alertaErro.textContent = 'Dado não informado' 
        return
    }
    montaTr(pacienteForm)

    formulario.reset()
})

function obtemPaciente(form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente) {
    const pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    const tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montaTd(dado, classe) {
    const td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}
