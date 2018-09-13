import React from 'react'
import './AdjustNumber.css'

export class AdjustNumber extends React.Component{
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
    const  { value, tick=0.1, min=0, max=100 } =this.props;

    return (
      <div className='adjust-number'>
        <input
          type='number'
          value={value}
          onChange={e => {
            this.onChange( [ min, e.target.value,max ].sort()[1] );
          }}
        />
        <button
          onClick={() => {
            this.onChange( Math.min(max, value + tick) );
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.onChange( Math.max(min, value - tick) );
          }}
        >
          -
        </button>
      </div>
    )
  }
}
