import Link from "next/link";
const RestaurantHeader = () => {
    return (
           <div className="header-wrapper">
            <div className="logo">
                <img style={{width:100}} src="https://t4.ftcdn.net/jpg/02/81/95/89/360_F_281958904_eOrxVWVlSUywQo66Q9haIhbK4vYNsCpM.jpg"/>
            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                     <li>
                        <Link href="/">Login?SignUp</Link>
                    </li>
                     <li>
                        <Link href="/">Profile</Link>
                    </li>
                </ul>
            </div>
           </div>

    );
}
export default RestaurantHeader;