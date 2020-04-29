import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots'; // para imports hechos de exports que no usan default, la regla es desestructurarlos { }
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	/*tengo el componente App, que tiene dos 'states' (robots y searchfield), como App es el dueño de state, cualquier componente que tiene
	  'state' usa la sintaxis 'class' y así pueden usar la función constructor para creat this.state
	   y "state" es lo que cambia en un app, es lo que describe una app.*/

	constructor() {
		super()
		//this.state dentro del constructor, this.setState no.
		//this.state es un trigger, que indica que en cuanto cambie lo que esta ahi, actúe de acuerdo  a lo descrito en lo demás métodos
		this.state = { // state se define como algo que puede cambiar y afectar la aplicación
			//robots: robots, // claramente robots es un array que no cambia, pero se pone aca para ejemplificar, no siempre lo que se tienen que actualizar va a ser un array de un tamaño definidido
			robots: [],
			searchfield: ''
		}
	}
	
	// ver: https://es.reactjs.org/docs/react-component.html#componentdidmount
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users') //fecth es parte del objeto window, es una herramienta para poder hacer requests a un servidor
		.then(response => response.json())
		.then(users => this.setState({ robots: users}))
	}

	onSearchChange = (event) => { //porque usando = y => ? bueno es solo una regla de react que se usa cuando se crean los metodos propios, sintaxis de react, por lo que solo hay que seguirla siempre
		this.setState({ searchfield: event.target.value }) //otro metodo de react, cada vez que se quiere cambiar state, se hacer por medio de this.setState
	}

	render() { // notar que las funciones que son parte de react, no llevan = y =>
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

			return !robots.length  ? // "!robots.length" es lo mismo que decir "robots.length === 0"
				 <h1>Loading...</h1>
			:
			(
				<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
			  		<CardList robots={filteredRobots}/>
			  	</Scroll>
			  	</div>
			);
		
	} //recordar que los custom components (creados por uno mismo) se declaran con mayúscula, para diferenciarlos
}

export default App;

/*
¿Qué hace setState?
setState() programa una actualización al objeto estado de un componente. 
Cuando el estado cambia, el componente responde volviendo a renderizar.

¿Cuál es la diferencia entre state y props?
props (abreviatura de ”properties”) y state son objetos planos de JavaScript. Mientras ambos contienen información 
que influye en el resultado del render, son diferentes debido a una importante razón: props se pasa al componente 
(similar a los parámetros de una función) mientras que state se administra dentro del componente 
(similar a las variables declaradas dentro de una función).
*/