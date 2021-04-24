import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
export const Speed = () => {
    return (

            
         
  <ReactSpeedometer
    value={333}
    needleColor="steelblue"
    needleTransitionDuration={4000}
    needleTransition="easeElastic"
    currentValueText=" #{value} Gbps"
    currentValuePlaceholderStyle={'#{value}'}
    textColor={"#AAA"}
    maxValue={140}
    minValue={0}
    value={98}
  />

       
    )
}
