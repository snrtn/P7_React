import { Link } from "react-router-dom";
import "./dashboard.css";

const ProductCard = (props) => {
  return (
    <>
      {props.data.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <div className="cardWrapper">
            <div className="cardBackground" />
            <img className="cardImg" src={item.cover} alt="cardImg" />
            <h1 className="cardTitle">{item.title}</h1>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
