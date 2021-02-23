// Styling
import { ProductWrapper } from "../styles";
import { DeleteButtonStyled } from "../styles";
import DeletButton from "./DeleteButton";
const ProductItem = (props) => {
  const product = props.product;

  const handleDelete = () => {
    // alert(`delete ${product.name}`);
    props.deleteProduct(product.id);
  };

  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => props.setProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
      {/* <DeletButton product={product} deleteProduct={props.deleteProduct} /> */}
    </ProductWrapper>
  );
};

export default ProductItem;
