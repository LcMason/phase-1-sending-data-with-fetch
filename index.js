// Add your code here

let name = 'Lionel'
let email = 'Lionel@Lionel.com'

const submitData = (name, email) => {

    const configurationObject = {
        methond: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: 'Lionel',
            email: 'Lionel@Lionel.com'
        })
    };

    fetch("http://localhost:3000/users", configurationObject)

.then(function (response) {
        return response.json();
    })
    .then(function (object){
        document.body.innerHTML = object[ "id" ]
    } )

.catch(function (error){
    document.body.innerHTML = error.message
    } )
}




