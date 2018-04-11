import React from 'react'
import Handlebars from 'handlebars'
import Markdown from 'react-markdown'

// import contractTemplate from './contracts/contractTemplate'
// import contractVars from './data/contractVars.json'

import contractTemplate from './contracts/eosio.system-claimrewards-rc'
import contractVars from './data/eosio.system-abi.json'

const compiledHandlebars  =  Handlebars.compile( `${contractTemplate}` )

const App = () => (
	<div className="contract">
		<Markdown source={compiledHandlebars(contractVars)} />
	</div>
)

export default App
