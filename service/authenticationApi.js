const url = 'http://localhost:3000/auth/';

const authUser = (username, password, page) => {
         return fetch(url+page, {
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


export { authUser }


