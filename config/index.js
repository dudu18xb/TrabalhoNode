const mongoose = require( 'mongoose' )
const dbURI = 'mongodb://localhost/pos-alfa-2017'
mongoose.connect( dbURI )

mongoose.connection.on( 'conncected', () => console.log( `Mongoose conectado aberto a ${ dbURI }` ) )

mongoose.connection.on( 'disconnected', () => console.log( `Conexão Mongoose desconectada` ) )
mongoose.connection.on( 'open', () => console.log( `Mongoose conexão aberto` ) )
mongoose.connection.on( 'error', ( err ) => console.log( `Erro com a Conexão Mongoose:${ err }` ) )
process.on( 'SIGINT', () => mongoose.connection.close( () => {
  console.log( 'Mongoose desconectado através do término do aplicativo' )
  process.exit( 0 )
} ) )

module.exports = mongoose
