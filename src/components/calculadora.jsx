import React from 'react'
import Grid from './grid'

export default class Calculadora extends React.Component {
    render(){
        return (
            <div className="container">
                <input type="text" value={this.props.display}
                 onChange={this.props.onChange} disabled/>
                <Grid onClick={this.props.onClick}
                    onSignal={this.props.onSignal}
                    operators={this.props.operators} 
                    onDot={this.props.onDot}
                    clear={this.props.clear}
                    onDel={this.props.onDel}
                     calculate={this.props.calculate}/>
            </div>
        )
    }
}