

// const  submitData = {

//            Name: "vincenttommi",
//            Email: "vincenttommi@gmail.com", 
//     }

// const configurationObject = {

//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//             },
//             body: JSON.stringify(formData),
    

//   }

   
// fetch("http://localhost:3000/users",   configurationObject)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
    
//     console.log(object);
//   });




function submitData(Name, Email) {
    const url = 'http://localhost:3000/users';
    const formData = {
      name: Name,
      email: Email
    };
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
    return fetch(url, configObj)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML += data.id;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }
  
   
  