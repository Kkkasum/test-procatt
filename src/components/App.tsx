import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ROUTE_ITEMS, routes } from '@/core/routes'

export function App() {
	return (
		<HashRouter>
			<Routes>
				{routes.map(route => (
					<Route key={route.path} {...route} />
				))}

				<Route path='*' element={<Navigate to={ROUTE_ITEMS} />} />
			</Routes>
		</HashRouter>
	)
}
