import {
	mainButton,
	offMainButtonClick,
	onMainButtonClick,
	setMainButtonParams,
} from '@telegram-apps/sdk-react'
import { useEffect } from 'react'

interface Props {
	text: string
	onClick: () => void
	isEnabled: boolean
}

export const useMainButton = ({ text, onClick, isEnabled }: Props) => {
	useEffect(() => {
		if (setMainButtonParams.isAvailable()) {
			setMainButtonParams({
				isVisible: true,
				text: text.toUpperCase(),
				backgroundColor: '#0098EA',
				textColor: '#ffffff',
			})
		}

		return () => {
			if (setMainButtonParams.isAvailable()) {
				setMainButtonParams({
					isEnabled: false,
					isVisible: false,
				})
			}
		}
	}, [])

	useEffect(() => {
		if (setMainButtonParams.isAvailable()) {
			setMainButtonParams({
				text: text.toUpperCase(),
			})
		}
	}, [text])

	useEffect(() => {
		if (setMainButtonParams.isAvailable()) {
			setMainButtonParams({
				isEnabled,
			})
		}
	}, [isEnabled])

	useEffect(() => {
		if (onMainButtonClick.isAvailable()) {
			onMainButtonClick(onClick)
		}

		return () => {
			if (offMainButtonClick.isAvailable()) {
				offMainButtonClick(onClick)
			}
		}
	}, [onClick])

	return mainButton
}
