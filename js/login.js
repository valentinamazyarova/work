async function getResponse () {
    let response = await fetch('https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/login',{
        method: 'POST',
    });
    let content = await response.text()
    console.log(response)
    console.log(content)
}

getResponse()

//let response = await fetch('https://virtserver.swaggerhub.com/Alowator/VSETUT-API/0.1.0/login', {
  //  method: 'POST',
 // });
 // console.log(response)