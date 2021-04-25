import React from 'react';

class TODO extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>TODO Application</h1>
                <form>
                    <label htmlfor="id">Input Item</label>
                    <input id="id"/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TODO;