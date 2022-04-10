import { useGlobalContext } from "../context/cart/CartContext";
import Rating from "./Rating";
import "./ProductCard.css";


const ProductCard = ({ data }) => {
  
  const {addToCart} = useGlobalContext()

  const { name, numReviews, image, price, rating } = data;
  return (
    <div>
      <div className="productCard__wrapper">
        <img className="productCard__img" src={image} alt="" />
        <h4>{name}</h4>

        <div className="ProductCard__price">
          <h5> ${price}</h5>
          <button className="ProductCard__button" onClick={() => addToCart(data) }>Add to basket</button>
        </div>

        <div className='ProductCard__Rateing'>
          <Rating
            value={rating}
            text={`${numReviews} reviews`}
          />
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
