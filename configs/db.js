const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://truongan:t2c3yTedUuxFAlFg@webnangcao.z5jnw.mongodb.net/projectweb?retryWrites=true&w=majority'
// process.env.MONGODB_URI 
async function connect() {
  try {
    await mongoose.connect(MONGODB_URI||'mongodb://localhost:127.0.0.1/projectWeb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Connect Successfully!!!');
  } catch (error) {
    console.log('Connect Failly!!');
  }
}
module.exports = { connect };