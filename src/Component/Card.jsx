import "../index.css";
function Card(props) {
  return (
    <div className=" card bg-white rounded-xl w-80 h-80 card">
      <div className="flex flex-col  justify-center items-center ">
        <img
          className="w-full h-60 object-cover rounded-xl"
          src={props.link}
          alt=""
        />
        <h1 className="font-semibold text-xl">{props.name}</h1>
        <h3>Age: {props.age}</h3>
        <h3>Email: {props.email}</h3>
      </div>
    </div>
  );
}

export default Card;
