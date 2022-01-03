import './style.scss'

function Mensages({ data }){
	return(
		<div className="mensages_container">
			<div className="mensages">
				<h2>{data.user_name}</h2>
				<h3>{data.user_mensage}</h3>
				<button>Excluir</button>
			</div>
		</div>
	)
}

export default Mensages