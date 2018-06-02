import React from 'react'

const Button = props => <button onClick={props.onClick} className={props.className}
    data-value={props.value}>{props.value}</button>


export default class Grid extends React.Component {
    
    render(){
        const lateral = ['+', '9', '5', '1'];
        return (
            <div className="grid">
                <Button value="C" onClick={this.props.clear} className="lateral" />
                <Button value="-/+" onClick={this.props.onSignal}/>
                <Button value="." onClick={this.props.onDot} />
                <Button value="del" onClick={this.props.onDel} />
                {
                    this.props.operators.map((item, index) => 
                        <Button value={item} key={index} className={lateral.includes(item.trim())? 'lateral':'' }onClick={this.props.onClick}/>
                    )
                }
                <Button value="=" onClick={this.props.calculate} className="equals"/>
            </div>
        )
    }
} 