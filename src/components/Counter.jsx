import React, { Component } from 'react'

export class Counter extends Component {
    render() {
        console.log('Render')
        return (
            <div className="counter">
                Counter: {0}
            </div>
        )
    }
}
export default Counter
