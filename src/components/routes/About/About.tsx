import React from 'react';
import {Img} from '../../Images'
import Header from '../../parts/header/Header'
// import { ProfileType } from './AboutContainer';
import Preloader from './../../common/Preloader/Preloader';
// type profileUserType ={
//   profileUser:[]
// }


const About = () => {

  return (
    <div>
       {/* <Header/> */}
      {/* <Header/> */}
      <main className='py-[155px]'>

      <section>
        <div className="container">
          <h2 className='mb-90 text-center'>About</h2>
          <div className="flex space-x-100 ">
            <div className="w-1/2">
                <p>Ubini is a village in the Kamianka-Buzka District of Lviv Oblast (Ukraine). The population was 354 at the 2001 census. The body of local self-government is Ubynivska village council. Located in the valley of the Dumna years.</p>
                <article>
                  <h3>History</h3>
                  <div className="">
                    <p>In 1845, 400 people lived in the village, there was a chapel of St. Cosmas and Demyan, and later - a church built by a native of Kamyanka Strumylova Ivan Vasenko. In 1909, Ubyny had a two-grade school with Ukrainian as the language of instruction, a reading room with a shop, and a loan office. The current population of Ubyn is about 390 inhabitants.</p>
                  </div>
                </article>
            </div>
            <div className="w-1/2">
              <img src={Img.map} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex space-x-100 pt-120">
          <div className="w-1/2">
            <img src={Img.church} alt="" />
          </div>
          <div className="w-1/2">
            <article>
              <h2>Church of Saints Cosmas (Kuzma) and Damian (1872)</h2>
              <div className="">
                <p>The church stands on a hill at the entrance to the village from the side of the road. Probably built on the site of a previous wooden temple.</p>
                <p>Until 1939, the patron saint of the shrine was the local landowner Felix Domansky. The existing three-story three-story building was erected by master Ivan Vasenko.</p>
                <p>The small church is surrounded by an attic, sacristies are attached to the altar, all the walls (except the sacristy) are vertically boarded up. Three light eights are covered with bell domes, which complete the tops with crosses.</p>
                <p>There is no traditional dormitory at the western wall of the Babinka. In front of the main entrance to the church, on high pedestals are figures of Pr. The Virgin and Jesus Christ. Further to the west there is a brick bell tower, on the central bell of which inscriptions can be seen.</p>
                <p>To the south-east of the church there is a wooden chapel, which has four decorated arched facades and is covered with a bath with a lantern and a dome. The church is partially surrounded by old trees and is located at the edge of a large rectangular area.</p>
              </div>
            </article>
          </div>

        </div>
      </section>
      </main>
      {/* <Footer/> */}
    </div>
  )
}

export default About;
