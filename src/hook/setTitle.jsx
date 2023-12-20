import { useEffect } from "react";

const setTitle = title =>{
    useEffect(()=>{
    document.title = `Student-Portal | ${title}`;
    },[title])
}

export default setTitle;