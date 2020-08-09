import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: "",
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""});
    }

    onChange = (e) => {
        this.setState({title: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add New Todo Task"
                onChange={this.onChange}
                style={{flex: "10", padding: "5px"}}
                value={this.state.title}></input>
                <input type="submit" value="Submit" className="btn"></input>
            </form>
        )
    }
}


export default AddTodo;
