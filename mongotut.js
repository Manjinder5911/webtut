// Inserting sata in mongo db
use manjikart
db.items.insertOne({name:"Samsung A30",price:22000,rating:4.5,qty:200,sold:98})
db.items.insertMany([{name:"Iphone",price:150000,rating:4.9,qty:150,sold:130},{name:"Oppo Reno",price:20000,rating:4.3,qty:160,sold:40}])
// Add another collection
db.anotherCollection.insertOne({name:"manji"})
db.specialCollection.insertOne({special:"hardworking"})


// Searching for data in mongodb
use manjikart
// this query will return all the objects with rating equal to 3.5
db.items.find({rating:3.5}) //{rating:3.5}=> filter object
db.items.find({rating:{$gte:3.5}}) 
db.items.find({rating:{$lte:4.9},price:{$gte:100000},qty:{$lt:170}})

// Deleting items from database
db.items.deleteOne({price:22000})

// Updating data
db.items.updateOne({name:"Oppo Reno"},{$set:{price:1000}})
db.items.updateMany({name:"Oppo Reno"},{$set:{price:100,rating:1}})