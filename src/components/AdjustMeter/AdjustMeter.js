import React from 'react'
import './AdjustMeter.css'

export class AdjustMeter extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const  { keyName, value, onUpdate } =this.props;

    return (
      <div className='adjust-meter'>

        <input type="meter"
          value = { value }
          onChange={(e)=>{
            onUpdate(keyName, e.target.value);
          }}
        />
      </div>
    )
  }
}
