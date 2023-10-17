import React, {useRef, useEffect} from "react"

const { tableau }  = window;


function TableauEmbed(){
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/EvSalesDemand/EVDemandAnalysisDashboard?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link"
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