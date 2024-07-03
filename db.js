

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: './db.env' });

// const mongoURI = process.env.MONGO_URI;

// async function connectToDatabase() {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('DB connected...');
//   } catch (err) {
//     console.error('Connection error', err);
//   }
// }

// connectToDatabase();

// const personSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: Number,
//   favoriteFoods: [String]
// });

// const Person = mongoose.model('Person', personSchema);

// async function createAndSavePerson() {
//   const person = new Person({
//     name: 'Tony Montana',
//     age: 27,
//     favoriteFoods: ['Rice', 'Beans']
//   });

//   try {
//     const savedPerson = await person.save();
//     console.log('Person saved:', savedPerson);
//   } catch (err) {
//     console.error('Error saving person:', err);
//   }
// }

// createAndSavePerson();



// async function createManyPeople(arrayOfPeople) {
//     try {
//       const people = await Person.create(arrayOfPeople);
//       console.log('People created:', people);
//     } catch (err) {
//       console.error('Error creating people:', err);
//     }
//   }
  
//   createManyPeople([
//     { name: 'Alice', age: 25, favoriteFoods: ['Salad'] },
//     { name: 'Bob', age: 35, favoriteFoods: ['Steak'] },
//     { name: 'Ken', age: 29, favoriteFoods: ['Fish'] },
//     { name: 'John', age: 22, favoriteFoods: ['Pasta'] }

//   ]);


// async function findPeopleByName(name) {
//     try {
//       const people = await Person.find({ name });
//       console.log('People found:', people);
//     } catch (err) {
//       console.error('Error finding people:', err);
//     }
//   }
  
//   findPeopleByName('Tony Montana');


// async function findOneByFavoriteFood(food) {
//     try {
//       const person = await Person.findOne({ favoriteFoods: food });
//       console.log('Person found:', person);
//     } catch (err) {
//       console.error('Error finding person:', err);
//     }
//   }
  
//   findOneByFavoriteFood('Pasta');
  

// async function findPersonById(personId) {
//     try {
//       const person = await Person.findById(personId);
//       console.log('Person found by ID:', person);
//     } catch (err) {
//       console.error('Error finding person by ID:', err);
//     }
//   }
  
//   findPersonById('6680039eda513c7d5861be3b');


// async function addFavoriteFood(personId, food) {
//     try {
//       const person = await Person.findById(personId);
//       person.favoriteFoods.push(food);
//       const updatedPerson = await person.save();
//       console.log('Updated person:', updatedPerson);
//     } catch (err) {
//       console.error('Error updating person:', err);
//     }
//   }
  
//   addFavoriteFood('6680039eda513c7d5861be38', 'hamburger');

// async function updatePersonAgeByName(personName, newAge) {
//     try {
//       const updatedPerson = await Person.findOneAndUpdate(
//         { name: personName },
//         { age: newAge },
//         { new: true } 
//       );
//       console.log('Updated person:', updatedPerson);
//     } catch (err) {
//       console.error('Error updating person:', err);
//     }
//   }
  
//   updatePersonAgeByName('Tony Montana', 34);

// async function deletePersonById(personId) {
//     try {
//       const removedPerson = await Person.findByIdAndDelete(personId);
//       console.log('Removed person:', removedPerson);
//     } catch (err) {
//       console.error('Error removing person:', err);
//     }
//   }
  
//   deletePersonById('6680039eda513c7d5861be38');


// async function deletePeopleByName(name) {
//     try {
//       const result = await Person.deleteMany({ name });
//       console.log('Deletion result:', result);
//     } catch (err) {
//       console.error('Error deleting people:', err);
//     }
//   }
  
//   deletePeopleByName('John');


// async function LikeBurritos() {
//     try {
//       const people = await Person.find({ favoriteFoods: 'Burritos' })
//         .sort('name')
//         .limit(2)
//         .select('-age')
//         .exec();
//       console.log('People found:', people);
//     } catch (err) {
//       console.error('Error searching people:', err);
//     }
//   }
  
//   LikeBurritos();

  
  
  
  


  
  

  

