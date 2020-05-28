import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    //appId: process.env.FIREBASE_API_KEY,
    //measurementId: process.env.FIREBASE_API_KEY
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value',(snapshot)=>{
//         const expenses =[];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });
    

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses =[];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// const expenses = [{
//     description:'Gum',
//     note:'',
//     amount:195,
//     createdAt:876876876876
// }
// , {
//     description:'Rent',
//     note:'',
//     amount:109500,
//     createdAt:moment(0).subtract(4, 'days').valueOf()
// }, {
//     description:'Credit Card',
//     note:'',
//     amount:4500,
//     createdAt:moment(0).add(4, 'days').valueOf()
// }
// ]

// expenses.map((expense)=>{
//     database.ref('expenses').push(expense);
// }); 

// database.ref('notes/-M8GmkaG0a2oVKQdCJZQ').update({
//     body: 'Buy food'
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         apojasd:{
//             title: 'First note!'
//         },
//         asdsadasd: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// },{
//     id: '761ase',
//     title: 'Another note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12')

// database.ref().on('value',(snapshot)=>{
//     console.log(`${snapshot.val().name} is a 
//     ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// });

//   database.ref().set({
//       name: 'Ramy Mohareb',
//       age: 26,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'google'
//         },
//       location: {
//           city: 'Dubai',
//           country: 'UAE'
//       }
//   }).then(()=>{
//       console.log('Data is saved');
//   }).catch((e)=>{
//     console.log('This failed.',e)
//   });

// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// });

// database.ref().remove().then(()=>{
//     console.log('data was removed');
// }).catch((e)=>{
//     console.log('did not remove data',e);
// });