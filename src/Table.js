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