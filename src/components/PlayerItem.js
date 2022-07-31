import CareScale from './CareScale'
import '../styles/PlayerItem.css'

function PlayerItem({ id, name, rings, mvp }) {
	return (
		<li key={id} className='player-item'>
			<img className='player-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='rings' scaleValue={rings} />
				<CareScale careType='mvp' scaleValue={mvp} />
			</div>
		</li>
	)
}