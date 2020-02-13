import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: []
    }

    //this is a method that will be passe as a props to the table function so that when a button is clicked this method is evoked
    removeCharacter = (index) => {
        const {characters} = this.state

        //You must use this.setState() to modify an array. Simply applying a new value to this.state.property will not work.
        this.setState({
            //filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JavaScript.
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    render() {
        //declared in the render or outside of the class
        const name = 'Brian'
        const {characters} = this.state

        //characterData={characterData} is in curly braces because it is a javascript expression
        //*remember that in javascript if you want to pass in a function leave off the '()' because that means it is being executed*/
        return(
            <div className="container">
                <h1>Hello React!</h1>
                <br/>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

//We export the component as App and load it in index.js
export default App

