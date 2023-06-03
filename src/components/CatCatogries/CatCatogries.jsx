import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import './CatCatogries.css'

import icon from '../../assets/icon.webp'
import catpc1 from '../../assets/catpc1.webp'
import catpc2 from '../../assets/catpc2.webp'
import catpc3 from '../../assets/catpc3.webp'
import catpc4 from '../../assets/catpc4.webp'

import { useNavigate }  from 'react-router-dom';




export default function CatCatogries() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 
  const navigate = useNavigate();
  function handleProduct(data){
    
    console.log(data);
    navigate(`/ProductPage/${data.petCategoryy}/${data.typeCatagoryy}`);
  }



  return (
    <>
    <div align='center' className='container-fluid' id='catcat'  >
      
        <div  className='catslider'>
   <span >
    <h4 align="center">
    <div style={{fontSize:'15px',backgroundColor:'white',fontWeight:'bold',borderRadius:'12px',padding:'5px',outline:'transparent',width:'130px',borderColor:'white',marginRight:'20px'}} className="dropdownbutton">
        <button className="dropbtn20"><img  src={icon} alt="" /></button>
        <div className="dropdown-content20">
        <a   href='true'className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"FOOD"
                })
              }} >Food </a>
                <a href='true' className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"TREAT"
                })
              }} >Treats</a>
                <a href='true' className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"TOY"
                })
              }} >Toys </a>
                
                <a href='true' className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"APPARELS"
                })
              }} >Apparels</a>
                <a href='true' className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }} >Accessories</a>
               
                <a href='true' className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"MAT"
                })
              }} >Bed And Mats</a>
                
                <a href='true' className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }} >Health and Hygiene</a>
        </div>
      </div>
   <span className='dogheader'>Cat
    <select  style={{fontSize:'15px',textAlign:'center',backgroundColor:'white',fontWeight:'800',borderColor:'white',borderRadius:'12px',padding:'5px',outline:'transparent',marginLeft:'20px',width:"130px"}} name="" id="">
      <option value="">Upto 1 years</option>
      <option value="">Upto 2 years</option>
      <option value="">Upto 3 years</option>
      <option value="">Upto 4 years</option>
      <option value="">Above 5 years</option>
      </select></span></h4>
   </span>
      </div> 
      
          <div>
    <div className='container' id='catcontainer'>
        <Carousel responsive={responsive}>
        <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: '200px' }}
            image={catpc1}
            onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"FOOD"
              })
            }}
          />
        
          
        </Card>
        <div className='cardtitle'>Food</div>
        </div>
        <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: '200px' }}
            image={catpc2}
            onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"HEALTH & HYGIENE"
              })
            }}
            
          />
          </Card>
          <div className='cardtitle'>HEALTH & HYGIENE</div>
        </div>
        <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: '200px' }}
            image={catpc3}
            onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"ACCESSORIES"
              })
            }}
          />
        </Card>
        <div className='cardtitle'>ACCESSORIES</div>
        </div>
        <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: '200px' }}
            image={catpc4}
            onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"TOY"
              })
            }}
          /> 
        </Card>
        <div className='cardtitle'>Toys</div>
        </div>
        </Carousel>
    </div>
   </div>
        </div>

       
    
</>
  );
}