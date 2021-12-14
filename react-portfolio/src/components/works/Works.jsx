import { useState } from "react";
import './works.scss';
import arrow from '../../assets/arrow.png';
import markup from '../../assets/markup.png';
import jsSlide from '../../assets/jsslider.jpg';
import backend from '../../assets/backend.png';

export default function Works() {
    const[currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
          id: "1",
          title: "Markup",
          desc:
            "I have some experience in markup from working in Georgian Technical University and also on my own projects.",
          img: markup,
        },
        {
          id: "2",
          title: "Javascript",
          desc:
            "I love this programming language.Basically my everyday goal is to practice at javascript as much as possible, learn new libraries and stuff that will make me best of the best in it.",
          img: jsSlide,
        },
        {
          id: "3",
          title: "Back-end Development",
          desc:
            "Right now I don't have any knowledge in back-end development, it wasn't quite interesting for me at first, but my goal is to learn it after being successful in JS and React!",
          img: backend,
        },
      ];

      const handleClick = (way) => {
          way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
          setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1 : 0);
      };
    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
                {data.map(d=>(

            
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>{d.title}</h2>
                                <p>
                                   {d.desc}
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src={arrow} className='arrow left' alt=""  onClick={()=>handleClick('left')}/>
            <img src={arrow} className='arrow right' alt="" onClick={()=>handleClick('right')}/>
        </div>
    )
}
