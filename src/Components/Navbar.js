import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import classes from "../Components/Navbar.module.css"

const Navbar = () => {

    return ( 
       <>
            <nav>
                <ul className={classes.bar}>
                    { Sidebar.map((item,index) => {
                        return (
                            <li key={index} >
                                <Link to={item.path} >
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    }) }
                </ul>
            </nav>
       </>
        
    );
}
 
export default Navbar ;