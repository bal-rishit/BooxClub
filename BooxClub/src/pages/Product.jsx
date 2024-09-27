import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addProduct } from "../redux/cartRedux";
import RecommendedCourses from "../components/RecommendedCourses";
import CommentSection from "../components/CommentSection";

import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 70%;
  object-fit: cover;
  max-width: 100%;
  ${mobile`
    width: 100%;
    height: auto;
  `}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {

  const user = useSelector((state) => state.user.currentUser);

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const checkProductInCart = () => {
      const productInCart = cart.find((item) => item._id === id);
      setIsInCart(!!productInCart);
    };
    checkProductInCart();
  }, [cart, id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  console.log(product);

  const handleClick = () => {
    if (!isInCart) {
      dispatch(addProduct({ ...product, quantity }));
    }
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>Rs {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>
              {isInCart ? "Already in the cart" : "ADD TO CART"}
            </Button>
          </AddContainer>
          <Desc>Best seller in this month!</Desc>
        </InfoContainer>
      </Wrapper>
      <RecommendedCourses category={product.category} />
      { user ? <CommentSection id={id} /> : <div>Login to access Comment Section</div> }

      
    </Container>
  );
};

export default Product;
