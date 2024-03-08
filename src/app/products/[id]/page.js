const SingleProductPage = ({ params, searchParams }) => {
    console.log(searchParams);
  
  return (
    <div>
      <p> This is single product page:{params.id} </p>
      <p>search category:{searchParams.price} </p>
    </div>
  );
};
export default SingleProductPage;
