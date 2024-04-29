import "../App.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function ProductCard(props) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
    
    addProduct,
  } = props;

  function handler(){
  addProduct(id)
  }

  return (
    <div
      className="user-info"
      style={{
        border: "black solid 2px",
        width: 600,
        marginBottom: 15,
        padding: 25,
      }}
    >
      <h3>{id}</h3>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>{price}</h3>
      <h3>{discountPercentage}</h3>
      <h3>{rating}</h3>
      <h3>{stock}</h3>
      <h3>{brand}</h3>
      <h3>{category}</h3>
      <h3>{thumbnail}</h3>
      <div className="picture">
        <img src={images[0]} />
      </div>
      <IconButton onClick={handler}>
        <ShoppingCartIcon />
      </IconButton>
    </div>
    
  );
}
