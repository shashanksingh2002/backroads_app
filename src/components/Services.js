import React from 'react';
import { Title } from './Title';
import wallet from '../images/wallet.svg';
import tree from '../images/tree.svg';
import socks from '../images/socks.svg';


const servicesData = [
    {
        'img':wallet,
        'title':'Saving Money',
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'
    },
    {
        'img':tree,
        'title':'Endless Hiking',
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'
    },
    {
        'img':socks,
        'title':'Amazing Comfort',
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'
    }
]
export const Services = ()=>{
    return (
        <section className="services" id='services'>
            <Title title='OUR' subTitle='SERVICES'/>
            <div className="services-child flex-new services-container-975px">
                {
                    servicesData.map(data=>{
                        return (
                            <div className='services-container-975px services-container flex-nw'>
                                <img src={data.img} alt="" />
                                <div className="p-data flex-new">
                                    <p>{data.title}</p>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}