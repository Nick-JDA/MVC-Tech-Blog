// const updateButtonHandler = async (event) => {
//   if (event.target.document.getElementById('update')) {
//     const upId = event.target.getElementById('update');

//     const response = await fetch(`/api/post/${upId}`, {
//       method: 'PUT',
//       body: JSON.stringify({ title, content }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.replace('/post');
//     } else {
//       alert('You guessed wrong');
//     }
//   }
// };