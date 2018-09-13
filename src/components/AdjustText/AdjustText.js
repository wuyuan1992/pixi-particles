import React from 'react'
import './AdjustText.css'

export class AdjustText extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const  { keyName, value, onUpdate } =this.props;

    return (
      <div className='adjust-txt'>
        <textarea
          cols="30" rows="10"
          placeholder="输入文本"

          value = { value }
          onChange={(e)=>{
            onUpdate(keyName,e.target.value);
          }}
        ></textarea>
      </div>
    )
  }
}
