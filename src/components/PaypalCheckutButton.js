import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = ( { order} ) => {
	const paypalConf = {
		currency: 'MXN',
		env: 'sandbox',
		client: {
			sandbox: 'AT_6vDTBD2zoc7NvPbzNxTeH5xE1HdqLwMhySlkunZC6kWt9KkZbWf4Zmp62rj3QvYVHkwfD6ZBHqCW7',
			production: '--id--',			
		},
		style: {
			label: 'pay',
			size:'medium',
			shape:'rect',
			color:'gold'
		}
	};
	const PaypalButton = paypal.Button.driver('react', {React, ReactDOM});

		const payment =(data, actions)=> {
			const payment={
			transactions: [
			    {
				 	amount: {
						total: order.total,
						currency: paypalConf.currency,
					},
					description: 'compra en Test-App',
					custom: order.customer || '',
					item_list:{
						items: order.items
					}
		   		}
		  	],
		  	note_to_payer: 'contáctanos para cualquier duda',	  	
		};
		return actions.payment.create({ payment });
	};
	const onAuthorize = (data, actions) => {
		return actions.payment.execute()
		.then(response => {
			console.log(response);
			alert(`El pago fue correcto, ID: ${response.id}`);
		})
		.catch(error =>{
			console.log(error);
			alert('Error al procesar el pago');
		});
	};

		const onError = (error) =>{
			console.log(error);
			alert('Ocurrio un error al realizar el pago');
		};

		const onCancel = (data, actions) =>{
			alert('Pago cancelado por el cliente');
		};

		return(
			<PaypalButton
			env={paypalConf.env}
			client={paypalConf.client}
			payment={(data, actions) => payment(data, actions)}
			onAuthorize={(data, actions) => onAuthorize(data, actions)} 
			onCancel={(data, actions) => onCancel(data, actions)}
			onError= {(error)=> onError(error)}
			style={paypalConf.style}
			commit
			locate="es_MX"
			/>
		);
};

export default PaypalCheckoutButton;              