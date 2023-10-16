import React, {useRef, useEffect} from "react"

const { tableau }  = window;


function TableauEmbed(){
    const ref = useRef(null);
    const url = "https://us-west-2b.online.tableau.com/t/evstationsdemand/views/EvSalesDemand/Dashboard1/9bc293ce-ad30-47c5-a2a6-15268fd5a401/74f2bc12-7a97-45b8-b8ad-0cae3783f02e"
    const options = {
        device:"desktop",
    }

    function initViz(){
        new tableau.Viz(ref.current, url, options)
    }

    
    useEffect(()=>{
        initViz();
    },[])

    return (
    <div ref ={ref}>

    </div>
    )
}

export default TableauEmbed;