const form = document.getElementById('form-login');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    async function postLogin() {

    const postApi = await fetch('https://yellow-suits-pump-185-139-137-28.loca.lt/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'ngrok-skip-browser-warning': 'no'
            },
            body: JSON.stringify({ password, phone}),
        });
        getPage(postApi.status)
    }
    postLogin();
    function getPage(page) {
        if(page===200) {
            window.location.href = './page.html';
        }
    }
    
    
    // .then(response => {
    //     for(pair of response.headers.entries()) {
    //         if(pair[0]==='x-auth-token') {
    //             localStorage.setItem('token', pair[1]);
    //         }
    //     }
    // })
});
