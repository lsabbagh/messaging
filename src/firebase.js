import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyB0WX3K_2eVhz4U7OIwxrUejGlb4UTRPzQ",
  authDomain: "chatoo-d7e2e.firebaseapp.com",
  projectId: "chatoo-d7e2e",
  storageBucket: "chatoo-d7e2e.appspot.com",
  messagingSenderId: "179059491169",
  appId: "1:179059491169:web:ad8da6c36cc6ff0be2c520"
}

firebase.initiazeApp(config)

export default firebase