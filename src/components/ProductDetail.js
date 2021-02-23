import { DetailWrapper } from "../styles";
import DeletButton from "./DeleteButton";

const ProductDetail = (props) => {
  console.log(props);
  let product = props.product;

  const handleDelete = (productId) => {
    props.deleteProduct(productId);
    props.setProduct();
  };

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt="I should be a product name" />
      <p>I should be a product description</p>
      <p>{product.price}</p>
      {/* <DeletButton
        product={product}
        deleteProduct={handleDelete}
        setProducts={props.setProducts}
      /> */}
    </DetailWrapper>
  );
};

export default ProductDetail;
