//insert post
fetch("http://localhost:3000/cars",{ method: 'POST',
    body: JSON.stringify({
        carDoor:222,
        color:"ss"
    }),
	headers:{
		'Content-Type': 'application/json'
    }
}).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => {
	console.log("ss")
})

//get
fetch("http://localhost:3000/cars",{ method: 'GET',
	headers:{
		'Content-Type': 'application/json'
    }
}).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => {
	console.log(response)
})

// get con id
fetch("http://localhost:3000/cars/5d293264c8afac1a686523c8",{ method: 'GET',
	headers:{
		'Content-Type': 'application/json'
    }
}).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => {
	console.log(response)
})

// delete con id
fetch("http://localhost:3000/cars/5d292f7ec8afac1a686523c6",{ method: 'DELETE',
	headers:{
		'Content-Type': 'application/json'
    }
}).then(res => console.log("ss")).catch(error => console.error('Error:', error)).then(response => {
	console.log("ssd")
})