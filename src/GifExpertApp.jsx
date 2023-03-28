import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
    
    const [category, setCategory] = useState(['Kira', 'Shinigami']);

    //Agregar elementos al estado "array"
    const handleAddCategory = ()=>{
        setCategory([ "Element", ...category]);
    }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory/>

        {/* listado de items */}
        <button onClick={handleAddCategory}> Agregar </button>
        
        <ol>
            {
            category.map(category => {
                 return <li key={category}> {category} </li>
                 })}
        </ol>
            {/* gif item */}
    </>
  )
}
