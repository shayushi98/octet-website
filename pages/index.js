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
        <div class="header-item-center">
          <div class="overlay"></div>
          <nav class="menu" id="menu">
            <div class="menu-mobile-header">
              <button type="button" class="menu-mobile-arrow">&lt;</button>
              <div class="menu-mobile-title"></div>
              <button type="button" class="menu-mobile-close">Close</button>
            </div>
            <ul class="menu-section">
              {data.map((navs, index) => {
                if (navs.label == 'More') {
                  return getMore(navs)
                }
                else {
                  return (
                    <>
                      <li class="menu-item"><a href={navs.uri}> {navs.label}</a></li>
                    </>
                  )
                }
              })}
            </ul>
          </nav>
        </div>
        <button type="button" class="menu-mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="https://octet.design/contact-us/" class="header-link">Contact Us <sup class="dot-green"></sup></a>
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
      <li class="menu-item-has-children">
        <a href="#">{navs.label}</a>
        <div class="menu-subs menu-mega menu-column-4">
          <div class="menu-grid1">
            <div className='left'>
            {
              navs.childItems.nodes.map((data, index) => {
                return (
                  <>
                  <div>
                    <h4>{data.label}</h4>
                    <ul class="list-dash">
                      <li>
                        <a href="#"> Brand Strategy</a>
                      </li>
                      <li>
                        <a href="#"> UX Strategy</a>
                      </li>
                      <li>
                        <a href="#"> User Acquisition Strategy</a>
                      </li>
                      <li>
                        <a href="#"> Product Strategy</a>
                      </li>
                      <li>
                        <a href="#"> Digital Transformation</a>
                      </li>
                      <li>
                        <a href="#"> Corporate Workshop & Training</a>
                      </li>
                    </ul>
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
                    <ul class="list-dash">
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






