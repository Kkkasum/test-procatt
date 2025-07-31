import { useEffect, useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Page } from '@/components/Page'
import { GiftLottie } from '@/components/ui/GiftLottie'
import { StarIcon } from '@/components/ui/StarIcon'
import { ROUTE_CART } from '@/core/routes'
import { items } from '@/data/data'
import { useMainButton } from '@/hooks/useMainButton'
import { useCartStore } from '@/store/useCartStore'

export const ItemsPage: FC = () => {
	const [activeId, setActiveId] = useState<number>()
	const [text, setText] = useState<string>('Go to cart')
	const addItemToCart = useCartStore(state => state.addItem)

	const navigate = useNavigate()

	const onClick = (itemId: number) => {
		if (itemId === activeId) {
			setActiveId(undefined)
		} else {
			setActiveId(itemId)
		}
	}

	const onMainButtonClick = () => {
		if (activeId) {
			const item = items.filter(item => item.id === activeId)[0]

			addItemToCart(item)
			setActiveId(undefined)
		} else {
			navigate(ROUTE_CART)
		}
	}

	useEffect(() => {
		if (activeId) {
			setText(() => 'Add to cart')
		} else {
			setText(() => 'Go to cart')
		}
	}, [activeId])

	useMainButton({
		text: text,
		onClick: onMainButtonClick,
		isEnabled: !!activeId,
	})

	return (
		<Page back={false}>
			<div className='flex flex-wrap gap-8 py-2 justify-center text-[10px]'>
				{items.map(item => (
					<div
						key={item.id}
						className={`flex flex-col items-center gap-2 p-2 max-w-44 w-44 rounded-xl bg-[#242D38] cursor-pointer hover:text-[#0097E9] duration-300 border-1 hover:border-[#0097E9] ${
							activeId === item.id
								? 'border-[#0097E9]'
								: 'border-transparent'
						}`}
						onClick={() => onClick(item.id)}
					>
						<GiftLottie
							lottieUrl={item.lottieUrl}
							className='w-[144px] h-[144px]'
						/>

						<p className='flex items-center justify-between w-full'>
							<span>{item.title}</span>
							<span className='flex items-center gap-0.5 font-bold'>
								{item.price}
								<StarIcon width={12} height={12} />
							</span>
						</p>
					</div>
				))}
			</div>
		</Page>
	)
}
