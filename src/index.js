import React from 'react'; // paquete CORE que hace el DOM manipulation por nosotros, react se puede usar en multiples dispositivos, no solo en browser, incluso en dispositivos de VR
import ReactDOM from 'react-dom'; // se usan para renderizar basado en el dispositivo y su tamaño
import './index.css'; // nueva sintaxis, de esta forma utiliza el CSS que renderiza, en este caso hay un css solo para index, la diferencia es que solo se usa import y el nombre del file, a diferencia de React y ReactDOM por poner ejemplos, que usan 'from' para indicar de donde se llama. La sintaxis ./ indica que está en el mismo directorio
import Hello from './Hello'; // ./Hello es un archivo js que vive en el mismo directorio que este file, con esta sintaxis, no es necesario poder el .js ya que automaticamente se asume
import * as serviceWorker from './serviceWorker'; //no se ve en este curso pero es basicamente para que la página sea más rápida y pueda potencialmente trabajar offline

// en tanto los imports de arriba se mantengan como están, en la parte superior del file, de primeros
// se pueden agregar cuantos files o paquetes sea necesario

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
