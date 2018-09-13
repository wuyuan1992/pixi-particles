import React from 'react';
import './Panel.css';
import { PanelSection } from '../../components';

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

                "customerEase":''
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
                <PanelSection
                    title="Scale"
                    adjusts = {[
                        { keyName:'alphaStart', value: json.alphaStart, type:'number' },
                        { keyName:'alphaEnd', value: json.alphaEnd, type:'number' }
                    ]}

                    onUpdate = { updatedData => {
                        this.updateVal(updatedData);
                    }}
                />

                <PanelSection
                    title="Customer ease"
                    adjusts = {[
                        { keyName:'customerEase', value: json.customerEase, type:'text' },
                    ]}

                    onUpdate = { updatedData => {
                        this.updateVal(updatedData);
                    }}
                />
            </div>
        )
    }
}