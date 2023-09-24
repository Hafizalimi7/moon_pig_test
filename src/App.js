import './App.css'
import { useState } from 'react'
import Header from './components/header'
import Listings from './components/ui/listings'
import useListings from './hooks/useListings'
import LoadingListings from './components/ui/loadingListings'
import { BrowserRouter as Router } from 'react-router-dom'
import Site from './website'

<Router>
	<div className='App'>
		<Site />
	</div>
</Router>

export default App;
