import React from 'react';
import { useDispatch } from "react-redux";

import { moveUP, moveDOWN, moveLEFT, moveRIGHT } from "../store/positionSlice";

import Image from '../components/Image'

function Board() {
 
  const dispatch = useDispatch();

  const onMoveUP = () => {
    dispatch(moveUP());
  };

  const onMoveDOWN = () => {
    dispatch(moveDOWN());
  };

  const onMoveLEFT = () => {
    dispatch(moveLEFT());
  };

  const onMoveRIGHT = () => {
    dispatch(moveRIGHT());
  };

  return (
      <div className="container">
        <div className="container__item">

        </div>
        <div className="container__item-action" onClick={onMoveUP}>
          
        </div>
        <div className="container__item">

        </div>

        <div className="container__item-action" onClick={onMoveLEFT}>
          
        </div>
        
        <Image />

        <div className="container__item-action" onClick={onMoveRIGHT}>
          
        </div>
        <div className="container__item">

        </div>
        <div className="container__item-action" onClick={onMoveDOWN}>
          
        </div>
        <div className="container__item">

        </div>
      </div>
    
  );
}

export default Board;
