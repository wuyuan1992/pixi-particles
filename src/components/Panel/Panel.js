import React from 'react';
import './Panel.css';

class Panel extends React.Component{
    constructor(){
        super();

        this.state = {
            json: {
                "alpha": {
                    "start": 1,
                    "end": 0
                },
                
                "scale": {
                    "start": 0.1,
                    "end": 0.01,
                    "minimumScaleMultiplier": 1
                },
            }
        }
    }

    updateScaleStart(val){
        if(val>100){
            val = 100;
        }
        const { json } = this.state;
        json.scale.start = val;
        this.setState({
            json: json
        })
    }

    updateScaleEnd(val){
        // if(val>100){
        //     val = 100;
        // }
        const { json } = this.state;
        json.scale.end = val;
        this.setState({
            json: json
        })
    }

    render(){
        const { scale } = this.state.json;

        return (
            <div className="panel">

            
                <h4>Scale</h4>

                <AdjustBtn tick={ 0.01 } value={ scale.start } onChange={ value => this.updateScaleStart(value) } />


                <AdjustBtn tick={ 0.001 } value={ scale.end } onChange={ value => this.updateScaleEnd(value) } />
                
            </div>
        )
    }
}

class AdjustBtn extends React.Component{
    constructor(){
        super();

    }
    render(){

        const { value, onChange, tick } = this.props;
        return (
            <div className="section">
                <input type="number" value={ value } onChange={ e => onChange(e.target.value) } />
                <button onClick={ ()=>{ onChange( value + tick) } }>+</button>
                <button onClick={ ()=>{ onChange( value - tick ) } }>-</button>
            </div>
        )
    }
}

export default Panel;