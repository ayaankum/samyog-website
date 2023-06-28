import 'D:\\samyog-plx\\src\\App.css';
import Plx from "react-plx";
import TextBlock from './textBlock';
import React from 'react'

export default function Home() {
  return (
    <div>
       {/* foreground-1 */}
       <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 3.5,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="fg1Out.png" alt="foreground" />

         {/* foreground-Inner */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-out",
            properties: [
              {
                startValue: 1,
                endValue: 7,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="fgIn1.png" alt="foreground" />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-out",
            properties: [
              {
                startValue: 1,
                endValue: 7,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src="fgMo.png" alt="foreground" />
      </Plx>
    </Plx>

      {/* main background */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: "scale"
              }
            ]
          }
        ]}
        style={{  
          // position: "fixed",
          // left: 0,
          // top: 0,
          width: "100%",
          
        }}
      >
        <img style={{width: "100%" }} src="bg5.png" alt="background" />
      </Plx>
      
      {/* About us */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "relative",
          left: 0,
          right: 10,
          top: "10vw",
          width: "100%"
        }}
      >
        <div class = "box"><TextBlock/></div>
        <h1>Dummy-div</h1>
      </Plx>

      {/* dummy-div */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "relative",
          left: 0,
          right: 10,
          top: "10vw",
          width: "100%"
        }}
      >
        <div class = "box"><TextBlock/></div>
        <h1 class="hi">HELLO</h1>
      </Plx>

       {/* text-samyog */}
       <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          right: 10,
          top: "10vw",
          width: "100%"
        }}
      >
        <img
          style={{
            width: "50vw"
          }}
          src="/text-img2.png"
          alt="Goonies"
        />
      </Plx>
    </div>
  )
}
