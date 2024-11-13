import React, { useState } from "react";
const Header =()=>{
    const[hideleft, setHideLeft] = useState("-left[1000px]");
    const menuItems = ["Recipes", "Resources", "About", "Contact"];

    const onOpen=()=>{
        setHideLeft("left-0");
    }
    const onClose=()=>{
        setHideLeft("-left-[1000px]");
    }
    return(
        <>
        <div className="max-[900px]:hidden">Desktop</div>
        <div className="min-[900px]:hidden">Mobile view</div>
        </>
    )
}
export default Header;