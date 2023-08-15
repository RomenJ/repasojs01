alert('active');
const url='https://jsonplaceholder.typicode.com/users'

//Extrae del server
//fetch(url)

//Envía al server:
fetch(url, {
  method:'POST',
  headers:{
    'Content-type': 'application/json',
    'Authoritation': 'Bearer acdghgjedeertokenauth'
    
  },
  body: JSON.stringify({
    name:'Tipo happy',
    website: 'google.com'
  })

})
  

.then ((response)=>response.json())
    .then(data=>console.log(data))