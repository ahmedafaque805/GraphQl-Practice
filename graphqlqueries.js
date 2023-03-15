// mutation{
//     createEvent(eventInput:{
//       title:"test Title",
//       description:"Description",
//       price:10.34,
//       date:"2023-03-12T19:20:19.673+00:00"
//     })
//     {
//       title
//     }
//   }


// query{
// 	events {
// 	title
//     _id
//   }
// }

// mutation{
//     createUser(userInput: { email:"afaque@gmail.com",password:"12345678"}) 
//     {
//       email
//       password
//     }
//   }


// query{
//     bookings{
//       _id
//       createdAt
//       updatedAt
//       user{
//         email
//       }
//       event{
//         title
//         description
//       }
//     }
//   }