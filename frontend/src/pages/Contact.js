import React, { useState, useEffect } from 'react'
import api from '../services/api'

import Mensages from '../components/Mensages/Mensages'

import '../styles/contact.scss'

export function Contact(){

	const [ user_name, setUserName ] = useState('')
	const [ user_mensage, setUserMensage ] = useState('')
	const [ user_email, setUserEmail ] = useState('')
	const [ allPost, setAllPost ] = useState([])

	useEffect(() => {
		async function getAllPost(){
			const response = await api.get('/usuario')

			setAllPost(response.data)
		}

		getAllPost()
	}, [])

	async function handleSubmit(e){
		e.preventDefault()

		const response = await api.post('/usuario',{
			user_name,
			user_mensage,
			user_email
		}) 
		setUserName('')
		setUserEmail('')
		setUserMensage('')

		setAllPost([...allPost, response.data])
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
								required
								value={user_email}
								onChange={e => setUserEmail(e.target.value)}
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

			<div className='titulo_mensages'>
				<h1>Mensages</h1>
			</div>

			<div>
				{allPost.map(data => (
					<Mensages data={data} />
				))}	
			</div>
		</>
	)
}