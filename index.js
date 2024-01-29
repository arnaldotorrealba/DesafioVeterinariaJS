const { registrar, leer } = require('./operaciones')

const [, , opcion, ...args] = process.argv

if (opcion === 'registrar') {
  const [nombre, edad, tipo, color, enfermedad] = args
  registrar(nombre, edad, tipo, color, enfermedad)
} else if (opcion === 'leer') {
  leer()
} else {
  console.log('El primer argumento debe ser "registrar" o "leer".')
}
