import * as React from 'react';
import Card from '@mui/material/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './DogCatogries.css'

import CardMedia from '@mui/material/CardMedia';

import container from '../../assets/container.webp'
import dogfood from '../../assets/dogfood.webp'
import newcat from '../../assets/newcat.webp'
import dogimg from '../../assets/dogimg.webp'
import icon from '../../assets/icon.webp'
import { useNavigate }  from 'react-router-dom';
import sec from '../../assets/sec.webp'
import first from '../../assets/first.webp'
import third from '../../assets/third.webp'
import forth from '../../assets/forth.webp'
import six from '../../assets/six.webp'
import secmediafoot from '../../assets/secmediafoot.webp'
import mediafoot from '../../assets/mediafoot.webp'


export default function DogCatogries() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
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

  function handleStepper(event){
    navigate('/Multistepper')
  }
  return (
    <>
     <div >
  <div className='container-fluid' id='dogdog' >
    
  <div  className='dogslider'>
  <div className='flexl' >
      <div className='flexp'><img src={mediafoot} alt="" /></div>
      <div className='flexr'><img src={secmediafoot} alt="" /></div>
    </div>
   <span >
    <h4 align="center">
    <div style={{fontSize:'15px',backgroundColor:'white',fontWeight:'bold',borderRadius:'12px',padding:'5px',outline:'transparent',width:'130px',borderColor:'white',marginRight:'20px'}} className="dropdownbutton">
        <button className="dropbtn20"><img style={{height:'20px'}} src={icon} alt="" /></button>
        <div className="dropdown-content20"   aria-labelledby="navbarDropdown">
        <a  className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"FOOD"
                })
              }}>Food</a>
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TREAT"
                })
              }} >Treats</a>
                <a className="dropdown-item"  onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TOY"
                })
              }} >Toys </a>
               
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"APPARELS"
                })
              }}  >Apparels</a>
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }}>Accessories</a>
               
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"MAT"
                })
              }}  >Bed And Mats</a>
            
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }} >Health and Hygiene</a>
        </div>
      </div>
   <span className='dogheader'>Dog
    <select  style={{fontSize:'15px',textAlign:'center',backgroundColor:'white',fontWeight:'800',borderColor:'white',borderRadius:'12px',padding:'5px',outline:'transparent',marginLeft:'20px',width:"130px"}} name="" id="">
    <option value="" className="dropdown-item">Upto 1 years</option>
      <option value="">Upto 2 years</option>
      <option value="">Upto 3 years</option>
      <option value="">Upto 4 years</option>
      <option value="">Above 5 years</option>
      </select></span></h4>
   </span>
      </div> 
 
   <div align='center' className='container' id='dogcontainer' >
   <div className='container-fluid'>
        <Carousel responsive={responsive}>
          <div>
           
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              sx={{ height: '200px' }}
              image={dogfood}
              onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
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
              image={dogimg}
              onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TOY"
                })
              }}
            />
            </Card>
            <div className='cardtitle'>Toys</div>
        </div>
        <div>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              sx={{ height: '200px' }}
              image={newcat}
              onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TREAT"
                })
              }}
            />
          </Card>
          <div className='cardtitle'>Treats</div>
        </div>
        <div>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              sx={{ height: '200px' }}
              image={container}
              onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }}
            /> 
          </Card>
          <div className='cardtitle'>Accessories</div>
        </div>
        
        </Carousel>
    </div>
   </div>

    

  </div>
 </div>

       
    
</>
  );
}