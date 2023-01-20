const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;

  // console.log(name, password, phone)

  async function postLogin() {
    const postApi = await fetch(
      "https://yellow-suits-pump-185-139-137-28.loca.lt/api/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'ngrok-skip-browser-warning': 'no'
        },
        body: JSON.stringify({ name, password, phone }),
      }
    );
    getPage(postApi.status);
  }
  postLogin();
  function getPage(page) {
    if (page === 201) {
      window.location.href = "../sign-in/sign-in.html";
      
    }
  }
});
