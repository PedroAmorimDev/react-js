//entrada
const inpaciente = document.getElementById('inpaciente')
//ações
const btnAdd = document.getElementById('btnAdd')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')
//saidas
const outLista = document.getElementById('outLista')
const outAtendimento = document.getElementById('outAtendimento')
const arrayinpa = []
const pacienteatual = []

btnAdd.addEventListener('click', () => {
    const paciente = inpaciente.value
    arrayinpa.push(paciente)
    outLista.innerHTML = `${arrayinpa}`
    inpaciente.value = ''
})
btnUrgencia.addEventListener('click', () => {
    const pacienteurgente = inpaciente.value
    arrayinpa.unshift(pacienteurgente)
    outLista.innerHTML = `${arrayinpa}`
    inpaciente.value = ''
})
btnAtender.addEventListener('click', () => {
    const pacienteAtendimento = inpaciente.value
    pacienteatual.unshift(pacienteAtendimento)
    outAtendimento.innerHTML = `${pacienteatual}`
    inpaciente.value = ''
})

