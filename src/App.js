import React from 'react'
import Handlebars from 'handlebars'
import Markdown from 'react-markdown'

import contractTemplate from './contractTemplate'
import contractVars from './contractVars.json'

const compiledHandlebars  =  Handlebars.compile( `${contractTemplate}` )

const App = () => (
	<div className="contract">
		<Markdown source={compiledHandlebars(contractVars)} />
	</div>
)

export default App
