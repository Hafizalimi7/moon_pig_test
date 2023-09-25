import { BrowserRouter as Router } from 'react-router-dom'
import Site from './website'

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Site />
			</div>
		</Router>
	)
}

export default App