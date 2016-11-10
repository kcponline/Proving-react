import React, {Component} from "react"

const Navbar = props => (
	<div>
	<form onSubmit={props.handleSubmit}>
		<input 
			onChange={props.handleChange} 
			placeholder="whatever" 
		/>
		<input
			value={props.search}
		/>
	<button>Submit</button>
	</form>
	</div>
)

export default Navbar

