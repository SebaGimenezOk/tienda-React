import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
const Category=()=>{
    const cat = useParams();

    return(
        <ItemListContainer titulo="Lista" filtro={cat.category}/>
    )
}

export default Category; 