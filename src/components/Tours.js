import React from 'react'
import { Title } from './Title'
import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-2.jpeg'
import tour3 from '../images/tour-3.jpeg'
import tour4 from '../images/tour-4.jpeg'
import tour5 from '../images/tour-5.jpeg'
import tour6 from '../images/tour-6.jpeg'

const tourData = [
    {
        "img":tour1,
        "date":'August 26th, 2020',
        "title":'Tibet Adventure',
        "desc":'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        "price":'5000',
        "country":'Nepal',
        "days":'11 Days'
    },
    {
        "img":tour2,
        "date":'October 11th, 2020',
        "title":'Best Of Java',
        "desc":'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        "price":'5000',
        "country":'Indonesia',
        "days":'6 Days'
    },
    {
        "img":tour3,
        "date":'September 15th, 2020',
        "title":'Explore Hong Kong',
        "desc":'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        "price":'3500',
        "country":'China',
        "days":'12 Days'
    },
    {
        "img":tour4,
        "date":'September 15th, 2020',
        "title":'Kenya Highlights',
        "desc":'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        "price":'5000',
        "country":'Africa',
        "days":'7 Days'
    },
    {
        "img":tour5,
        "date":'September 15th, 2020',
        "title":'Magnificent India',
        "desc":'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        "price":'4000',
        "country":'India',
        "days":'8 Days'
    },
    {
        "img":tour6,
        "date":'September 15th, 2020',
        "title":'Green Africa',
        "desc":'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        "price":'7000',
        "country":'Africa',
        "days":'8 Days'
    }
]

const TourCards = ({img,date,title,desc,price,country,days})=>{
    return (
        <div className="tour-cards">
            <div className="tour-img">
                <img src={img} alt="" srcset="" />
                <p>{date}</p>
            </div>
            <div className="tour-text">
                <p>{title}</p>
                <p>{desc}</p>
            </div>
            <div className="tour-data flex-sa">
                <p>{country}</p>
                <p>${price}</p>
                <p>{days}</p>
            </div>
        </div>
    )
}


export function Tours() {
  return (
    <div className='tours flex-nw' id='tours'>
      <Title title='FEATURED' subTitle='TOURS'/>
      <div className="tour-child flex-nw">
        {
            tourData.map(data=>{
                return(
                    <TourCards {...data}/>
                )
            })
        }
      </div>
    </div>
  )
}
