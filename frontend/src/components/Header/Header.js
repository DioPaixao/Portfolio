import { Link } from 'react-router-dom'
import './style.scss'

function Header(){
	return (
		<div className="header">
			<h1><Link className='logo_link' to="/">LOGO</Link></h1>
			<nav>
				<ul>
					<li><Link to="/aboutme">About me</Link></li>
					<li><Link to="/skills">Skills</Link></li>
					<li><Link to="project">Project</Link></li>
					<li><Link to="contact">Contact</Link></li>
				</ul>
			</nav>
		</div>
	)
}

export default Header