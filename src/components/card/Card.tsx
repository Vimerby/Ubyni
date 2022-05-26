import React from 'react';
// import CardData from './CardData.json';
// import {Img} from '../Images'
import './Card.scss';
import { Button } from '../Button';

export type CardType ={
    key?: number,
    img: string,
    alt: string,
    title: string,
    desc: string,
}


export const Card = ({key , img, alt, title, desc }:CardType) => {
    
    return (
       

        <div key={key} className="pb-20 border-b-2 border-b-secondary">
            <div className="h-[175px]">
                <img src={img} className="w-full h-full object-cover" width={400} height={400} alt={alt}/>
            </div>
            <div className="my-20">
                <h3>{title}</h3>
                <p className='font-default font-light text-sm-xx leading-12'>{desc}</p>
            </div>
            <Button href="#" name='write more...' className='ml-auto text-right block text-sm-x font-medium' />
        </div>
    
    );
}



