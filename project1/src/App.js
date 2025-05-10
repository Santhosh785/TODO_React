import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import './App.css';
import { useState } from 'react';
import AddItem from "./AddItem";


function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem("todo_list"))
      )

  const [newItem,setnewItem]=useState("")

  const addItem = (item) =>{
    const id =items.length ? items[items.length - 1].id +1 : 1
    const addNewItem = {id,checked:false,item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify
   (listItems))
  }
  
   const  handleChange=(id)=>{
     const listItems = items.map((item)=>item.id===id ? {... item ,checked:!item.checked}:item)
     setItems(listItems)
     localStorage.setItem("todo_list", JSON.stringify
    (listItems))
   }
  
   const handleDelete=(id)=>{
    const listItems = items.filter((item)=>item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify
    (listItems))
   }

   const handleSumbit=(e)=>{
    e.preventDefault()
    if(!newItem) return ;
    addItem(newItem)
    setnewItem('')
  
   }
  

  return (
      <div className="App">
            <Header title ="TO DO LIST"/>
            <AddItem
            newItem={newItem}
            setnewItem={setnewItem}
            handleSumbit={handleSumbit}
            /> 
            <Content
            items = {items}
            // setItems={setItems}
            handleChange={handleChange}
            handleDelete={handleDelete}
            />
            <Footer
            length={items.length}
            />
      </div>
     
  );
}

export default App;
