import { openTelegramLink } from '@telegram-apps/sdk-react'
import { useState, type FC } from 'react'

import { Page } from '@/components/Page'
import CrossIcon from '@/components/ui/CrossIcon'
import { DuckLottie } from '@/components/ui/DuckLottie'
import { GiftLottie } from '@/components/ui/GiftLottie'
import InfoIcon from '@/components/ui/InfoIcon'
import { StarIcon } from '@/components/ui/StarIcon'
import { SuccessModal } from '@/components/ui/SuccessModal'
import { useMainButton } from '@/hooks/useMainButton'
import { useCartStore } from '@/store/useCartStore'

export const CartPage: FC = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const items = useCartStore(state => state.items)
	const { removeItem, clean: cleanCart } = useCartStore()

	const onMainButtonClick = () => {
		setModalOpen(true)
		cleanCart()
		// if (openInvoice.isAvailable()) {
		// 	openInvoice('', 'url')
		// 		.then((status: string) => {
		// 			if (status === 'paid') {
		// 				console.log('Paid')
		// 			}
		// 			cleanCart()
		// 		})
		// 		.catch(error => console.error(`Error: ${error}`))
		// }
	}

	useMainButton({
		text: 'Purchase',
		onClick: onMainButtonClick,
		isEnabled: items.length !== 0,
		isVisible: !modalOpen,
	})

	return (
		<>
			<Page>
				{items.length > 0 ? (
					<div
						className={`flex flex-col items-center w-full gap-2 m-1 ${
							modalOpen && 'blurred'
						}`}
					>
						{items.map(item => (
							<div
								key={item.id}
								className='flex items-center justify-start w-full p-2 bg-[#242D38] rounded-xl relative'
							>
								<div className='flex items-center justify-center gap-2'>
									<GiftLottie
										lottieUrl={item.lottieUrl}
										className='w-[100px] h-[100px]'
									/>

									<p className='flex flex-col gap-12 items-between'>
										<span className='font-medium'>
											{item.title}
										</span>
										<span className='flex items-center gap-0.5 font-bold'>
											{item.price}
											<StarIcon width={12} height={12} />
										</span>
									</p>
								</div>

								<div
									className='absolute right-12 top-2 cursor-pointer'
									onClick={() => openTelegramLink(item.tgUrl)}
								>
									<InfoIcon />
								</div>

								<div
									className='absolute right-2 top-2 cursor-pointer'
									onClick={() => removeItem(item)}
								>
									<CrossIcon />
								</div>
							</div>
						))}
					</div>
				) : (
					<div
						className={`flex flex-col items-center gap-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
							modalOpen && 'blurred'
						}`}
					>
						<DuckLottie />

						<span className='font-bold text-xl'>
							Add items to cart
						</span>
					</div>
				)}
			</Page>

			<SuccessModal
				modalOpen={modalOpen}
				closeModal={() => setModalOpen(false)}
			/>
		</>
	)
}
