import React from 'react';
import Header from '../parts/header/Header';
import NewsData from '../NewsData.json';
import { Card } from '../Card/Card';
import {PostType} from '../Carousel/Slick';
import { Img } from '../Images';

const News = () => {

  return (
    <div>
        {/* <Header/> */}
        <main>
            <section>
                <div className="container border py-100">
                    <h2 className='text-center mb-50'>Hews</h2>
                    <div className="grid grid-cols-4 gap-30">
                        {
                            NewsData.map((post:PostType) =>{
                                
                                return(
                                    <React.Fragment key={post.id}>
                                        <Card 
                                            img={Img.News[post.img as keyof typeof Img.News]}
                                            alt={post.alt}
                                            title={post.title}
                                            desc={post.desc}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div> 
            </section>
        </main>
    </div>
  )
}

export default News
