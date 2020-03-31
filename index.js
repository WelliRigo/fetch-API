// GET não necessita do segundo argumento
fetch('https://reqres.in/api/users',{
    method: 'POST',
    
    // Avisar ao Fetch que estou passando um JSON
    headers: {
        'Content-Type':'application/json'
    },

    // JSON a ser passado
    body: JSON.stringify({
        name: 'Welli 1'
    })
})
.then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'));