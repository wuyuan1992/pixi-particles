import React from 'react';
import { AdjustNumber, AdjustText, AdjustMeter } from '../';
import './PanelSection.css';



function selectAdjustType(type){
    // 键值对赋值会失败； 暂时用 switch 代替
    // const adjustTypes = {
    //     'number' : AdjustNumber,
    //     // 'radio' : AdjustRadio,
    //     // 'color' : AdjustColor,
    //     // 'textarea' : AdjustTxt,
    //     // 'meter' : AdjustMeter,
    //     // 'select' : AdjustSelect,
    // }
    
    // return adjustTypes[ adjust.type ] || AdjustNumber;
    switch(type){
        case 'number':
            return AdjustNumber;

        case 'text':
            return AdjustText;

        case 'meter':
            return AdjustMeter;

        default:
            return AdjustNumber;
    }
}


export class PanelSection extends React.Component{
    constructor(props){
        super(props);

        this.renderAdjust = this.renderAdjust.bind(this);
    }

    // 渲染单个校正组件
    renderAdjust( adjust, index){
        // console.log(adjust);
        
        let AdjustComponent = selectAdjustType(adjust.type);

        const { onUpdate } = this.props;
        return (
            <li key={`adjust-${index}`} >
                {
                    <AdjustComponent
                        {...adjust}
                        onUpdate={ (keyName, val)=>{
                            this.updateValue(keyName, val) } 
                        } />
                }
            </li>
        )
    }

    updateValue(keyName, val){
        const  { onUpdate } =this.props;
    
        // console.log(keyName);
    
        let updatedData = {};
        updatedData[ keyName ] = val;
    
        // console.log(updatedData);
    
        onUpdate(updatedData);
    }

    render(){
        const { title, adjusts } = this.props;

        return (
            <div className="panel-setion">
                <h4>{ title }</h4>
                
                <ul className="adjusts">
                    {
                        adjusts.map( this.renderAdjust )
                    }
                </ul>
                
            </div>
        )
    }
}