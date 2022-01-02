import React, { useState } from 'react'
import api from '../services/api'

import '../styles/contact.scss'

export function Contact(){

	const [ user_name, setUserName ] = useState('')
	const [ user_mensage, setUserMensage ] = useState('')

	async function handleSubmit(e){
		e.preventDefault()

		const response = await api.post('/usuario',{
			user_name,
			user_mensage,
			user_email: null
		}) 
		setUserName('')
		setUserMensage('')
	}
 
	return(
		<>
			<div className="main_content">
				<div className="left_content">
					<div className="left_content_text">
						<h1>Hi, Let’s have a quick chat</h1>
						<h3>I replay withing 2 days</h3>
					</div>
					<div className="img"></div>
				</div>

				<div className="right_content">
					<div className="all_right_content">
						<h1>Contact me</h1>
						<form onSubmit={handleSubmit}>

							<input
								type="text" 
								id="inputID" 
								placeholder="Your name" 
								required
								value={user_name}
								onChange={e => setUserName(e.target.value)}
							/>
							<input 
								type="email" 
								id="inputID" 
								placeholder="Your email" 
							/>
							<textarea 
								id="textareaID" 
								placeholder="Your mensage here" 
								required
								value={user_mensage}
								onChange={e => setUserMensage(e.target.value)}
							/>
							<button className="bnt_submit" type="submit">Submit</button>

						</form>
					</div>
				
				</div>
			</div>

			<div className="mensages_container">
				<h1>Mensages</h1>
				<div className="mensages">
					<h2>Nome da pessoa</h2>
					<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis neque non lacus laoreet viverra et vel arcu. Aenean cursus, eros at pharetra bibendum, arcu tortor consectetur sapien, eu iaculis sapien sem eget tortor.</h3>
				</div>
			</div>
		</>
	)
}