import React, {Component} from 'react'
import { UncontrolledCollapse } from 'reactstrap';
import "./css/reset.css"
import "./css/responsive.css"
import "./css/style.css"
import { Link } from 'react-router-dom'
import wojtek from "./img/wojtek.png"
import CookieConsent from "react-cookie-consent";



class Welcome extends Component  {
  render() {
    function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../../public/img/sponsors', false, /\.(png|jpe?g|svg)$/));

  return(
  <div className="page">
  <header>
    <div id="stage"></div>
    <div className="center">
      <h1>KWALIFIKACJE</h1>
      <h2>30 MARCA</h2>
    </div>
  </header>

  <div className="zapisy" id="zapisy">
    <div className="wrapper">
      <h1>ZAPISY NA TURNIEJ</h1>
      <div className="line"></div>

      <div className="container box">
        <div className="row align-items-center">
        <div className="col-sm-12 box1">
          Zapisy na turniej odbywają się za pomocą tego formularza, przy zapisie trzeba podac pełną nazwę drużyny oraz adres email dowódcy drużyny na którą będą wysyłane informacje związane z turniejem organizowanym przez PZS 3 w Wejherowie. <br /><br />Po wysłaniu formularza na twojego maila w ciągu 24h przyjdzie mail zwrotny z danymi do przelewu za wpisowe do turnieju.
        </div>
        <div className="col-sm-12 box2">
          <Link to="/signup" className="btn btn-box">Zapisz drużynę</Link>
          <p>Masz już drużynę? Zaloguj się do panelu</p>
          <Link to="/signin" className="btn btn-box">Logowanie do panelu</Link>
        </div>
        </div>
      </div>
    </div>
  </div>  
        <div className="wrapper" id="turniej">

        <div className="row">
          <div className="col-sm turniej">
            <h1>Kwalifikacje</h1>
            <div className="line"></div>
            <p>Zapisy oraz wpłaty od drużyn trwają do 29 Marca 23:59. Mecze kwalifikacyjne rozgrywane będą w systemie BO1 na podstawowych zasadach ESL. </p><p>Jeżeli posiadasz trochę wolnego czasu w sobotnie popołudnie, to wiesz co masz robić! Zapisz się ze swoją 5-cio osobową drużyną i pokaż kto tu rządzi! Przypominam, cel jest charytatywny, więc to idealny moment aby się wykazać, a my czekamy właśnie na Ciebie!</p>
          </div>
          <div className="col-sm turniej">
            <h1>Finał</h1>
            <div className="line"></div>
            <p>Najlepsze drużyny z Was zmierzą się u nas w szkole twarzą w twarz podczas transmisji na żywo!  Finały odbędą się 2 kwietnia w naszej szkole PZS3 nr. 3 w Wejherowie, nie może Ciebie zabraknąć!</p><p>
            Do wygrania wiele ciekawych nagród, a wstęp kosztuje tylko 20zł! Zapisz się i przekonaj na co Was stać!</p>
          </div>
        </div>

      </div> 
      <div className="wrapper" id="wojtek">

      <h1>WOJTEK</h1>
      <div className="line"></div>
        <div className="row wojtek-content">
          <div className="col-sm"><img className="img-fluid" src={wojtek} alt="Wojtuś"/></div>
          <div className="col-sm">
              <h2>Zostań bohaterem Wojutsia!</h2>
              <p>Na codzień podejmujemy walkę z losem. W życiu tak jak w grach walczymy o zwycięstwo i ułatwianie sobie przyszłych zmagań. Dołącz do drużyny Wojutsia i pomóż mu wygrać! Pomagająć dajemy szansę na lepsze życie.</p>
          </div>
        </div>
      </div>
    <div className="faq" id="faq">
      <div className="wrapper">

        <h1>FAQ</h1>
        <div className="line"></div>


            <div className="accordion-item">
              <button className="btn" id="toggle1">Jak wpłacić pieniądze?</button>
              <UncontrolledCollapse toggler = "#toggle1">
                <p>Wpłacasz 20zł na konto podane w e-mailu zwrotnym i wysyłasz potwierdzenie wraz z nazwą drużyny!</p>
              </UncontrolledCollapse>
            </div>
            <div className="accordion-item">
            <button className="btn" id="toggle2">Co można wygrać?</button>
              <UncontrolledCollapse toggler = "#toggle2">
                <p>Pula pieniędzy nie jest określona na obecną chwilę, ale przekracza wielokrotnie cenę zapisów.</p>
              </UncontrolledCollapse>
            </div>
            <div className="accordion-item">
            <button className="btn"id="toggle3">Jak mogę skontaktować się z organizatorami?</button>
              <UncontrolledCollapse toggler = "#toggle3">
                <p>Łap <u><a href="https://discordapp.com/invite/k64wwuA">discorda</a></u>, tam wszystko znajdziesz:) </p>
              </UncontrolledCollapse>
            </div>
            <div className="accordion-item">
            <button className="btn" id="toggle4">Co jeśli zarejestruję swoją drużynę po zamknięciu zapisów?</button>
              <UncontrolledCollapse toggler = "#toggle4">
                <p>Nie dostaniesz się do turnieju.</p>
              </UncontrolledCollapse>
            </div>
            <div className="accordion-item">
            <button className="btn" id="toggle5">Czy moje pieniądze zostaną zwrócone na konto po przegranej w kwalifikacjach?</button>
              <UncontrolledCollapse toggler = "#toggle5">
                <p>Otóż nie, pieniądze zostaną przekazane na cel charytatywny, a wpłacone pieniądze nie podlegają zwrotowi. </p>
              </UncontrolledCollapse>
            </div>
            <div className="accordion-item">
            <button className="btn" id="toggle6">Jak będzie rozegrany finał 2 ostatnich drużyn?</button>
              <UncontrolledCollapse toggler = "#toggle6">
                <p>Finał odbędzie się w systemie B03, czyli tzw. Best Of 3. Oznacza to, że drużyny, rozegrają ze sobą conajmniej 2 mecze podczas walki o zwycięstwo 1-szego miejsca! </p>
              </UncontrolledCollapse>
            </div>
          </div>

        </div> 
    <div className="sponsors" id="sponsorzy">
      <div className="wrapper">
        <h1>SPONSORZY</h1>
        <div className="line"></div>
        <div className="sponsors-list">
        {images.map((image, index) => <img src={image} className="img-fluid sponsor-img" alt="sponsor" key={index}/>)}
        </div>
      </div>
    </div>

    <footer>
      <div className="wrapper">
        <p>TOT @ 2019</p>
      </div>
    </footer>
    <CookieConsent
          buttonClasses="btn btn-primary"
          buttonText="Rozumiem"
          containerClasses="alert col-lg-12"
          contentClasses="text-capitalize"
        >
          Ta strona używa plików cookies.
        </CookieConsent>
</div>
  )
}
}

export default Welcome