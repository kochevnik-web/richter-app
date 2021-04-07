import React, {useState, useEffect} from "react";

const Context = React.createContext();

export default function ContextProvider({ children }) {

    function getEm(){
        if(window.innerWidth < window.innerHeight && window.innerWidth < 768){
            return window.innerWidth / 192 * 6;
        }else{
            return window.innerWidth / 192;
        }
    }

    function getIsMobile(){
        return window.innerWidth < window.innerHeight && window.innerWidth < 768 ? true : false;
    }

    const defaultEm = window.innerWidth <= 768 ? 1.731707 : 2.17734;
    const [em, setEm] = useState(10);
    const [isMobile, setIsMobile] = useState(false);
    const [countLevel, setCountLevel] = useState(4);

    useEffect(()=>{
        setEm(getEm());
        setIsMobile(getIsMobile());
    },[]);

    

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobile(getIsMobile());
    });
    
    return (
        <Context.Provider value={{ defaultEm, em, isMobile, countLevel, setCountLevel }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };