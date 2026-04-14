import { Link } from "react-router-dom";
import "./App.css";

function Navbar () {
    return (
        <div className="abc">
            <div>
                <Link className="xyz" to="/"> Home </Link>
                <Link className="xyz" to="/menu"> Menu </Link>
                <Link className="xyz" to="/contact"> Contact </Link>
            </div>
        </div>
    );
};
export default Navbar;