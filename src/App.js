import React, { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Data } from './Data';
import "./App.css"
import Card from './Card';
 import { Link } from 'react-router-dom';

import {BsSearch} from 'react-icons/bs'
import{AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
const App = () => {
  const [currentPage,setCurrentPage]=useState(1);
  const recordPerPage=6;
  const lastIndex=currentPage*recordPerPage;
  const firstIndex=lastIndex-recordPerPage;
  const records=Data.slice(firstIndex,lastIndex);
  const npage=Math.ceil(Data.length/recordPerPage);
  const numbers=[...Array(npage+1).keys()].slice(1);
  const[search,setSearch]=useState('')
  console.log(search)
return(
  <>
    
    <h2 className='text-center m-3'>CAR SEARCH</h2>
    <div className='container '>
   
      
      <div class="p-3 form-container m-2 form-group has-search">
    <span class=" form-control-feedback">
      <BsSearch color='black'/>
    </span>
    <input type="text" class="form-control" onChange={(e)=>
      setSearch(e.target.value)
    } placeholder="Search"/>

    <span className='navtext mt-1'>Relevance</span>
      <span className='navtext mt-1'>All brands</span>
   
  </div>
      
     
    <div className='row  d-flex justify-content-around '>
    
    {records.filter((item)=>{
      return search.toLowerCase()===''?item:item.name.toLowerCase().includes(search);
    }).map((d)=>{
      return(
        <Card img={d.img} 
              name={d.name}
              people={d.people} 
              fuel={d.fuel}
              mileage={d.mileage} 
              type={d.type} 
              cost={d.cost}/>
      )
     
    })}
    </div>



    <nav className='footer form-container mb-4 '>
      <ul className='pagination'>
        <li className='page-item'>
          <Link to="/"className='page-link'  onClick={prePage}><AiOutlineArrowLeft/></Link>

        </li>
        {
          numbers.map((n,i)=>(
            <li className={`page-item ${currentPage===n ?'active':''}`} key={i}>
              <Link to={`/page${n}`} className='page-link' onClick={()=>changeCPage(n)}>{n}</Link>
            </li>
          ))
        }
        <li className='page-item'>
          <Link to="/" className='page-link page-number ' onClick={nextPage}><AiOutlineArrowRight/></Link>
        </li>
      </ul>
    </nav>
    </div>
    

    
  </>
)
function changeCPage(id)
{
setCurrentPage(id)
}
function prePage()
{
if(currentPage!==firstIndex)
{
  setCurrentPage(currentPage-1);
}
}
function nextPage(){
if(currentPage!==lastIndex)
{
  setCurrentPage(currentPage+1)
}
}
}

export default App