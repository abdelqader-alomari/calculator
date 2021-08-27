import React from 'react'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        }
    }
    handleClick = (e) => {
        this.setState({
            result: this.state.result.concat(e.target.name)
        })
    }
    clear = () => {
        this.setState({
            result: ""
        })
    }
    back = () => {
        this.setState({
            result: this.state.result.substring(0, this.state.result.length - 1)
        })
    }
    calculate = () => {
        this.setState({
            result: eval(this.state.result).toString()
        })
    }
    render() {

        return (
            <>
                <div className="container">
                    <form>
                        <input type="text" value={this.state.result} />
                    </form>
                    <div className="calculator">
                        <button className="highlight" onClick={this.clear} id="clear">Clear</button>
                        <button className="highlight" onClick={this.back} id="back">✖</button>
                        <button className="highlight" name="/" onClick={this.handleClick}>&divide;</button>
                        <button name="7" onClick={this.handleClick}>7</button>
                        <button name="8" onClick={this.handleClick}>8</button>
                        <button name="9" onClick={this.handleClick}>9</button>
                        <button className="highlight" name="*" onClick={this.handleClick}>&times;</button>
                        <button name="4" onClick={this.handleClick}>4</button>
                        <button name="5" onClick={this.handleClick}>5</button>
                        <button name="6" onClick={this.handleClick}>6</button>
                        <button className="highlight" name="-" onClick={this.handleClick}>-</button>
                        <button name="1" onClick={this.handleClick}>1</button>
                        <button name="2" onClick={this.handleClick}>2</button>
                        <button name="3" onClick={this.handleClick}>3</button>
                        <button className="highlight" name="+" onClick={this.handleClick}>+</button>
                        <button name="0" onClick={this.handleClick}>0</button>
                        <button name="." onClick={this.handleClick}>.</button>
                        <button className="highlight" onClick={this.calculate} id="result">=</button>
                    </div>
                </div>
            </>
        )
    }
}

export default App
