import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { positionSelector, init } from "../store/positionSlice";
import logo from '../assets/dou_logo.png';

function Image () {
  const position = useSelector(positionSelector)
  const dispatch = useDispatch()
  const doulogo = useRef()
  const area = useRef()

  useEffect(() => {

    dispatch(init({ 
      areaWidth: area.current.offsetWidth, 
      areaHeight: area.current.offsetHeight, 
      imageWidth: doulogo.current.offsetWidth,
      imageHeight: doulogo.current.offsetHeight
    }))
    
  }, [])

  useEffect(()=>{
    doulogo.current.style.top = `${position.Y}px`
    doulogo.current.style.left = `${position.X}px`
  }, [position])

  return (
    <div ref={area} className="container__item-image">
      <img ref={doulogo} src={logo} alt="DigitalOnUs Logo" />
    </div>
  )
}

export default Image