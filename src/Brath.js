import React, { useEffect, useState } from 'react';
import './Brath.css'; 
import 'swiper/swiper-bundle.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

Swiper.use([Navigation, Pagination]);

const Brath = () => {
    const [theme, setTheme] = useState('light');
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 120,
    });
    AOS.refresh();
  
    

    const swiper1 = new Swiper(".hero", {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    const swiper2 = new Swiper(".hero1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 10,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 10,
          rotate: 20,
          slideShadows: true,
        },
      },
    });

    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('load', () => AOS.refresh());
    });

    document.querySelector('a[href="#container2"]').addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#container2').scrollIntoView({
        behavior: 'smooth',
      });
    });

    return () => {
      swiper1.destroy();
      swiper2.destroy();
    };
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const myFunction = () => {
    const x = document.querySelector(".topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <>
    
      <header className="header">
        <div id="logo-container">
          <img id="logo" src="/assets/logo.png" alt="Logo" />
        </div>
        <nav className="topnav">
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <div className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
            </div>
          </a>
          <ul>
            <li><a href="">Die Metzgerei</a></li>
            <li><a href="#container2">Dry Aged</a></li>
            <li><a href="">Fleisch</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Party</a></li>
            <li><a href="">Tagesessen</a></li>
            <li><a href="">Impresum</a></li>
            <li><a href="">Kontakt</a></li>
            <a href="" className="vidljiv"><img src="/assets/pdf.png" alt="" /></a>
            <button id="mode-toggle" onClick={toggleTheme}>Light/Dark</button>
          </ul>
        </nav>
        <div className="opening-time">
          <span>Opening Time: 9:00 AM - 6:00 PM</span>
        </div>
      </header>
      <div className="swiper hero">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <img src="/assets/image14.jpg" alt="" />
            <h1>Heiko Brath</h1>
            <p>Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</p>
          </div>
          <div className="swiper-slide box">
            <img src="assets/jelo.png" alt="" />
            <h1>Heiko Brath</h1>
            <p>Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</p>
          </div>
          <div className="swiper-slide box">
            <img src="assets/jelo2.png" alt="" />
            <h1>Heiko Brath</h1>
            <p>Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</p>
          </div>
        </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
      </div>
      <div id="container2">
        <div id="drugi">
          <div className="tekst-slika-container">
            <div className="tekst2">
              <h1>Dry aged</h1>
              <h2>Alte wurtz, Dry Aged</h2>
              <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart. id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</p>
              <button className="dugmad">Dry aged</button>
              <button className="dugmad">Alte wurtz</button>
            </div>
            <div className="slika1" data-aos="fade-up">
              <img src="assets/steak4.png" alt="Steak Image 1" />
              <div className="img-grid">
                <img src="assets/steak1.png" alt="" />
                <img src="assets/steak2.png" alt="" />
                <img src="assets/steak3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="obojeno">
          <h1>Buchen Sie den<br /> Grillkurs jetzt</h1>
          <ul>
            <li>professioneller Lehrer</li>
            <li>ausgezeichneter Metzger</li>
            <li>1 Tag</li>
            <li>lernen Sie die Kunst des Grillens</li>
          </ul>
          <button>Jetzt buchen</button>
        </div>
        <div className="deoslika">
          <img src="assets/jelo.png" alt="" />
        </div>
      </div>
      <div className="container4">
        <div className="container4-tekst">
          <h1>Das Handwerk</h1>
          <h2>aalles über unsere Hausgemachte Produkte</h2>
          <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.<br /><br /> Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.<br /><br /> id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentiory</p>
          <button>Das Handwerk</button>
        </div>
        <div className="hr-container">
          <hr className="hr-left" />
          <img src="assets/SamoB.png" alt="Image" />
          <hr className="hr-right" />
        </div>
        <div className="image-grid4">
          <img src="assets/kobasice.png" alt="Image 1" data-aos="zoom-in-down" />
          <img src="assets/pile.png" alt="Image 2" data-aos="zoom-in-down" />
          <img src="assets/prasetina.png" alt="Image 3" data-aos="zoom-in-down" />
          <img src="assets/sniclaa.png" alt="Image 4" data-aos="zoom-in-down" />
        </div>
      </div>
      <div className="container5">
        <div className="deoslika2" data-aos="zoom-in-down">
          <img src="assets/jelo2.png" alt="" />
        </div>
        <div className="obojeno2">
          <h1>Custome spices for your meat</h1>
          <h2>Turnbeutel nostrud exercitation ullamco <br /> Sprechen Sie deutsch</h2>
          <p>Odio principes iracundia Müller Rice pri. Ut vel solum mandamus, Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis eum.<br /> Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="container6">
        <div className="slika2">
          <img src="assets/fleich.png" alt="" />
        </div>
        <div className="tekst3">
          <h2>Fleischversand</h2>
          <button>Jetzt bestellen</button>
        </div>
      </div>
      <section className="section1">
        <div className="container7">
          <div className="slika3">
            <img src="assets/genussnetz1.png" alt="" />
          </div>
          <div className="container7-tekst">
            <h1>Metzgerei Brath ist Mitglied <br /> im Genussnetzwerk</h1>
            <button>Gehen zu site</button>
          </div>
        </div>
        <div className="hr-container">
          <hr className="hr-left" />
          <img src="assets/SamoB.png" alt="Image" />
          <hr className="hr-right" />
        </div>
        <div className="container8">
          <div className="tekst4">
            <h1>Auszeichnungen</h1>
          </div>
          <div className="img-grid5">
            <div className="slika-container" data-aos="zoom-in-up">
              <img src="assets/nagrada1.png" alt="" />
              <p>Tollit argumentum genau <br /> Saepe lobortis</p>
            </div>
            <div className="slika-container" data-aos="fade-up">
              <img src="assets/nagrada2.png" alt="" />
              <p>Schneewittchen <br /> denique</p>
            </div>
            <div className="slika-container" data-aos="fade-up">
              <img src="assets/nagrada3.png" alt="" />
              <p>Grimms Märchen <br /> expetenda</p>
            </div>
            <div className="slika-container" data-aos="fade-up">
              <img src="assets/nagrada4.png" alt="" />
              <p>Mettwurst mei <br /> ullum gloriatur</p>
            </div>
          </div>
        </div>
        <div className="hr-container">
          <hr className="hr-left" />
          <img src="assets/SamoB.png" alt="Image" />
          <hr className="hr-right" />
        </div>
        <div className="swiper hero1">
          <div className="tekst5">
            <h2>Empfehlungs</h2>
            <h1>Was die Leute über uns sagen</h1>
          </div>
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <h1><img src="assets/grillkurs_icon.png" alt="" /></h1>
              <h2><img src="assets/zvezdice.png" alt="" /></h2>
              <div className="paragraphs">
                <p>Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco .</p>
                <h1>Halling Tobias</h1>
                <h2>Koch</h2>
              </div>
            </div>
            <div className="swiper-slide box">
              <h1><img src="assets/grillkurs_icon.png" alt="" /></h1>
              <h2><img src="assets/zvezdice.png" alt="" /></h2>
              <div className="paragraphs">
                <p>Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco .</p>
                <h1>Halling Tobias</h1>
                <h2>Koch</h2>
              </div>
            </div>
            <div className="swiper-slide box">
              <div className="paragraphs">
                <p>Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.</p>
                <h2>Maria Kartofeln</h2>
              </div>
            </div>
            <div className="swiper-slide box">
              <div className="paragraphs">
                <p>Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.</p>
                <h2>Maria Kartofeln</h2>
              </div>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
        <button className="dugme1">Alle Berichte</button>
      </section>
      <footer>
        <div className="footer-container">
          <div className="footer-section1">
          <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Klauprechtstraße  25 <br /><br /> 76137 Karlsruhe, Germany
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +49 721 358060
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@partyservice-brath.de
            </p>
          </div>
          <div className="footer-img">
            <img src="assets/logo.png" alt="" />
          </div>
          <div className="footer-section2">
            <h3>Besuchen sie uns auf: </h3>
            <div className="links">
              <a href="#" className="fa fa-twitter" alt="Twitter"> <FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="fa fa-facebook"> <FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="fa fa-instagram"> <FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="fa fa-youtube"> <FontAwesomeIcon icon={faYoutube} /> </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2020 by Metzgerei Heiko Brath  GmbH, Deutschland</p>
          <p>&copy; Code and design by StudioPresent</p>
        </div>
      </footer>
    </>
  );
};

export default Brath;