import "../index.css";
function Product(props) {
  return (
    <>
      <div className="flex justify-around items-center bg-white rounded-xl w-85 h-80 card">
        <img className="w-50" src={props.url} alt="" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p>{props.desc}</p>
          <h3>Price:{props.price}</h3>
        </div>
      </div>
    </>
  );
}
export default Product;
