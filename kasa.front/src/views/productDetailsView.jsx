import { useParams } from "react-router-dom"
import Information from "../components/productDetails/information"
import data from '../components/data/products.json';
import "./view.css";

const ProductDetailsView = () => {
  const { id } = useParams();
  const product = data.find((product) => product.id === id);
  
  return (
    <div>
      <Information product={product}/>
    </div>
  )
}

export default ProductDetailsView