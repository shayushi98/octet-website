import Link from 'next/link';
import { useRouter } from 'next/router';
import { getDefaultCompilerOptions } from 'typescript';
import { getAllMenuItemsLabel } from "../lib/api";
import MyImage from './../components/img'


const Home = ({ data }) => {

  return (

    <header className='header'>

      <MyImage />
      <div className='d-flex'>
        <div className="header-item-center">
          <div className="overlay"></div>
          <nav className="menu" id="menu">
            <div className="menu-mobile-header">
              <button type="button" className="menu-mobile-arrow">&lt;</button>
              <div className="menu-mobile-title"></div>
              <button type="button" className="menu-mobile-close">Close</button>
            </div>
            <ul className="menu-section">
              {data.map((navs, index) => {
                if (navs.label == 'More') {
                  return getMore(navs)
                }
                else {
                  return (
                    <>
                      <li className="menu-item"><a href={navs.uri}> {navs.label}</a></li>
                    </>
                  )
                }
              })}
            </ul>
          </nav>
        </div>
        <button type="button" className="menu-mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="https://octet.design/contact-us/" className="header-link">Contact Us <sup className="dot-green"></sup></a>
       

      </div>
    </header>

  );
}



export default Home;

export function getMore(navs) {
  console.log("===========");
  console.log(navs);
  return (
    <>
      <li className="menu-item-has-children">
        <a href="#">{navs.label}</a>
        <div className="menu-subs menu-mega menu-column-4">
          <div className="menu-grid1">
            <div className='left'>
              {
                navs.childItems.nodes.map((data, index) => {
                  return(
                    <>
                    <h4><a href="data.uri">{data.label}</a></h4>
                    <div>
                  {    
                  data.childItems.nodes.map((ele, index) => {
                    return (
                      <>
                      <div>
                        <ul className="list-dash">
                          <li>
                          <a href="ele.uri">{ele.label}</a>
                          </li>
                        </ul>
                      </div>
                    </>
                    )
                  })
                }
                </div>
                  </>
                 
                  )
                 
                })
              }
            </div>
            <div className='right'>
              {
                navs.childItems.nodes.map((data, index) => {
                  return (
                    <>
                      <div>
                        <h4>Blogs</h4>
                        <ul className="list-dash">
                          <li>
                            <a href="#"> Latest Blogs</a>
                          </li>
                          <li>
                            <a href="#"> Case Studies</a>
                          </li>
                          <li>
                            <a href="#"> Tutorials</a>
                          </li>
                          <li>
                            <a href="#"> Research</a>
                          </li>
                          <li>
                            <a href="#"> Strategies</a>
                          </li>
                          <li>
                            <a href="#"> Playground</a>
                          </li>
                        </ul>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </li>
    </>
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






