import { backButton } from '@telegram-apps/sdk-react'
import { useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

export function Page({
	children,
	back = true,
}: PropsWithChildren<{ back?: boolean }>) {
	const navigate = useNavigate()

	useEffect(() => {
		if (back) {
			backButton.show()
			return backButton.onClick(() => {
				navigate(-1)
			})
		}
		backButton.hide()
	}, [back])

	return children
}
