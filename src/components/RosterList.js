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
					<li key={player.id}>{player.name} {player.isMostChosen && <span>🌟</span>} {player.isHOF && <span id='hof' >HOF</span>}</li>
				))}
			</ul>
		</div>
	)
}

export default Rosterlist