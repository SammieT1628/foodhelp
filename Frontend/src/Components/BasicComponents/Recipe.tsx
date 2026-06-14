import { useState } from "react";

interface Props {
    isNew: boolean;
}
function Recipe({isNew}: Props) {
    const [recipeTitle, setRecipeTitle] = useState({title: "" })
    const [edit, setEdit] = useState({isNew})
    const [servings, setServings] = useState({})
    const [prepTime, setPrepTime] = useState({})
    const [cookTime, setCookTime] = useState({})
    const [descriiption, setDescription] = useState({})
    const [cuisine, setCuisine] = useState({})
    const [ingrediants, setIngrediants] = useState({})
    const [instructions, setInstructions] = useState({})
    
    
    console.log(recipeTitle)
    function handleSubmit(e:React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log(recipeTitle)
    }

    return (
        <div>
            {edit.isNew === true ? (
                <div className="bg-cyan-600 
                                border-2 
                                border-cyan-600 
                                rounded-lg 
                                px-2 
                                py-4 
                                w-64 
                                h-64
                                text-black">
                    <form>
                        <p>Recipe Title: </p>
                        <input type="text" onChange={(e)=> setRecipeTitle({ ...recipeTitle, title: e.target.value })}
                        value={recipeTitle.title}/>
                        <p>Servings:  </p>
                        <input type="text" onChange={(e)=> setServings({ servings: e.target.value })}
                        value={recipeTitle.title}/>
                    <button onClick={(e)=>handleSubmit(e)}>update</button>
                    </form>
                </div>

            ):(
                <div className="bg-cyan-600 
                                border-2 
                                border-cyan-600 
                                rounded-lg 
                                px-2 
                                py-4 
                                w-64 
                                h-64
                                text-black">
                    <form>
                        <p>{recipeTitle.title}</p>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Recipe