import React, { Component } from "react";
import Slider from "react-slick";
import NewsData from '../NewsData.json';
import {Img} from '../Images';
import {Card} from "../Card/Card";
import './Slick.scss'

export type PostType ={
    id: number,
    img: string,
    alt: string,
    title: string,
    desc: string
}

export default class SlickSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1100,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
          {
            breakpoint:1300,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },

          {
            breakpoint:1024,
            settings:{
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },

          {
            breakpoint:768,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },

          {
            breakpoint:480,
            settings:{
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };


      // console.log(NewsData.slice(-7, -1));
      const NewArrNews = NewsData.slice(-7, -1)
      const reversNewArrNews = NewArrNews.reverse()
      return (
        <div>
          <Slider {...settings}>
                {
                  reversNewArrNews.map((post: PostType) =>{
                
                    return(
                      <Card 
                        key={post.id}
                        img={Img.News[post.img as keyof typeof Img.News]}
                        alt={post.alt}
                        title={post.title}
                        desc={post.desc}
                      />
                    )
                  })
               
                }
            </Slider>
        </div>
      );
    }
  }
