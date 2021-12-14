import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss' ;
import {
    featuredPortfolio,
    languagePortfolio,
    plansPortfolio,
    freeTimePortfolio
} from '../../data';

export default function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);
    const list =[
        {
            id : 'featured',
            title : 'Projects',
        },

        {
            id : 'languages',
            title : 'Languages',
        },

        {
            id : 'plans',
            title : 'Currently Learning',
        },

        {
            id : 'freeTime',
            title : 'Freetime Libraries',
        },
    ];

    useEffect(()=>{

        switch(selected){
            case 'featured' :
                setData(featuredPortfolio);
                break;

            case 'languages' :
                setData(languagePortfolio);
                break;

            case 'plans' :
                    setData(plansPortfolio);
                    break;

             case 'freeTime' :
                setData(freeTimePortfolio);
                break;

                default :
                setData(featuredPortfolio);
        }
    },[selected]);
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
               {list.map(item=>(
                   <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id = {item.id}/>
               ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <a href={d.href} target="_blank" rel="noreferrer">
                    <div className="item">
                   <img src={d.img} alt="" width="100" height="50"/>
                    <h3>{d.title}</h3>
                </div>
                </a>
                ))}
            </div>
        </div>
    )
}
