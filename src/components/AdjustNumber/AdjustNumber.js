import React from 'react'
import './AdjustNumber.css'

export class AdjustNumber extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    const  { keyName, value, onUpdate, tick=0.1, min=0, max=100 } =this.props;

    return (
      <div className='adjust-number'>
        <input
          type='number'
          value={value}
          onChange={e => {
            onUpdate( keyName, [ min, e.target.value,max ].sort()[1] );
          }}
        />
        <button
          onClick={() => {
            onUpdate( keyName, Math.min(max, value + tick) );
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            onUpdate( keyName, Math.max(min, value - tick) );
          }}
        >
          -
        </button>
      </div>
    )
  }
}
