const fs = require('fs')

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const citas = cargarCitas()

  const nuevaCita = { nombre, edad, tipo, color, enfermedad }

  citas.push(nuevaCita)
  guardarCitas(citas)
  console.log('Cita registrada exitosamente...')
}

const leer = () => {
  const citas = cargarCitas()

  if (citas.length === 0) {
    console.log('No hay citas agendadas.')
  } else {
    citas.forEach(cita => {
      console.log(`Nombre: ${cita.nombre}`)
      console.log(`Edad: ${cita.edad}`)
      console.log(`Tipo: ${cita.tipo}`)
      console.log(`Color: ${cita.color}`)
      console.log(`Enfermedad: ${cita.enfermedad}`)
      console.log('------------------')
    })
  }
}

function cargarCitas () {
  try {
    const citasData = fs.readFileSync('citas.json', 'utf-8')
    return JSON.parse(citasData)
  } catch (error) {
    console.log('Error al leer el archivo citas.json')
  }
}

function guardarCitas (citas) {
  const citasJSON = JSON.stringify(citas)
  fs.writeFileSync('citas.json', citasJSON, 'utf-8')
}

module.exports = { registrar, leer }
