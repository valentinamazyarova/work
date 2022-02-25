async function getResponse () {
    let response = await fetch('https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/users',{
        method: 'POST',
        header: {
            Location: 'https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/users',
            'content-type': 'application/json'
        },
        body: JSON.stringify({name: 'Валя'})
   });

    if (!response.ok) {
    console.error('Запрос не удался');
    return;
}
 let content = await response.json()
 console.log(response)
 console.log(content)
}

getResponse()


