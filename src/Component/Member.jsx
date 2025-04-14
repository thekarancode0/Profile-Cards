import "../index.css";
function Member(props) {
  return (
    <>
      <div className="card bg-white rounded-xl w-80 h-80 card">
        <div className="flex flex-col  justify-center items-center ">
          <img
            className="w-full h-60 object-cover rounded-xl"
            src={props.url}
            alt=""
          />
          <h1 className="font-bold text-2xl">{props.name}</h1>
          <h2>{props.role}</h2>
        </div>
      </div>
    </>
  );
}

export default Member;
