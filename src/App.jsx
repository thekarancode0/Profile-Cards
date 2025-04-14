import react from "react";
import Card from "./Component/Card";
import Product from "./Component/Product";
import Member from "./Component/Member";
import Testimonial from "./Component/Testimonial";
function App() {
  return (
    <>
      <section class=" flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl">Profile Cards</h1>
        <div className="flex justify-center items-center">
          <Card
            name="Karan Kumar"
            age={12}
            email="karan@gmail.com"
            link="/Profile-Cards/public/karan.jpg"
          />
          <Card
            name="Aayan Ali"
            age={5}
            email="aayan@gmail.com"
            link="../public/aayan.png"
          />
          <Card
            name="Ankit Shrivastwa"
            age={10}
            email="ankit@gmail.com"
            link="../public/ankit.jpg"
          />
        </div>
        <div className="flex justify-center items-center">
          <Card
            name="Rinik Gupta"
            age={12}
            email="rinik@gmail.com"
            link="../public/rinik.jpg"
          />
          <Card
            name="Aayan Ali"
            age={5}
            email="aayan@gmail.com"
            link="../public/pic.jpg"
          />
          <Card
            name="Adarsh Shrivastwa"
            age={10}
            email="adarsh@gmail.com"
            link="../public/adarsh.jpg"
          />
        </div>
      </section>

      <section class=" flex justify-center items-center flex-col bg-sky-900">
        <h1 className="text-center text-3xl">Product List</h1>
        <div className="flex justify-center items-center">
          <Product
            title="Acer"
            desc="faster than ever"
            url="../public/computer.jpg"
            price="$100"
          />
          <Product
            title="HP"
            desc="Latest AI"
            url="../public/hp.jpg"
            price="$120"
          />
          <Product
            title="Asus"
            desc="Best gaming laptop"
            url="../public/asus.png"
            price="$200"
          />
        </div>
        <div className="flex justify-center items-center">
          <Product
            title="Dell"
            desc="Build future"
            url="../public/dell.jpg"
            price="$90"
          />
          <Product
            title="Acer"
            desc="faster than ever"
            url="../public/computer.jpg"
            price="$100"
          />
          <Product
            title="HP"
            desc="faster than ever"
            url="../public/hp.jpg"
            price="$100"
          />
        </div>
      </section>

      <section class=" flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl">Member List</h1>
        <div className="flex justify-center items-center">
          <Member
            name="Shahrukh Khan"
            role="Actor"
            url="../public/shahrukh.jpg"
          />
          <Member name="Kayank" role="Friendship" url="../public/kayank.jpg" />
          <Member
            name="Karan Kumar"
            role="Software Engineer"
            url="../public/me.webp"
          />
        </div>
        <div className="flex justify-center items-center">
          <Member name="Rinik Gupta" role="DevOps" url="../public/rinik.jpg" />
          <Member
            name="Ankit Shrivastwa"
            role="Full Stack Developer"
            url="../public/ankit.jpg"
          />
          <Member
            name="Adarsh Shrivastwa"
            role="Software Engineer"
            url="../public/adarsh.jpg"
          />
        </div>
      </section>
      <section class=" flex justify-center items-center flex-col bg-sky-900">
        <h1 className="text-center text-3xl">Customer Feedback</h1>
        <div className="flex justify-center items-center">
          <Testimonial
            name="Mohan"
            feed="Excellent"
            rating="★★★★★"
            url="../public/user.png"
          />
          <Testimonial
            name="Sohan"
            feed="Good"
            rating="★★"
            url="../public/user.png"
          />
          <Testimonial
            name="Riya"
            feed="Best"
            rating="★★★"
            url="../public/user.png"
          />
        </div>
      </section>
    </>
  );
}

export default App;
