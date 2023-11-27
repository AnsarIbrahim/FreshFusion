import ProductDetails from "../../Components/Card/ProductDetails";

const DetailsScreen = ({ route }) => {
  const { product } = route.params;
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default DetailsScreen;
