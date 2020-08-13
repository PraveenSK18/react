import React, { useState } from 'react';

const Delete = (props) => {

    const [line ,setLine] = useState(false);
    const cutIt = () => {
      setLine(true);
    }
    const cutOut = () => {
     setLine(false);
    }
    return ( 
        
        <div className="toDoStyle">
        
        <span onClick={cutIt} onDoubleClick={cutOut} className='lineT'>X</span>
        <li style={{textDecoration: line ? 'line-through' : 'none' }}>{props.text}</li> 

        </div>
        );

}

export default Delete;