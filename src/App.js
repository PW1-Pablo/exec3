import React from "react";

class App extends React.Component {

	constructor() {
		super()

		this.state = {
			sub: "G1",
			nota: 0,
			result: " ",
		}
	}

	onChangeInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

	calcSub() {
		let resultSub
		const { sub, nota } = this.state

		if (sub === "G1") {
			resultSub =  21 - (nota * 2)
		} else {
			resultSub = (21 - nota) / 2
		}

		this.setState({
			result: resultSub
		})
	}

	showResult() {
        if (this.state.result !== " ") {
            return <p>Sua nota na sub {this.state.sub} devera ser {this.state.result}</p>
        }

        return null
    }

	render() {
		return(
			<div>
				<h1>Calculadora Nota de Sub</h1>
				
				<br />
			
				<label>
					<input type="radio" value="G1" name="sub"
						checked={this.state.sub === "G1"}
						onChange={(event) => this.onChangeInput(event)}
						/> Sub G1
				</label>

				<label>
					<input type="radio" value="G2" name="sub"
						checked={this.state.sub === "G2"} 
						onChange={(event) => this.onChangeInput(event)}
						/> Sub G2
				</label> <br />

				<br />
				Nota: Sub {this.state.sub} <br />
				<input type="number" name="value" 
					onChange={(event) => this.onChangeInput(event)}/>

				<br />

				<input type="button" value="Calcular" 
					onClick={() => this.calcSub()}/>
				
				<br /><br />

				{this.showResult()}

			</div>
		)	
	}
}

export default App;
