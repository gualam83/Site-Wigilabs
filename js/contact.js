const form = document.querySelector('.form-inline');
const name = form.querySelector('#name');
const mobil = form.querySelector('#mobil');
const email = form.querySelector('#email');
const message = form.querySelector('#message');

const firebaseConfig = {
    apiKey: "AIzaSyAR1kUNGQMAmdMTIHImiF-vTqFTMdrcqL8",
    authDomain: "wigilabs-15eba.firebaseapp.com",
    databaseURL: "https://wigilabs-15eba.firebaseio.com",
    projectId: "wigilabs-15eba",
    storageBucket: "wigilabs-15eba.appspot.com",
    messagingSenderId: "150694682994",
    appId: "1:150694682994:web:a2936f76c07ee922f4fdeb",
    measurementId: "G-Z4NNKFBKT9"
  };

  function firebasePush() {
        
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    let mailsRef = firebase.database().ref('emails').push().set(
        {
            'name': name.value,
            'mobil': mobil.value,
            'email': email.value,   
            'message': message.value
        }
    );
}      

if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush();

        form.reset();
                
        return alert('Tu mensaje ha sido enviado correctamente!');
    })
}



