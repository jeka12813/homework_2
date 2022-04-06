import React from 'react'
import { useState } from 'react'

export  function Checkbox({item, showChekedEmail}) {
    
    const [checked, setChecked] = useState(false);
    const [email, setEmail] =useState ('Выбран email :' + item.email)
    
  
    const changeCheckbox =()=>{    
      setChecked(!checked);
      showMessage()
      
    }
  
    const showMessage=()=>{
      if(checked){          
        setEmail('Выбран email :' + item.email)
        
      }else{
        setEmail('')
      }
      showChekedEmail(email)
    }
    
    return (
        <div key={item.id}>
                <input type="checkbox" id={item.id} checked={checked} onChange={changeCheckbox} />        
        </div>  
    )
}