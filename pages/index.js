import Link from 'next/link';
import { useRouter } from 'next/router';
import {getAllMenuItemsLabel  } from "../lib/api";
import MyImage from './../components/img'


const Home = ({data}) => {

  return ( 
    <>
    <header className='header'>   
      <MyImage/>
      <div>
      {data.map((navs, index) => {
        return(
            
                <a href ={navs.url}> {navs.label}</a>
                
              
            )})}
        <a href="https://octet.design/contact-us/" class="header-link">Contact Us <sup class="dot-green"></sup></a>
      </div>
    </header>
    </>
   );
}

export default Home;

export async function getStaticProps() {
  const menuItems = await getAllMenuItemsLabel();
  return {
    props: {
      data: menuItems.data
    }
  };
}


