import React, {Component} from 'react'
import Navbar from '../components/navbar'

class Home extends Component {
	
	constructor (props) {
		super(props)
		this.state = {search: ''}
	}

	handleChange (event) { {/* e or event same difference */}
		event.preventDefault()
		this.setState({search: event.target.value})
	}

	handleSubmit () {
		console.log(this.state.search)
		this.setState({search: ''})
	}


	render(){
		return(
				<div>
				DUDE RENDER MY HOME ASS
				<Navbar handleChange={this.handleChange.bind(this)} />
				<Navbar handleSubmit={this.handleSubmit.bind(this)} />
				</div>
			)
	}
}

export default Home