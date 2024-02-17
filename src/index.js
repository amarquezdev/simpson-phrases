import React from 'react';
import ReactDOM from 'react-dom'; // Importar desde 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'));

// Si quieres empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un punto de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
