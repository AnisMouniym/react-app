import rings from '../assets/trophy.png'
import mvp from '../assets/mvp.jpg'
import { playerList } from '../datas/playerList'
function CareScale({careType}) {
	const scaleType =
		careType === 'rings' ? (
			<img src={rings} alt='rings-icon' />
		) : (
			<img src={mvp} alt='mvp-icon' />
		)

	return (
		<div>
			{playerList.map((rangeElem) =>
					<span key={rangeElem.toString()}>{scaleType}</span>
			)}
		</div>
	)
}

export default CareScale