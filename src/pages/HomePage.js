import React, { useEffect, useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import logo from '../static/logo.png';
import burger from '../static/burg.png';
import CoreValues from '../components/CoreValues';
import { Link as RouterLink } from 'react-router-dom';

export const HomePage = () => {
    const [showMenu, setShowMenu] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showBlog, setBlog] = useState(false);

  const handleScroll = () => {
    const isHomePage = window.scrollY === 0;
    setShowShadow(!isHomePage);

    const header = document.querySelector('.navbar');
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('opaque');
      } else {
        header.classList.remove('opaque');
      }
    }
  };

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const openBlog = () => {
    setBlog(true);
  };

  const closeBlog = () => {
    setBlog(false);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClose = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const isMobile = windowWidth <= 768;

  return (
    <div className="App" onClick={handleMenuClose}>
      <header className={`navbar pl-10 bg-black text-white md:mr-10 fixed top-0 w-screen b ${showShadow ? 'opaque' : ''}`}>
        <div className="flex justify-between items-center w-screen">
        <Link
                      className=" hover:cursor-pointer"
                      to="home"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={closeBlog}
                    >
                      
          <div className="flex items-center">
            <img src={logo} className="w-14 mr-2" alt="logo" />
            <h1 className="text-lg md:text-3xl font-bold"> CIRCLEZ </h1>
          </div>
          </Link>

          <div className="flex justify-end">
            {isMobile ? (
              <div className='flex justify-end'>
                <img
                  src={burger}
                  className="w-10 mr-4 cursor-pointer"
                  alt="menu-icon"
                  onClick={() => {
                    closeBlog();
                  }}
                />
              </div>
            ) : (
              <div className="ml-5 mr-10">
                <ul className="nav-links flex space-x-6 justify-end">
                  <li>
                    <Link
                      className="hover:text-blue-400 text-md md:text-lg hover:cursor-pointer"
                      to="home"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        closeBlog();
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-400 text-md md:text-lg hover:cursor-pointer"
                      to="about"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        closeBlog();
                      }}
                    >
                      About
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="hover:text-blue-400 text-md md:text-lg hover:cursor-pointer"
                      to="work"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        closeBlog();
                      }}
                    >
                      Work
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="hover:text-blue-400 text-md md:text-lg hover:cursor-pointer"
                      to="team"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        closeBlog();
                      }}
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-400 text-md md:text-lg hover:cursor-pointer"
                      to="contact"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        closeBlog();
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-400 text-md md:text-lg hover:cursor-pointer"
                      to="blog"
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        openBlog();
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <RouterLink
                        className="hover:text-blue-400 text-md md:text-lg hover:cursor-pointer"
                        to="/PrivacyPolicy">
                        Privacy Policy
                    </RouterLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {showMenu && isMobile && (
          <div className="md:hidden bg-black text-white absolute w-full top-20 left-0 z-10">
            <ul className="py-2">
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="home"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => {
                    toggleMenu();
                    closeBlog();
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="about"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => {
                    toggleMenu();
                    closeBlog();
                  }}
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="work"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => {
                    toggleMenu();
                    closeBlog();
                  }}
                >
                  Work
                </Link>
              </li> */}
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="team"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => {
                    toggleMenu();
                    closeBlog();
                  }}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="contact"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => {
                    toggleMenu();
                    closeBlog();
                  }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="blog"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => {
                    toggleMenu();
                    openBlog();
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <RouterLink
                    className="hover:text-blue-400 text-md md:text-lg hover:cursor-pointer"
                    to="/PrivacyPolicy">
                    Privacy Policy
                </RouterLink>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>

      {showBlog ? (
    <Element name="blog" className="section">
      <Blog />
    </Element>
  ) :  (

        <div>
        <Element name="home" className="section">
          <Home />
        </Element>
        <Element name="about" className="section">
          <CoreValues />
        </Element>
        {/* <Element name="work" className="section">
          <Work />
        </Element> */}
        <Element name="team" className="section">
          <Team />
        </Element>
        <Element name="contact" className="section">
          <Contact />
        </Element>

        </div>
  )
   }  
      </main>
    </div>
  );

}
export default HomePage;