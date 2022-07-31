import '../styles/RosterList.css'
import { playerList } from '../datas/playerList'
function Rosterlist() {
    const positions = playerList.reduce(
		(acc, player) =>
			acc.includes(player.position) ? acc : acc.concat(player.position),
		[]
	)

	return (
		<div>
			<ul>
				{positions.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{playerList.map((player) => (
					<li className='list' key={player.id}>{player.name} {player.isHOF && <span id='hof' >HOF</span>} {<span className='position'>{player.position}</span>} {<span className='ovr'>OVR: {player.OVR}</span>}</li>
				))}
				
			</ul>
		</div>
	)
}

export default Rosterlist