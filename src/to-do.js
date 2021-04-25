import React from 'react';

class TODO extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            text: "",
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        
        if(this.state.text.length === 0) return;

        const newItem = {
            text: this.state.text,
            id: Date.now()
        }

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }
    
    render(){
        return (
            <div>
                <h1>TODO Application</h1>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id">Input Item</label>
                    <input id="id" onChange={this.handleChange} value={this.state.text}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TODO;
