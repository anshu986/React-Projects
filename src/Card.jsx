import React from 'react'
import {BsFillPeopleFill} from 'react-icons/bs'
import{BiGasPump} from 'react-icons/bi'
import {SlSpeedometer} from 'react-icons/sl'
import {PiSteeringWheelBold} from 'react-icons/pi'
const Card = ({img,name,people,fuel,mileage,type,cost}) => {
  return (
    <>
        <div className='col-4 pt-4'>
    <div className="card">
  <img className="card-img" src={img}/>
  <div className="card-info">
    <p className="text-title ">{name}</p>
    <div className="text-body d-flex flex-column"> 
      <div className='icon-row1 row d-flex   '>
        <div className='col-6 d-flex '>
        <BsFillPeopleFill color='#337CCF'/><span className='icon'>{people}People</span>
        </div>
        <div className='col-6 d-flex'><BiGasPump color='#337CCF'/><span className='icon'>{fuel}</span></div>
        </div>
      <div className='icon-row2 row d-flex  mt-2 mb-2'>
        <div className=' d-flex  col-6'>
        <SlSpeedometer color='#337CCF'/><span className='icon'>{mileage}km/1-litre</span>
        </div>
        <div className='col-6 '>
        <PiSteeringWheelBold color='#337CCF'/><span className='icon'>{type}</span>
        </div>
      </div>
    
    
    
    
    
    </div>
  
   
  </div>
  <div className="card-footer">
  <span className="text-title">${cost}<span className='month'>/month</span> </span>
  <div className="card-button">
    <button className="btn rent btn-primary">Rent now</button>
  </div>
</div></div>
    </div>
    </>
  )
}

export default Card