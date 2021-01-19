// Add your code here
function submitData(userName, userEmail) {
    const obj = {name: userName, email: userEmail}
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
        .then(data => {
            console.log("success", data)
            const newP = document.createElement("p")
            const id = data.id
            newP.textContent = id
            document.body.append(newP)

        })
        .catch( function ( error ) {
            document.body.innerHTML = error.message
          } )
}

submitData("ori", "om")
