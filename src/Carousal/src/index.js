import React, { useState } from 'react';
import  {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

function EasyCarousal(props) {

  const [index, setIndex] = useState(0);
  

  const cards = props.children;
  // const cards =[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]; //start here

  // Will always load 5 cards{second-last, last, first, second & third}
  const [sides, setSides] = useState({ll: cards.length - 2, l: cards.length - 1, a: 0, r: 1, rr: 2});


  const goBack = (n, l) =>{

    let result = n - 1;

    return result ===-1 ? l - 1 : result
  }

  const prev = () => {
    setIndex((index - 1) % cards.length);

    setSides({ll: goBack(sides.ll, cards.length),
              l: goBack(sides.l, cards.length),
              a: goBack(sides.a, cards.length),
              r: goBack(sides.r, cards.length),
              rr: goBack(sides.rr, cards.length)
            }
            );

  }

  const next = () =>{
    setIndex((index + 1) % cards.length);

    setSides({ll: (sides.ll + 1) % cards.length,
              l: (sides.l + 1) % cards.length,
              a: (sides.a + 1) % cards.length,
              r: (sides.r + 1) % cards.length,
              rr: (sides.rr + 1) % cards.length
            }
            );
  }

  
  return (
    <div className="main-wrapper w-100 d-block">      
        <div className="d-flex justify-content-center">
        <div className="d-md-flex d-lg-flex d-sm-none d-none justify-content-center hint">
          <div>
            <div>{props.hint}</div>
            <div className="bold">{props.boldHint}</div>
          </div>
        </div>
        </div>
      <div className="content-wrapper d-flex col-12 justify-content-center">

        {cards.map((card, i)=>{

          
          const farLeft = sides.ll;
          const left = sides.l;
          const active = sides.a;
          const right = sides.r;
          const farRight = sides.rr;

          let className = "";

          if(i === active ){
            className = "item w-lg-20 w-md-50";
          }else if(i === right){
            className = "item item-right";
          }else if(i === farRight){
            className = "item item-right-right d-none d-md-none d-lg-block";
          }else if(i === farLeft){
            className = "item item-left-left d-none d-md-none d-lg-block";
          }else if(i === left){
            className = "item item-left";
          }

          return <div className={className} key={i}>{card}</div>
        })}  

          
          
      </div>
       <div className="d-flex justify-content-center">
        <div className="d-flex controls justify-content-between">
            <MdChevronLeft className="skip" onClick={()=> prev()} style={{backgroundColor: "black", borderRadius: '100%', color: 'white'}} size={30}/>
            <MdChevronRight className="skip" onClick={()=> next()} style={{backgroundColor: "black", borderRadius: '100%', color: 'white'}}size={30}/>
        </div>
        </div>
    </div>
  );
}

export default EasyCarousal;