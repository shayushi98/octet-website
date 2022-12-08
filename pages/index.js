import Link from 'next/link';
import { useRouter } from 'next/router';
import {getAllMenuItemsLabel  } from "../lib/api";
import MyImage from './../components/img'


const Home = ({data}) => {

  return ( 
    <>
    <MyImage/>
    <div>
    {data.map((navs, index) => {
      return(
           <nav>
              <a href ={navs.url}> {navs.label}</a>
               </nav>
            
          )})}
    </div>
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


