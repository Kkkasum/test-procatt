import type { ComponentType } from 'react'

import { CartPage } from '@/pages/CartPage'
import { ItemsPage } from '@/pages/ItemsPage'

interface Route {
	path: string
	Component: ComponentType
}

export const ROUTE_ITEMS = '/items'
export const ROUTE_CART = '/cart'

export const routes: Route[] = [
	{ path: ROUTE_ITEMS, Component: ItemsPage },
	{ path: ROUTE_CART, Component: CartPage },
]
