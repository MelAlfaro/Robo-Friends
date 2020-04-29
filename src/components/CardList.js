import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
	  	<div>
			{
				robots.map((user,i) => {
					return (
						<Card 
							key={i}
							//para que sirve key? ayuda a renderizar, en caso de que se elimine un item del array por poner un ejemplo, el virtual DOM no tiene porque dibujarse de nuevo por completo, sino que con el key, React ya sabría que se removió y le ahorra trabajo
			  				//la prop key debería tener algo que no cambie, ya que los items del array se mueven si se cambia el array, en este caso un mejor opcion sería id (i es para el ejemplo)
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
						/>
					);	
				})
				//cuando se agrega JS dentro de JS, se debe encerrar dentro de {}
			} 
	  	</div>
	);
} 
  
export default CardList;