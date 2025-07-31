import { create } from 'zustand'

import type { IItem } from '@/data/data'

interface ICartStore {
	items: IItem[]
	addItem: (item: IItem) => void
	removeItem: (item: IItem) => void
	clean: () => void
}

export const useCartStore = create<ICartStore>(set => ({
	items: [
		{
			id: 1,
			title: 'Plush Pepe',
			price: 100,
			lottieUrl:
				'https://nft.fragment.com/gift/plushpepe-1159.lottie.json',
			tgUrl: 'https://t.me/nft/plushpepe-1159',
		},
		{
			id: 2,
			title: "Durov's Cap",
			price: 200,
			lottieUrl:
				'https://nft.fragment.com/gift/durovscap-2301.lottie.json',
			tgUrl: 'https://t.me/nft/durovscap-2301',
		},
		{
			id: 3,
			title: 'Swiss Watch',
			price: 300,
			lottieUrl:
				'https://nft.fragment.com/gift/swisswatch-14824.lottie.json',
			tgUrl: 'https://t.me/nft/swisswatch-14824',
		},
		{
			id: 4,
			title: 'Vintage Cigar',
			price: 400,
			lottieUrl:
				'https://nft.fragment.com/gift/vintagecigar-8053.lottie.json',
			tgUrl: 'https://t.me/nft/vintagecigar-8053',
		},
	],
	addItem: item =>
		set(state => ({ ...state, items: [...state.items, item] })),
	removeItem: item =>
		set(state => ({
			...state,
			items: state.items.filter(i => i.id !== item.id),
		})),
	clean: () => set(state => ({ ...state, items: [] })),
}))
