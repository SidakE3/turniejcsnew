import React, {Component} from 'react'
import './style.css'
import img1 from './img/img1.jpg' 
import img2 from './img/img2.jpg' 
import img3 from './img/img3.jpg' 


function importAll(r) {
  let images = {};
  //eslint-disable-next-line
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./sponsors', false, /\.(png|jpe?g|svg)$/));

class Welcome extends Component  {
  render() {
  return(
  <div className="page">
    <header>
      <div className="headerContent">
        <h2>I międzyszkolny turniej CSGO</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </header>
    <div className="container hello">
      <div className="row">
        <div className="col-12">
          <h2>Witaj na stronie I międzyszkolnego turnieju w szkole PZS nr 3 w Wejherowie</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam enim non aspernatur sed, expedita corporis beatae harum odio distinctio, magni dolor. Quas eius laborum aspernatur rem nesciunt magnam, saepe repellat?</p>
        </div>
        <div className="col-4"><img className="img-fluid" src={img2} alt="Granie"/></div>
        <div className="col-4"><img className="img-fluid" src={img1} alt="Zwycięzcy edycji szkolnej"/></div>
        <div className="col-4"><img className="img-fluid" src={img3} alt="Granie"/></div>
      </div>
    </div>
    <div className="container-fluid rules">
    <div className="rulesContent">
        <h2>Zapoznaj się z regulaminem</h2>
        <button className="btn btn-info mt-3">Regulamin</button>
      </div>
    </div>

    <div className="container">
      <h2>Sponsorzy</h2>
      <div className="sponsors-container">
      <img src={images['aladdyn.png']} alt="aladdyn" />
      </div>
    </div>
    <footer className="footer-copyright text-center p-3 bg-dark text-white">
      &copy; PZS3 2019
    </footer>
    </div>
  )
}
}

export default Welcome