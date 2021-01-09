import {Link} from "react-router-dom";
const Home=(props)=>{
    return(
        <div>
        <h1>Online Dairy</h1>
        <Link to='/create' className="push_button red">
         Create
         </Link>
         <Link to='/view' className="push_button blue">
         View and Edit
         </Link>
        </div>
    )
}
export default Home