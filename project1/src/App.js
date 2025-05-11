import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import './App.css';
import { useEffect, useState  } from 'react';
import AddItem from "./AddItem";
import SearchItems from "./SearchItems";


function App() {

  const API_URL="http://localhost:3500/itemss"
  const [items,setItems]=useState([])
  const [newItem,setnewItem]=useState("")
  const [search,setsearch]=useState("")
  const [fetchError, setFetchError] = useState(null)
  const [isLoading,setIsLoading]=useState(true)

  useEffect ( ( ) => {
    const fetchItems = async ( ) => {
    try {
      const response = await fetch (API_URL);
      if (!response.ok) throw Error("Data not received ");
      const listItems = await response.json();
      console.log(listItems)
      setItems(listItems);
      setFetchError(null)
      } 
      catch (err) {
      setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
      }

      setTimeout(()=>{
        (async()=> await fetchItems())()
      },2000)
    },[])

  

  const addItem = (item) =>{
    const id =items.length ? items[items.length - 1].id +1 : 1
    const addNewItem = {id,checked:false,item}
    const listItems = [...items, addNewItem]
    setItems(listItems)
  //   localStorage.setItem("todo_list", JSON.stringify
  //  (listItems))
  }
  
   const  handleChange=(id)=>{
     const listItems = items.map((item)=>item.id===id ? {... item ,checked:!item.checked}:item)
     setItems(listItems)
    //  localStorage.setItem("todo_list", JSON.stringify
    // (listItems))
   }
  
   const handleDelete=(id)=>{
    const listItems = items.filter((item)=>item.id!==id)
    setItems(listItems)
    // localStorage.setItem("todo_list", JSON.stringify
    // (listItems))
   }

   const handleSumbit=(e)=>{
    e.preventDefault()
    if(!newItem) return ;
    addItem(newItem)
    setnewItem('')
  
   }
   const handleSearch = (e)=>{
    e.preventDefault()

   }
  

  return (
      <div className="App">
            <Header title ="TO DO LIST"/>
            <AddItem
            newItem={newItem}
            setnewItem={setnewItem}
            handleSumbit={handleSumbit}
            /> 
            <SearchItems
            handleSearch={handleSearch}
            search={search}
            setsearch={setsearch}
            />
            <main>
            {isLoading &&<p>Loading Items..</p>}
            {fetchError && <p> {`Error:${fetchError}`}</p>}
            {!isLoading && !fetchError && <Content
            items = {items.filter(item =>((item.item).toLowerCase())
            .includes(search.toLowerCase()))}
            // setItems={setItems}
            handleChange={handleChange}
            handleDelete={handleDelete}
            />}
            </main>
            <Footer
            length={items.length}
            />
      </div>
     
  );
}

export default App;
