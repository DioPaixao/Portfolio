import { useNavigate } from 'react-router-dom'

import './style.scss'

function Main(){
	const navigate = useNavigate()

	function navigateToContact(){
		navigate.push('/contact')
	}

	return(	
		<div className="main">
			<div className="main_left">
				<h2>Welcome to my site</h2>
				<h1>Hi! I'm Diogo<br/>Web <strong>Developer</strong></h1>
				<h3>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Duis posuere aliquam <br/> lectus.</h3>
				<div className="buttons">
					<button onClick={navigateToContact} className="bhire">Hire me</button>
					<button className="bproject">See my project</button>
				</div>
			</div>

			<div className="main_rigth">
				<div className="imagem"></div>
			</div>
		</div>
	)
}

export default Main