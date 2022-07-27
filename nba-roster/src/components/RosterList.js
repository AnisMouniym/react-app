import { rosterList } from '../datas/playerList'

function Rosterlist() {
    const postions = rosterList.reduce(
		(acc, player) =>
			acc.includes(player.postion) ? acc : acc.concat(player.postion),
		[]
	)

	return (
		<div>
			<ul>
				{postions.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{rosterList.map((player) => (
					<li key={player.id}>{player.name}</li>
				))}
			</ul>
		</div>
	)
}

export default Rosterlist