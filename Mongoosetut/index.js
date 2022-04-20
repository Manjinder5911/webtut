// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true,useUnifiedTopology:true});

// var db = mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',function(){
//     console.log("we are connected")
// })
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/manjikart');
}

// Schema
const kittySchema = new mongoose.Schema({
  name: String
});

// methods must be added to the schema before compiling it with mongoose.model
kittySchema.methods.speak = function speak() {
  const greeting = "Meow name is " + this.name
  console.log(greeting);
};

// Schema into model
// all data will be stored in "kitten" collection given in argument
const Kitten = mongoose.model('Kitten', kittySchema);

// making object
const manjiKitty = new Kitten({ name: 'manjikitty' });
const manjiName = new Kitten({ name: 'manjinder singh' });
// console.log(manjiKitty.name);
// manjiKitty.speak();

manjiKitty.save(function (err,manjiKitty){
  if (err) return console.error(err);
  // manjiKitty.speak();
})

manjiName.save(function (err,name){
  if (err) return console.error(err);
  // name.speak();
})

// finding objects from kittens collection
Kitten.find({name:"manjinder singh"},function (err,kittens){
  if (err) return console.error(err);
  console.log(kittens)
})