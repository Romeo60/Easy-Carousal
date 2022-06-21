import React, { Component } from 'react';
import {MdChevronRight, MdAddShoppingCart, MdPhoneEnabled, MdUpgrade, MdSpeakerPhone, MdHouse} from 'react-icons/md';
// import EasyCarousal from "./Carousel";
import EasyCarousal from "carousal-hub";

class App extends Component {
  render() {
    return (
      <div className="App">

        <EasyCarousal 
          hint='What are you' 
          boldHint='here to do?'
        >
        <div className="items text-center">
            <h1 className="product"><MdAddShoppingCart /></h1>
            <div className="header">Get a device</div>
            <div className="d-flex justify-content-center align-items-center sub-header">
              <span>Start here <MdChevronRight style={{paddingBottom: '4px'}} size={20}/></span> 
            </div>
        </div>

        <div className="items text-center">
            <h1 className="product"><MdPhoneEnabled /></h1>
            <div className="header">Add a Phone-line</div>
        </div>

        <div className="items text-center">
            <h1 className="product"><MdUpgrade /></h1>
            <div className="header">Upgrade</div>
        </div>

        <div className="items text-center">
            <h1 className="product"><MdSpeakerPhone /></h1>
            <div className="header">Mobile internet</div>            
        </div>
        <div className="items text-center">
            <h1 className="product"><MdHouse /></h1>
            <div className="header">Home internet</div>            
        </div>

        </EasyCarousal>
      </div>
    );
  }
}

export default App;
