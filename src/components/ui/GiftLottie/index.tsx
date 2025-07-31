import lottie from 'lottie-web/build/player/lottie_light'
import { useEffect, useRef, useState, type FC } from 'react'

interface Props {
	lottieUrl: string
	className: string
}

export const GiftLottie: FC<Props> = ({ lottieUrl, className }) => {
	const [animationData, setAnimationData] = useState()
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const fetchLottieJson = async () => {
			const response = await fetch(lottieUrl)

			setAnimationData(await response.json())
		}

		fetchLottieJson()
	}, [])

	useEffect(() => {
		if (containerRef.current) {
			const animation = lottie.loadAnimation({
				name: lottieUrl,
				container: containerRef.current,
				renderer: 'svg',
				loop: false,
				autoplay: false,
				animationData,
				rendererSettings: {
					progressiveLoad: true,
				},
			})

			return () => animation.destroy()
		}
	}, [animationData])

	return (
		<div className='rounded-xl overflow-hidden'>
			<div
				ref={containerRef}
				className={className}
				onMouseEnter={() => lottie.play(lottieUrl)}
				onMouseLeave={() => lottie.stop(lottieUrl)}
			/>
		</div>
	)
}
