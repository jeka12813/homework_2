import { useState} from "react"
import React from "react"
import  "./forms.css"
 function Btm(){
      let[data,setData]=useState([])
      let[login,setEmail]=useState("")
      let[paswword,setPaswword]=useState("")
      let[errorLogin,setErrorLogin]=useState("заполните поле login")
      let[errorPaswword,setErrorPaswword]=useState("заполните поле paswword ")
      let[tr,setTr]=useState(false)
      let[trr,setTrr]=useState(false)
      let[classLogin,setclassLogin]=useState("")
      let[classPaswword,setclassPaswword]=useState("")
      let[classOneBtn,setclassOneBtn]=useState("")
      let[classTwoBtn,setclassTwoBtn]=useState("")

      function onChangekEmail(event){
        setEmail(event.target.value)
          if(6<event.target.value.length&&event.target.value.length<12){
            setTr(true)
            setclassTwoBtn("btn")
  

            setEmail(event.target.value) 
            setclassLogin("ok")
            setErrorLogin("готово")
            
            }
          else{
            setclassTwoBtn("")
            setTr(false)
            setclassLogin("error")
            setErrorLogin(" 6 до 12 символов")
        }
    }
      function onChangePaswword(event){
        setPaswword(event.target.value.replace(/./g,"*"))
          if(1<event.target.value.length&&event.target.value.length<6){
            setclassOneBtn("btn")
            setTrr(true)
            setPaswword(event.target.value.replace(/./g,"*"))
            setclassPaswword("ok")
            setErrorPaswword("готово")
          
        }
          else{
            setTrr(false)
            setclassPaswword("error")
            setErrorPaswword("до 6 символов")
            setclassOneBtn("")
        }
        
    }
      let newMaS=data.map((item)=>(
        <div key={item.id}>
                 <span >login:{item.login} paswword:   {item.paswword}</span>
                
             </div>
        ))
      function zaq(event){
        event.preventDefault()
          if(tr&&trr){
            
            let obj={
                id:Date.now(), 
                paswword:paswword,
                login:login
            }
            setData([...data,obj])
            setPaswword("") 
            setEmail("")
            setTrr(false)
            setTrr(false)
            setclassTwoBtn("")
            
        }

          }
       
        
     return(
          <div>
            <form>
                <div>
                  <input onChange={onChangekEmail} className={classLogin} value={login}  type="text" placeholder="введите login "/>
                  <div>
                      <span>{errorLogin}</span>
                  </div>
                  </div>
                  <div>
                      <input onChange={onChangePaswword} className={classPaswword}  value={paswword} type="text" placeholder="введите paswword "/>
                  <div>
                    <span>{errorPaswword}</span>
                  </div>
                </div>
              
                <button type="submit" className={classOneBtn+classTwoBtn} onClick={zaq} >Отправить</button>
              </form>
              <div>{newMaS}</div>
            </div>
      )
      
  }
  
export {Btm}
