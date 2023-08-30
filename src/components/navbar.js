import React from "react";
import '../index.css'
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <Link className="button" to='/'>All</Link>
            <Link className="button" to='/breakfast'>Breakfast</Link>
            <Link className="button" to='/lunch'>Lunch</Link>
            <Link className="button" to='/shakes'>Shakes</Link>
        </div>
    )
}
export default Navbar;