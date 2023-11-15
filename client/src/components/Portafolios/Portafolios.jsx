
import React from "react";
import styles from  "./Portafolios.module.css";
import {data} from "../../assets/data.js"
import WebLinks from "../WebLinks/WebLinks.jsx";
import projectTechnologies from "../../assets/projectTechnologies.js";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

class Portafolios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          imageShow: 0,
          counter: 0,
          proyectCounter: 1,
        };
      }

      onClickHandlerProyect = (event) => {
        const { id } = event.target;
        if (id === "Left1") {
          this.moveToLeftProyect();
        } else {
          this.moveToRigthProyect();
        }
      };
    
      moveToLeftProyect = () => {
        const { proyectCounter } = this.state;
        if (proyectCounter <= 1) {
          this.setState({ proyectCounter: 4 });
        } else {
          this.setState((prevState) => ({
            proyectCounter: prevState.proyectCounter - 1,
          }));
        }
      };
    
      moveToRigthProyect = () => {
        const { proyectCounter } = this.state;
        if (proyectCounter > 3) {
          this.setState({ proyectCounter: 1 });
        } else {
          this.setState((prevState) => ({
            proyectCounter: prevState.proyectCounter + 1,
          }));
        }
      };    

    render(){

        const { imageShow, proyectCounter } = this.state;

        return (
          <div className={styles.divPrincipal}>
            <div className={styles.divGeneral}>
                <div>
                    <h1 style={{display: 'flex', justifyContent: 'center'}}>
                        <span style={{color: 'white', marginTop: '20px'}}>Mis</span>&nbsp;
                        <span style={{color: '#08AAEA', marginTop: '45px'}}>Proyectos</span></h1>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <span
                        id="Left1"
                        onClick={this.onClickHandlerProyect}
                        className={styles.flechaizquierda1}>&#8249;
                    </span>
                    <div className={styles.principalContainer}>
                        <div className={styles.secondaryContainer}>
                            <h2 style={{ color: 'white', margin: "5px", textAlign: "center" }}>
                                {data[proyectCounter - 1].NAME}
                            </h2>
                            <p style={{textAlign: 'center', color: 'white', margin: '0px 0px 5px 0px', fontSize: '12px'}}>
                              Desliza para ver las imágenes de cada proyecto.</p>
                            <div>
                                <Swiper 
                                  pagination={{ 
                                    clickable: true, 
                                    el: '.swiper-pagination', 
                                    type: 'bullets' }} 
                                  modules={[Pagination]} 
                                  className="mySwiper">
                                  {data[proyectCounter - 1][`PROYECTO${proyectCounter}`].map(
                                    (item) => (
                                          <SwiperSlide key={item.id} >
                                              <img
                                                  className={styles.image}
                                                  alt={`foto ${item.id}`}
                                                  src={item.imgUrl}
                                              />
                                          </SwiperSlide>
                                      )
                                  )}
                                  <div className="swiper-pagination" style={{ bottom: '0px'}}></div>
                                  <div style={{ paddingTop: '20px' }}></div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <span
                        id="Rigth1"
                        onClick={this.onClickHandlerProyect}
                        className={styles.flechaderecha1}>&#8250;
                    </span>
                </div>             
                  <p style={{textAlign: 'center', color: 'white'}}>
                    Total de proyecto deployados: 1.</p>          
                <div className={styles.linkCards}>
                  {projectTechnologies.map((proj) => (
                    <WebLinks 
                      key = {proj.id} 
                      image = {proj.image}
                      url = {proj.url}
                      technologies = {proj.technologies}
                    ></WebLinks>
                  ))}
                </div>
                <p style={{textAlign: 'center', color: 'white', marginTop: '0px'}}>
                    Oprima para apreciar las tecnologías usadas y visitar cada proyectos.</p> 
            </div> 
          </div>
        )
    }
}

export default Portafolios;