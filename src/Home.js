import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">About Page</Link>
      <Link to="contact">Contact Page</Link>
    </div>
  );
}

export default Home;