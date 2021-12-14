import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import man from '../../assets/man.png'
import down from '../../assets/down.png'

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor : false, 
            backDelat : 1000,
            backSpeed : 80,
            strings: ['Front-End Developer', 'Enthusiastic Student', 'Looking for new opportunities!' ] })
    },[])
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className="imgContainer">
                    <img src={man} alt="Philip" />
                </div>
            </div>
            <div className='right'>
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Philip Baravi</h1>
                    <h3 ref={textRef}> </h3>
                </div>
                <a href="#portfolio">
                    <img src={down} alt="Down Arrow" />
                </a>
            </div>
        </div>
    )
}
