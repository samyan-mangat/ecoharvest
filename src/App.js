import React from 'react';
import './App.css';

import headerImage from './herb.svg';

import garden1 from './garden1 Medium.jpeg'
import garden2 from './garden2 Medium.jpeg'
import garden3 from './garden3 Medium.jpeg'
import garden4 from './garden4 Medium.jpeg'
import garden6 from './garden6 Medium.jpeg'
import garden7 from './garden7 Medium.jpeg'
import garden8 from './garden8 Medium.jpeg'
import garden9 from './garden9 Medium.jpeg'
import garden10 from './garden10 Medium.jpeg'
import garden11 from './garden11 Medium.jpeg'
import garden12 from './garden12 Medium.jpeg'
import garden13 from './garden13 Medium.jpeg'

import wwd1 from './wwd1 Medium.jpeg'
import wwd2 from './wwd2 Medium.jpeg' 
import wwd3 from './wwd3 Medium.jpeg'  
import wwd4 from './wwd4 Medium.jpeg' 
import wwd5 from './wwd5 Medium.jpeg' 
import wwd6 from './wwd6 Medium.jpeg' 
import wwd7 from './wwd7 Medium.jpeg'  
import wwd8 from './wwd8 Medium.jpeg' 
import wwd9 from './wwd9 Medium.jpeg' 
import wwd10 from './wwd10 Medium.jpeg' 
import wwd11 from './wwd11 Medium.jpeg'  
import wwd12 from './wwd12 Medium.jpeg' 
import wwd13 from './wwd13 Medium.jpeg' 
import wwd14 from './wwd14 Medium.jpeg' 
import wwd15 from './wwd15 Medium.jpeg'
import wwd16 from './wwd16 Medium.jpeg'
import wwd17 from './wwd17 Medium.jpeg'

import ImageGrid from './ImageGrid'

const wwd = [wwd17, wwd1, wwd2, wwd15, wwd13, wwd16, wwd10, wwd8, wwd9, wwd7, wwd11, wwd12, wwd4, wwd6, wwd14]
const garden = [garden13, garden8, garden3, garden4, garden6, garden7, garden12, garden9, garden10, garden11]

function App() {
  return (
    <div className="App">
      <header className="App-header stretch" style={{ backgroundImage: `url(${headerImage})` }}>
        <h1 className="modern-font">Eco-Harvest</h1>
      </header>

      <div className="section-container">
        <div className="section-box shadow rounded" style={{display: 'grid', alignItems: 'center'}}>
          <h2 className="modern-font">What We Do</h2>
          <p className="modern-font" style={{width: '95%', margin: 'auto'}}>
          We are a Secaucus based group which grows, dries, and packages herbs to donate across homeless shelters in New Jersey. We were established in 2018, and have since donated over a 
          thousand units of herbs to shelters like the Palisades Emergency Residence Corporation and the Hoboken Homeless Shelter. We have also worked in conjunction with organizations 
          like Katie’s Crops, the Town of Secaucus, and Secaucus Cares. In addition to donating herbs, we also host fundraisers, the proceeds of which are used to provide homeless shelters with 
          food and hygiene supplies. 
          </p>
          <ImageGrid images={wwd}/>
        </div>

        <div className="section-box shadow rounded" style={{display: 'grid', alignItems: 'center'}}>
          <h2 className="modern-font">Our Gardens</h2>
          <p className="modern-font" style={{width: '85%', margin: 'auto'}}>
          Take a look at some of the herbs we've grown!
          </p>
          <ImageGrid images={garden}/>
        </div>

        <div className="section-box shadow rounded">
          <h2 className="modern-font">Get In Touch!</h2>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe0ChLe_I1zqVLokSSX25hKV5ELwiYtG7UxT5oKecnIdE86jQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

      </div>
    </div>
  );
}

export default App;
