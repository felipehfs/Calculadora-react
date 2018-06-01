import React from 'react'
import Grid from './grid'

export default class Calculadora extends React.Component {
    render(){
        return (
            <div className="container">
                <input type="text" value={this.props.display}
                 onChange={this.props.onChange} disabled/>
                <Grid onClick={this.props.onClick}
                    operators={this.props.operators} 
                    clear={this.props.clear}
                     calculate={this.props.calculate}/>
            </div>
        )
    }
}