import { Link } from "react-router-dom";
import { Heroslider } from "./Heroslider";
import { Card } from "./Card";
import { Arrival } from "./Arrival";
import { Focus } from "./Focus";
import { Topseller } from "./Topseller";
import { Mostplayed } from "./Mostplayed";




const Hero = () => {
    return (
        <>
            
            
            <Heroslider/>
            <Arrival/>
            <Focus/>
            <Card/>
            <Topseller/>
            <Mostplayed/>
           
            

           

           

           
        </>
    );
};

export default Hero;
