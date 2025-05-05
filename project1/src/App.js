import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import './App.css';
import { useState } from 'react';


function App() {
  const [items,setItems]=useState(
      [{
      id:1,
      checked:true,
      item:"practice coding"
    },
    {
      id:2,
      checked:false,
      item:"practice German"
    },
    {
      id:3,
      checked:true,
      item:"Learn react"
    }
  ])
  
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
  

  return (
      <div className="App">
            <Header title ="TO DO LIST"/>
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
