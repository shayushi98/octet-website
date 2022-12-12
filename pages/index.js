import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDefaultCompilerOptions } from 'typescript';
import {getAllMenuItemsLabel  } from "../lib/api";
import MyImage from './../components/img'


const Home = ({data}) => {

  return ( 
    
    <header className='header'>  
   
      <MyImage/>
      <div class="topnav" id="myTopnav">
    
      {data.map((navs, index) => {
        if(navs.label=='More'){
         return  getMore(navs)
        }else{
         return(
          // <li key={index}>
        
            <a href ={navs.uri}> {navs.label}</a>
           
)

        }})}
       <a href="https://octet.design/contact-us/" class="header-link">Contact Us <sup class="dot-green"></sup></a>
     
      </div>
 
    </header>
    
   );
}



export default Home;

export function getMore(navs){
  console.log("===========");
  console.log(navs);
  return(
    <div class="dropdown">
    <button class="dropbtn">{navs.label}
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      { navs.childItems.nodes.map((data, index) => {
        console.log(data);
        data.childItems.nodes.map((ele,index) => {
          console.log(ele);
   return (
    <div>
   <a href ={data.uri}> {data.label}</a>
   <a href = {ele.uri}> {ele.label} </a>
   </div>
   )
        })
   
      })}
    

      

     
    </div>

  </div> 
    // <a href ={navs.uri}> {navs.label}</a>
  )
}
export async function getStaticProps() {
  const menuItems = await getAllMenuItemsLabel();
  return {
    props: {
      data: menuItems.data
    }
  };
}






