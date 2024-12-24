import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"about"}>About</Link>
      <h1>Lion King</h1>
      <img
        style={{ width: "500px", height: "300px" }}
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/08/scar-simba-timon-and-pumba.jpg"
        alt="lion king"
      />
    </div>
  );
}

export default MainPage;
