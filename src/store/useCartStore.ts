import { create } from 'zustand'

import type { IItem } from '@/data/data'

interface ICartStore {
	items: IItem[]
	addItem: (item: IItem) => void
	removeItem: (item: IItem) => void
	clean: () => void
}

export const useCartStore = create<ICartStore>(set => ({
	items: [],
	addItem: item =>
		set(state => ({ ...state, items: [...state.items, item] })),
	removeItem: item =>
		set(state => ({
			...state,
			items: state.items.filter(i => i.id !== item.id),
		})),
	clean: () => set(state => ({ ...state, items: [] })),
}))
