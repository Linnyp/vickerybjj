import { Link } from "react-router-dom";
import Socialbar from "./socialbar";

export default function Footer() {
  return (
    <footer>
      <ul>
        <Link className="right-divide" to="/">
          About
        </Link>
        <Link className="right-divide" to="/contact-us">
          Contact
        </Link>
        <Link to="/schedule">Schedule</Link>
      </ul>
      <Socialbar />
    </footer>
  );
}
