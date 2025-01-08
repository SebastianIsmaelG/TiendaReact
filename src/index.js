import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config"; // Tu configuración de Firebase

ReactDOM.render(<App />, document.getElementById('root'));

//lista de productos desde firebase
async function obtenerProductos() {
    const productosCollection = collection(db, "productos");
    const snapshot = await getDocs(productosCollection);
    const productos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    console.log(productos);
}
obtenerProductos();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
