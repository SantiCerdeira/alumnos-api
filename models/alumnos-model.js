import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('apiDB')

async function getAlumnos(filter = {}){
  const filterMongo = {deleted: {$ne: true}}

  if(filter?.anio_min){
    filterMongo.anio = {$gte: parseInt(filter.anio_min)}
  }

  if(filter?.nombre){
    filterMongo.$text = {$search: filter.nombre}
  }

  await client.connect()

  return db.collection('alumnos').find(filterMongo).toArray()
}

async function getAlumnoByLegajo(legajo){
  await client.connect()
  
  return db.collection('alumnos').findOne({legajo : parseInt(legajo)}, {deleted: {$ne: true}})
}

async function createAlumno(alumno){
  await client.connect()

  const alumnos = db.collection('alumnos')

  const count = await alumnos.countDocuments()

  alumno.legajo = count + 1

  await alumnos.insertOne(alumno)

  return alumno
}

async function editAlumno(legajo, alumno) {
  await client.connect()

  await db.collection('alumnos').updateOne({legajo : parseInt(legajo)} ,{$set: alumno})

  return alumno
}

async function replaceAlumno(legajo, alumno) {
  await client.connect()

  await db.collection('alumnos').replaceOne({legajo : parseInt(legajo)} ,alumno)

  return alumno

}

async function deleteAlumno(legajo) {
  await client.connect()

  await db.collection('alumnos').findOneAndUpdate({legajo : parseInt(legajo)}, { $set: { deleted: true } })

  return {
    legajo: legajo,
  }
}

export {
  getAlumnos,
  getAlumnoByLegajo,
  createAlumno,
  editAlumno,
  replaceAlumno,
  deleteAlumno
}