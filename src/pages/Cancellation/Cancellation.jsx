import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import DataTable from 'react-data-table-component';
import { Footer } from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { AdminChangeOrderstatus, getAdminCancelledOrder, getAdminOrder } from '../../Api/OrderRequest';

function Cancellation() {
  const[users,setUsers]=useState([]);
  const [search,setSearch]=useState("");
  const [filterUsers,setFilteredUsers]=useState([]);
    const userData=localStorage.getItem('userId')
    const AdminData=localStorage.getItem('AdminId')
    const navigate=useNavigate()
    useEffect(()=>{
      if(AdminData){
        navigate("/Cancellation")
      }else{
        navigate("/Adminlogin")
      }
    },[])
    const fn=(data)=>{
  
      const images=[]
      var str_array =data.split(',');

for(var i = 0; i < str_array.length; i++) {
// Trim the excess whitespace.
str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
// Add additional code here, such as:

if(str_array[i]!==""){
const url=new URL(str_array[i])  



images.push(url.searchParams.get('id'))


return `https://drive.google.com/uc?id=${images[0]}`
}else{
  return `https://drive.google.com/uc?id=${"10uk_BvFXN-tHCfAQNYeNDUg4cNaM5SaX"}`
}

}   
;



}
const [status,setStatus]=useState({
  status:"CANCELLED",
  
})

const handleChange = (e) => {
  setStatus({  status: e });
};

const handleStatus=async(ID)=>{
   const ata={
      status:status.status,
      orderID:ID 
   }

   const {data}=await AdminChangeOrderstatus(ata)
   alert("status changed")
}
    useEffect(() => {
      async function fetchData() {
        // You can await here
        // alert()
        
        const {data}=await getAdminCancelledOrder()
       
        setUsers(data)
        setFilteredUsers(data.orderlist)
     
        // ...
      }
      fetchData();
    }, [status,handleStatus]); // Or [] if effect doesn't need props or state
    useEffect(()=>{
      const result=users.filter((user)=>{
          return user.firstname.toLowerCase().match(search.toLowerCase());
          
      })
      setFilteredUsers(result)
    },[search]) 
  
   
    useEffect(() => {
    const userInfo = localStorage.getItem("AdminInfo");
     
      if (userInfo) {
     
        navigate("/Cancellation");
       
      } else {
        navigate("/Adminlogin");
      }
    }, []);



    const coloumn=[
      {name:"Image",selector:(row)=><>
      <img src={fn(row.uploadImages)} style={{width:"80px",height:"80px ",margin:"20px", border: "2px solid #F3CA6D"}}  alt=""  />
      </>},
      {name:"Id",selector:(row)=>row._id,style: {
          color: "gray",
          }},
      {name:"Price",selector:(row)=>`₹ ${row.price}`,style: {
          color: "gray",
          }},
          {name:"Product",selector:(row)=>row.name,style: {
              color: "gray",
              }},
              ,
              {name:"Address",selector:(row)=><>
              <div>
              {row.deliveryAddress.firstName}
              </div>
              <div>
              {row.deliveryAddress.address1}
             
              </div>
              <div>
              {row.deliveryAddress.city}
              </div>
              <div>
              {row.deliveryAddress.state}

              </div>
              <div>
              {row.deliveryAddress.post}
              </div>
              </>,style: {
                color: "gray",
                }},
              {name:"PaymentMod",selector:(row)=>row.paymentMod,style: {
                  color: "gray",
                  }},
      {name:"Status",selector:(row)=>
      <div style={{display:"flex" }}>

         
         <div style={{marginLeft:'10px'}}>
            <a   onClick={()=>{
            handleChange(row.OrderStatus)}}  className="selectbox nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {row.OrderStatus}
           </a>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           
          
           
           {
         row.OrderStatus=="CANCELLED" &&<>
           <a className="dropdown-item"     onClick={()=>{
            handleChange("CANCELLED")
           }}>REMOVE</a>
           
           
         </>
         
       }
        
        
      
            
          
            
            </div>
   
     
   </div>
                
               
           </div>
         
          },

          {name:"ACTION ",selector:(row)=>
          <div style={{display:"flex" }}>
        
            {<>
              <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
              onClick={  ()=>{handleStatus(row._id)}}
              >Confirm</button>
                <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
              onClick={  ()=>{ alert()}}
              >Decline</button>
               
            </>}
                    
                   
               </div>
             
              },
                
    ]
  return (
    <div>
         <Navbar />
        <div className='container-fluid'>
       
        <div className='row'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
            <div className='container' id='container'>
                <div className='row'>
                    <div className='col'><label className='collabel' htmlFor="">Image</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Products Name</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Cancel Reason</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Cancel Status</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Edit</label></div>
                    <div className='col'><label className='collabel' htmlFor="">Read</label></div>

                </div>
                <DataTable 
        
        columns={coloumn} 
      data={filterUsers} 
        pagination
        fixedHeader
        style={{color:"red"}}
        highlightOnHover
        subHeader
      
        subHeaderAlign="center"
        // data={data}
      />  
                </div> 
            </div>
        </div>

    </div>
    <br />
    <br />
    <Footer />
    </div>
  )
}

export default Cancellation
