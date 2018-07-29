(function() {
// Initialize Firebase
const config = {
    apiKey: "AIzaSyB90dz8cu4Yk3lfkAcryi4B8PWM8lIlP8A",
    authDomain: "ux-community.firebaseapp.com",
    databaseURL: "https://ux-community.firebaseio.com",
    projectId: "ux-community",
    storageBucket: "ux-community.appspot.com",
    messagingSenderId: "1069742951667"
};
firebase.initializeApp(config);
console.log('estas dentro del firebase');    
// Introducir los metodos del DOM
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById(`btnSignUp`);
const btnLogout = document.getElementById('btnLogout');

    // Se agrega el evento click para el boton LogIn
    btnLogin.addEventListener( 'click', m => {     
    //Obteniendo e-mail y password
    console.log('se escucho el evento click en el boton login')
    const email = txtEmail.value;
    const passw = txtPassword.value;
    const auth = firebase.auth();
    // Se entra con Sign In
    const promise = auth.signInWithEmailAndPassword(email, passw);
    promise.catch(m => console.log(m.message));

});
    // Se agrega el evento click para el boton SignUp
    btnSignUp.addEventListener('click', e =>{
    console.log('Se escucho el evento de Sign Up')
        //Registrando usuarios con el btnSignUp
    const email = txtEmail.value;
    const passw = txtPassword.value;
    const auth = firebase.auth();
    // Se entra con Sign In
    const promise = auth.createUserWithEmailAndPassword(email, passw);
    promise.catch(e => console.log(e.message));
    btnLogout.addEventListener('click', e =>{
     firebase.auth().signOut();   
    });

// Se identifica al usuario y se deja entrar a la firebase console (listener de autentificacion en tiempo real)
        firebase.auth().onAuthStateChanged( firebaseUser =>{
        if(firebaseUser){
        console.log(firebaseUser); 
        btnLogout.classList.remove('hide');   
        }else{
        console.log('Not logged in'); 
        btnLogout.classList.add('hide');   
        }

        });
    });
}());
