import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }
    
    render() {
        console.log('Render')
        return (
            <div className="counter">
                Counter: {this.state.counter}
            </div>
        )
    }
}
export default Counter
