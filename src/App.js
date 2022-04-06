import './App.css';
import {useState} from "react"
import {Form} from "./components/form/form"
import {Select} from "./components/Select/Select"
import{Modal} from "./components/Modal/Modal"
import {Checkbox} from "./components/Checkbox/Checkbox"


function App() {
  let[data,setData]=useState([])
  const [isModalActive, setIsModalActive] =useState(false)


  function addPost(post){
    setData([...data,post])   
    setIsModalActive(false)
  }
  
  
  function sortPost(sortValue){
    setselecedSort(sortValue)
    console.log(sortValue)
    console.log(data)
    let newPosts=[...data].sort((a,b)=>a[sortValue].localeCompare([sortValue]))
    setData(newPosts)

  }
  function deletePost(event){
    let {target}=event
    const result = data.filter(item =>{
      console.log(target.id)
    console.log(item.id)
      return target.id!=item.id})
     
    setData(result)
  }
  const[selecedSort,setselecedSort]=useState("")
  let [checkedEmail, setCheckedEmail]=useState("")

  const showChekedEmail=(content)=>{  
    setCheckedEmail(content)  
  }
    
     let post= data.map((item)=>(        
      <div key={item.id} className="post">          
        <Checkbox item={item} showChekedEmail={showChekedEmail}/>        
        <span >{item.email} {item.paswword}</span>
        <button  id ={item.id} type="submit"  onClick={deletePost}>удалить</button>
      </div>
      ))



  return (
    <div className="container"> 
    <div>{checkedEmail}</div>   
    <button onClick={()=>setIsModalActive(true)}>Create Post</button>      
      <Modal visible={isModalActive} setVisible={setIsModalActive}> 
        <Form setData={addPost} deletePost={deletePost} data={data}/> 
       </Modal>
       <Select defaultValue="сортировка по" 
       options={[
         {value:"paswword",name:"по названию"},
         {value:"email",name:"по описанию"}
         ]}
         value={selecedSort}
         sortPost={sortPost}
         />
      {post} 
    </div>
  )
}

export default App;
