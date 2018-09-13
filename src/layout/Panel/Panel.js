import React from 'react';
import './Panel.css';
import { AdjustSection } from '../../components';

export class Panel extends React.Component{
    constructor(){
        super();

        this.state = {
            json: {
                // alpha
                "alphaStart": 1,
                "alphaEnd": 0,
                
                // scale
                "scaleStart": 0.1,
                "scaleEnd": 0.01,
                "minimumScaleMultiplier": 1,
            }
        }
    }

    updateVal(updateData){
        let json = {...this.state.json, ...updateData};
        this.setState({ json },()=>{
            console.log( this.state );
        });
    }

    render(){
        const { json } = this.state;

        return (
            <div className="panel">
                <AdjustSection
                    title="Scale"
                    adjusts = {[
                        { keyName:'alphaStart', value: json.alphaStart, type:'number' },
                        { keyName:'alphaEnd', value: json.alphaEnd, type:'number' }
                    ]}

                    onUpdate = { updatedData => {
                        this.updateVal(updatedData);
                    }}
                />
            </div>
        )
    }
}