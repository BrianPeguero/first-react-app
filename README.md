# A simple guide to React

to create a simple react app node and npm must be downloaded  
after the installation we can start commands to create a react app

The command for creating a react app is  
`npx create-react-app <app name>`

files are generated for you but most of the arent important in fact you can delete all the code in the src folder

the files that are important are  
`public/index.html` and `src/index.js`

# index.html

the html file looks as so
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

the most important line in the html file is `<div id="root"></div>` 

This root div is where the react app will be rendered


# index.js
a basic index.js file would look like this

```jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//JSX stands for javascript XML and allows for html like syntax to be written in javascript

//JavaScript expressions can also be embedded inside JSX using curly braces, including variables, functions, and properties.
const name = 'Brian'


//Almost everything in React consists of components, which can be class components or simple components.
//Most React apps have many small components, and everything loads into the main App component. Components also often get their own file, so let's change up our project to do so.
class App extends Component {
    render() {
        return(
            <div className="App">
                <h1>Hello React! From {name}</h1>
            </div>
        )
    }
}

//renders the react App class Component into the root element of the index.html file in the public folder
ReactDOM.render(<App />, document.getElementById('root'));
```

# Components
Almost everything in React consists of components, which can be class components or simple components.

Most React apps have many small components, and everything loads into the main App component. Components also often get their own file, so let's change up our project to do so.


This is the basic structure of a react component class
```jsx
class Table extends Component {
    render() {
        return (
            
        )
    }
}
```

create an `App.js` file in the src folder  
to copy and paste the code it should look like so

```jsx
import React, {Component} from 'react'

//cant declared in the class
const name = 'Brian'

class App extends Component {
    render() {
        return(
            <div className="App">
                <h1>Hello React! From {name}</h1>
            </div>
        )
    }
}

//We export the component as App and load it in index.js
export default App
```
<br/>
<br/>

### The `index.js` then looks like this

```jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

//renders the react App class Component into the root element of the index.html file in the public folder
ReactDOM.render(<App />, document.getElementById('root'));
```

now every new component and thus file you make should be imported in to `App.js`

`index.js` should be left alone now

# Simple Components

The other type of component in React is the simple component, which is a function. This component doesn't use the class keyword.

it is a way of breaking the code down further and compartmentalise it

for example the file before making simple components is
```jsx
import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
```

after creating simple components the file looks like so

```jsx
import React, {Component} from 'react'

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Jobs</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return(
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Bertender</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table
```

# Props
Right now, we have a cool Table component, but the data is being hard-coded. One of the big deals about React is how it handles data, and it does so with properties, referred to as props

Props are an effective way to pass existing data to a React component, however the component cannot change the props - they're read-only. In the next section, we'll learn how to use state to have further control over handling data in React.

props are within the render function of the class component

A prop looks like and are passed like so  
`characterData={characters}`

the App.js file will look like this
```jsx
import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {
        //declared in the render or outside of the class
        const name = 'Brian'

        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor'
            },
            {
                name: 'Mac',
                job: 'Bouncer'
            },
            {
                name: 'Dee',
                job: 'Aspiring Actress'
            },
            {
                name: 'Dennis',
                job: 'Bartender'
            }
        ]

        //characterData={characterData} is in curly braces because it is a javascript expression
        return(
            <div className="container">
                <h1>Hello React! From {name}</h1>
                //this is the prop being made and passed
                <Table characterData={characters} />
            </div>
        )
    }
}

//We export the component as App and load it in index.js
export default App


```

this is the Table.js file
```jsx
import React, {Component} from 'react'

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Jobs</th>
            </tr>
        </thead>
    )
}

//takes in the prop characterData that was passed into it in the class component 
const TableBody = (props) => {

    //this is an array mapping function javascrpt
    //it says for every current element in the array name it row
    //for every row i want to create a new row for the table and data cell accessing the name and job field of the object in the list
    //the index option keeps track of the index of the current element
    //You should always use keys when making lists in React, as they help identify each list item.
    //and lastly return it
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })


    return(
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        //I'm going to use the ES6 property shorthand to create a variable that contains this.props.characterData. what was passed into it
        const {characterData} = this.props

        //another way to write this by skipping the rewrite 
        //<TableBody characterData={this.props.characterData}/>

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}

export default Table
```

it is assecced in the other component class like this
`const {characterData} = this.props`

# State
state we can update private data from a component.

states are declared before the render function in the class component

states and props are accessed and sent the same way

the difference is where and how they are declared

in App.js the file would like like this
```jsx
import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor'
            },
            {
                name: 'Mac',
                job: 'Bouncer'
            },
            {
                name: 'Dee',
                job: 'Aspiring Actress'
            },
            {
                name: 'Dennis',
                job: 'Bartender'
            }
        ],
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

    render() {
        //declared in the render or outside of the class
        const name = 'Brian'
        const {characters} = this.state

        //characterData={characterData} is in curly braces because it is a javascript expression
        //*remember that in javascript if you want to pass in a function leave off the '()' because that means it is being executed*/
        return(
            <div className="container">
                <h1>Hello React! From {name}</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
            </div>
        )
    }
}

//We export the component as App and load it in index.js
export default App
```

<br>
<br>

in the Table.js the file will look like this
```jsx
import React, {Component} from 'react'

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Jobs</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

//takes in the prop characterData that was passed into it in the class component 
const TableBody = (props) => {

    //this is an array mapping function javascrpt
    //it says for every current element in the array name it row
    //for every row i want to create a new row for the table and data cell accessing the name and job field of the object in the list
    //the index option keeps track of the index of the current element
    //You should always use keys when making lists in React, as they help identify each list item.
    //and lastly return it
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    

    return(
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        //I'm going to use the ES6 property shorthand to create a variable that contains characterData what was passed into it
        //because there is more that one prop we can call them like this
        // const {characterData, removeCharacter} = this.props
        // ^ that's how you destructure this.props but since it's 2020 you'll probably only use functional components
        //another way to write this by skipping the rewrite 
        //<TableBody characterData={this.props.characterData}/>

        return (
            <table>
                <TableHeader />
                <TableBody     
                    characterData={this.props.characterData} 
                    removeCharacter={this.props.removeCharacter}
                />

            </table>
        )
    }
}

export default Table
```


# Submitting Form Data

