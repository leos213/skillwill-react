import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"about"}>About</Link>
      <h1>Lion King</h1>
      <p>
        After the murder of his father, a young lion prince flees his kingdom
        only to learn the true meaning of responsibility and bravery.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        consequuntur non sequi mollitia perspiciatis tenetur excepturi vitae
        quaerat minima? Rem, asperiores? Quas molestias quam aut expedita, omnis
        quis laudantium dolorem nostrum deserunt tenetur commodi eaque ducimus.
        Reprehenderit voluptas ducimus fugiat harum omnis laborum? Vitae
        aspernatur pariatur officia reiciendis nesciunt praesentium!
      </p>
    </div>
  );
}

export default About;
