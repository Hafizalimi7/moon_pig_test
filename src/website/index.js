import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './home'
import Details from './details'
import NotFound from './notFound'

const Site = () => {
	const location = useLocation()

	return (
		<Switch location={location} key={location.pathname}>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/card/:id'>
				<Details />
			</Route>
			<Route path='*'>
				<NotFound />
			</Route>
		</Switch>
	)
}

export default Site