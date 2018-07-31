//Creando Login con Google
console.log("google activo");
var provider = new firebase.auth.GoogleAuthProvider();

$('#login-google').click(function () {
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result.user);
      saveData(result.user);
      // signIn(result.user);
      $('#auth-login').hide();
      $('#auth-login2').hide();
      $('#photo').append("<img src='" + result.user.photoURL + "'/>");
      $('#data').append("<div> " + result.user.displayName + " </div>");
      $('#data2').append("<div> " + result.user.email + " </div>");
    })
  // .then(function (profile) {
  //   signIn(result.user);

  // });
});

login.addEventListener("click", e => {
    console.log("entro login");
//Obteniendo e-mail y password
    const email= txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    
// Se entra con Sign In
  window.location.assign("https://rociomatias05.github.io/DataLabo-2da-entrega/dashboard/src/index.html")

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message)
   
);
    location.href("index.html");
    });
    
// Se agrega el evento click para el boton SignUp
signUp.addEventListener("click", e =>{
    console.log("entro SingUp");
//Creando usuarios con el btnSignUp

//Checando login con teléfono
firebase.auth().onAuthStateChanged(function (usuaria) {
  if (usuaria) {
    console.log("Exitoso")
  } else {
    console.log("Fallido")
  }
});

//Parte que se moverá a DOM
var btnNumber = document.getElementById("btNum");
var btnCode = document.getElementById("btCode");


//Login con número
btnNumber.addEventListener('click', function () {
  var phoneNumber = document.getElementById("num-cel").value;
  console.log(phoneNumber)
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  var appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      console.log(confirmationResult)

      //Confirmando código
      window.confirmationResult = confirmationResult

    }).catch(function (error) {
      console.log(error)
    });
})

//Validar usuaria
btnCode.addEventListener('click', function () {
  var validCode = document.getElementById('sentCode').value
  console.log(validCode)
  window.confirmationResult.confirm(validCode)
    .then(function (result) {
      // Login funcional 
      var user = result.user;
      console.log(user);
      savePhone(result.user);

    }).catch(function (error) {
      console.log(error)
    });
})

let savePhone = (user) => {
  const phone = {
    uid: user.uid,
    phoneNumber: user.phoneNumber
  }
  firebase.database().ref("phone/usuarias/" + user.uid)
    .set(phone)
}
