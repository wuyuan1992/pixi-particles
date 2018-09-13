import React from 'react';
import { AdjustNumber } from '../';
import './AdjustSection.css';



function selectAdjustType(type){
    // 键值对赋值会失败； 暂时用 switch 代替
    // const adjustTypes = {
    //     'number' : AdjustNumber,
    //     // 'radio' : AdjustRadio,
    //     // 'color' : AdjustColor,
    //     // 'textarea' : AdjustTxt,
    //     // 'btn' : AdjustBtn,
    //     // 'select' : AdjustSelect,
    // }
    
    // return adjustTypes[ adjust.type ] || AdjustNumber;


    switch(type){
        case 'number':
            return AdjustNumber;

        default:
            return AdjustNumber;
    }
}


export class AdjustSection extends React.Component{
    constructor(props){
        super(props);

        this.renderAdjust = this.renderAdjust.bind(this);
    }

    // 渲染单个校正组件
    renderAdjust( adjust, index){
        const AdjustComponent = AdjustNumber;

        const { onUpdate } = this.props;
        return (
            <li key={`adjust-${index}`} >
                {
                    <AdjustComponent {...adjust} onUpdate={ onUpdate } />
                }
            </li>
        )
    }

    render(){
        const { title, adjusts } = this.props;

        return (
            <div className="panel">
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