import React from 'react';

//uso de children
/* en app.js, Scroll está envolviendo (wrapping) al componente CardList, por lo tanto, 
   se convierte en un child que está dentro de los props de Scroll */
const Scroll = (props) => {
	return ( // para los style -> recordar que esto es JSX, los estilos se pueden agregar de forma similar a HTML pero con doble {{}}
		< div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px' }}>
			{props.children}
		</div>
	)
};

export default Scroll;