import React from 'react'
import './AdjustText.css'

export class AdjustText extends React.Component{
  constructor(props){
    super(props);
  }

  onChange(val){
    const  { keyName, onUpdate } =this.props;

    console.log(keyName);

    let updatedData = {};
    updatedData[ keyName ] = val;

    console.log(updatedData);

    onUpdate(updatedData);
  }

  render(){
    const  { value } =this.props;

    return (
      <div className='adjust-txt'>
        <textarea
          value = { value }
          cols="30" rows="10"
          placeholder="输入文本"
          onChange={(e)=>{
            this.onChange(e.target.value);
          }}
        ></textarea>
      </div>
    )
  }
}
