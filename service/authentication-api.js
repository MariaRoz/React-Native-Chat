const registerUser = (username, password) => {
         return fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
};

const loginUser = (username, password) => {
    return fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
};

export { registerUser, loginUser }


