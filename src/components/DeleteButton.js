import React from "react";
import { DeleteButtonStyled } from "../styles";

const DeletButton = (props) => {
  const product = props.product;
  const handleDelete = () => {
    // alert(`delete ${props.product.name}`);
    props.deleteProduct(product.id);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeletButton;
