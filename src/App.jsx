import React, { useState } from 'react';
import Delete from './Delete';
import index from './index.css';

const App = () => {

    const[item , setItem] = useState('');

    const[listItem , setListItem] = useState([]);

    const itemsList = (event) => {
        setItem(event.target.value);
 
     }

    const addItem = () => {
        setListItem((preValue) => {
              return [...preValue,item];
        });
        setItem("");
    }

      
    return (
   <>
   <div className='mainDiv'>
       <div className = 'centerDiv'>
           <br/>
           <h1>ToDoLists</h1>
           <br/>
           <input type='text' value={item} placeholder='Enter your list' onChange= {itemsList} />
           <br/>
           <br/>
           <button onClick={addItem}>+</button>
           <br/>
           <ol> {
               listItem.map((val,index) => {
               return <Delete key={index} text={val} />
               } )
               }
           </ol>
       </div>
   </div>
   </>
    );


}

export default App;