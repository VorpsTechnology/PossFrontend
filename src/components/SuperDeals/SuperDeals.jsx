import * as React from 'react';

import './SuperDeals.css'



import foodv from '../../assets/foodv.webp'
import grooming from '../../assets/grooming.webp'
import essentials from '../../assets/essentials.webp'
import DogToys from '../../assets/DogToys.webp'
import treak from '../../assets/treak.webp'
import bed from '../../assets/bed.webp'
import { useNavigate } from 'react-router-dom';


export default function SuperDeals() {
  const navigate=useNavigate()
  function handleProduct(data){
  
    console.log(data);
    navigate(`/ProductPage/${data.petCategoryy}/${data.typeCatagoryy}`);
  }
  return (
    <>
    <div >
     <div align='center' className='OurServiceSlider'><h4>Best Deals For You</h4> </div>
    <div   className='container' id='Delasblock' style={{padding:'20px 20px 20px 20px'}} >
    <div align="center" className='row' id='crdroes' >
        <div className='col-4'>
        <div   >
        <div className='container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'      onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"FOOD"
                })
              }}><img src={foodv} alt="" /></div>
              
              </div>
              <div id='dealcarrd'       onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"FOOD"
                })
              }} style={{justifyContent:'right',paddingRight:'30px'}} className='flex-item-left'>
                
               
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
        <div   >
            <div className='flex-container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'      onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }}><img src={grooming} alt="" /></div>
              </div>
           
            </div>
          
          </div>
        </div>
        <div className='col-4'>
        <div   >
            <div className='flex-container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'      onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"WALK ESSENTIALS"
                })
              }}><img src={essentials} alt="" /></div>
              </div>
             
            </div>
          
          </div>
        </div>
    </div>
        <div align="center" className='row' id='crdroes'  >
        <div className='col-4'>
        <div  >
            <div className='flex-container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'      onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TOY"
                })
              }}><img src={DogToys} alt="" /></div>
              </div>
             
            </div>
          
          </div>
        </div>
        <div className='col-4'>
        <div  >
            <div className='flex-container20' >
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'      onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"MAT"
                })
              }}><img src={bed} alt="" /></div>
              </div>
           
            </div>
          
          </div>
        </div>
        <div className='col-4' >
        <div  >
            <div className='flex-container20' >
              
              <div style={{justifyContent:'center'}} className='flex-item-center'>
              
               <div className='PRoductimg'      onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TREAT"
                })
              }}><img src={treak} alt="" /></div>
              </div>
             
            </div>
          
          </div>
        </div>
    </div>
    </div>
    </div>

</>
  );
}