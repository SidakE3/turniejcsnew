import React, {Component} from 'react'
import { UncontrolledCollapse } from 'reactstrap';
import "./css/reset.css"
import "./css/responsive.css"
import "./css/style.css"
import { Link } from 'react-router-dom'


class Welcome extends Component  {
  render() {
    function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./sponsors', false, /\.(png|jpe?g|svg)$/));

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
          Zapisy na turniej odbywają się za pomocą tego formularza, przy zapisie trzeba podac pełną nazwę drużyny z ograniczeniem do 24 znaków dodatkowo adres email dowódcy drużyny na którą będą wysyłane informacje związane z turniejem organizowanym przez PZS 3 w Wejherowie. <br /><br />Po wysłaniu formularza na twojego maila w ciągu 24h przyjdzie mail zwrotny z danymi do przelewu za wpisowe do turnieju.
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

  <div className="turniej" id="turniej">
    <div className="wrapper">

      <div className="row">
         <div className="col-sm">
           <h1>Zapisy</h1>
           <div className="line"></div>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
         <div className="col-sm">
           <h1>Kwalifikacje</h1>
           <div className="line"></div>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
         <div className="col-sm">
           <h1>Finał</h1>
           <div className="line"></div>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
       </div>

    </div>
  </div>

  <div className="faq" id="faq">
    <div className="wrapper">

      <h1>FAQ</h1>
      <div className="line"></div>


          <div className="accordion-item">
            <button className="btn" id="toggle1">Jak dokonac zaplaty za turniej?</button>
            <UncontrolledCollapse toggler = "#toggle1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </UncontrolledCollapse>
          </div>
          <div className="accordion-item">
          <button className="btn" id="toggle2">Jak dokonac zaplaty za turniej?</button>
            <UncontrolledCollapse toggler = "#toggle2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </UncontrolledCollapse>
          </div>
          <div className="accordion-item">
          <button className="btn"id="toggle3">Jak dokonac zaplaty za turniej?</button>
            <UncontrolledCollapse toggler = "#toggle3">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </UncontrolledCollapse>
          </div>
          <div className="accordion-item">
          <button className="btn" id="toggle4">Jak dokonac zaplaty za turniej?</button>
            <UncontrolledCollapse toggler = "#toggle4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </UncontrolledCollapse>
          </div>
        </div>

      </div>
    <div className="sponsors">
      <div className="wrapper">
        <h1>SPONSORZY</h1>
        <div className="line"></div>
        <div className="sponsors-list">
        {images.map((image, index) => <img src={image} alt="sponsor" key={index}/>)}
        </div>
      </div>
    </div>

    <footer>
      <div className="wrapper">
        <p>Footer @ 2018</p>
      </div>
    </footer>
</div>
  )
}
}

export default Welcome