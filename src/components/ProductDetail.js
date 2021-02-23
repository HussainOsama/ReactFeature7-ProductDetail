import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  console.log(props);
  let product = props.product;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt="I should be a product name" />
      <p>I should be a product description</p>
      <p>{product.price}</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
