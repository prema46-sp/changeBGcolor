import {useState,useEffect} from 'react'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'
import image5 from './assets/image5.jpeg'

export default function Change(){
    
    const imagearr=[image1,image2,image3,image4,image5];
    const [bgImage,setBgImage] =useState(imagearr[0]);


    useEffect(()=>{
        const interval= setInterval(()=>{
        setBgImage((prev)=>{
            const current =imagearr.indexOf(prev);
            const next=(current+1)%imagearr.length;
            return imagearr[next];
        });
    } ,3000);
    return() =>{ clearInterval(interval);
    };
    },[]);
    

    return (
        <>
        <h1> the Background automatically change after 3 seconds by using hook</h1>
        <div style={{backgroundImage:`url(${bgImage})`,backgroundSize:'cover',width:'70vw',height:'70vh',}}></div>
        </>
    );
}