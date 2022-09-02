import { useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navigation = (props) => {
    const router = useRouter();
    const location = router.pathname.substr(0,6); 
    const [visibility, setVisibility] = useState(true);
    useEffect(()=>{
        if (location === "/cart"){
            setVisibility(false);
        }
        else {setVisibility(true);}
    }
    ,[router.pathname])
    return(
        visibility && <div>
        <div className="mainmenu-area">
            <div className="container">
                <div className="row">
                    <div className="navbar">
                        <ul className="nav navbar-nav navbar-expand">
                            <li className="active">
                                <Link href="/home">
                                    Home
                                </Link>
                            </li>
                            {props.categories && props.categories.map((item, index)=>(
                                <li key={index}>
                                    <Link href={`/productList/${item.productListId}`} >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </div>

        );
};
