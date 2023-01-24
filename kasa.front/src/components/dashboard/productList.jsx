import ProductCard from './productCard';
import data from "../data/products.json";

const productList = () => {
  return (
    <div className='listContainer'>
      <div className='listWrapper'>
        <ProductCard data={data}/>
      </div>
    </div>
  )
}

export default productList