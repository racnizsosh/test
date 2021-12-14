document.addEventListener("DOMContentLoaded", function(){


  const callback = (e) => {
    e.preventDefault();
    alert('as');
    const formData = new FormData(elem);
    console.log(formData);
    console.log(formData.get('email1'));

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://2oamamq3p6.execute-api.us-east-1.amazonaws.com/dev/users", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        const body = JSON.parse(result);
        if (body.message === 'success') alert('Conta criada com sucesso!');
        window.location.href = '/test/app-login.html';
      })
      .catch(error => console.log('error', error));
  }

  const elem = document.getElementById('user-register');
  elem.addEventListener('submit', callback, false)
  // elem.addEventListener('user-register', (e) => {
  //   e.preventDefault();
  //   alert('as');
  //   const formData = new FormData(elem);
  //   console.log(formData.get('email1'));
  // })
});
