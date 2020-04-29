import React from 'react'; //en la sintaxis anterior, esto se hacía: import React, { Component } from 'react';

/*class Card extends React.Component {
	render() {
		// return <h1>Hello World</h1>  // muy importante, return espera solo una cosa, una linea una sola salida, entonces si se le va a dar mas de una instruccion, se debe encerrar en paréntesis igual que abajo
		return ( //JSX -> react, permite escribir sintaxis SIMILAR a HTML dentro de JS, no es HTML sin parte del virutal DOM que crea react
			<div className= 'f1 tc'>
				<h1>Hello World</h1>
			</div>
		); // ver en div, que dice className, porque no class si se puede escribir como en HTML? eso es porque class es tambien un palabra reservada en JS, por eso, hay que usan className, luego ver que las clases que se agrega son 'f1 tc', son clases de Tachyons, que se importa desde el file index.js
	}
}*/

const Card = (props) => {
	const { name, email, id } = props; //esto es destructuring, a un objeto con varias elementos dentro, le asigno lo que trae el parametro, entonces el objeto toma los valores del parametro (hay que usar los mismo nombres ej. si el parametro trae props.name entonces el elemento dentro del objeto se llama name), me evita tener que usar: props.id - props.name - props.email
	// el destructuring se puede hacer tambien dentro de los parametros de la funcion -> const Card = (name, email, id) => {...
	return (
		<div className= 'bg-light-green dib br3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='robots' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	) // React introdujo en la version 16.2 el 'elemento' Fragment, para utilizar en vez de Div y con el fin de finalmente deprecar su uso
}

export default Card; //se usa default, cuando solo se exporta una cosa.