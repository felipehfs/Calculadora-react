import React from 'react'

const Button = props => <button onClick={props.onClick} className={props.class}
    data-value={props.value}>{props.value}</button>


export default class Grid extends React.Component {
    
    render(){
        return (
            <div className="grid">
                <Button value="C" onClick={this.props.clear} />
                {
                    this.props.operators.map((item, index) => 
                        <Button value={item} key={index} onClick={this.props.onClick}/>
                    )
                }
                <Button value="=" onClick={this.props.calculate} />
            </div>
        )
    }
} 