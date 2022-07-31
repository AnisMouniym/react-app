import rings from '../assets/trophy.png'
import mvp from '../assets/mvp.jpg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const scaleType =
		careType === 'rings' ? (
			<img src={rings} alt='rings-icon' />
		) : (
			<img src={mvp} alt='mvp-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale