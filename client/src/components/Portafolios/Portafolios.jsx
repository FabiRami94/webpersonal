
import React from "react";
import styles from  "./Portafolios.module.css";
import {data} from "../../assets/data.js"
import WebLinks from "../WebLinks/WebLinks.jsx";
import projectTechnologies from "../../assets/projectTechnologies.js";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { connect } from "react-redux";

class Portafolios extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      proyectCounter: 1,
      imageCache: {},
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
      
      handleImageLoad = (event) => {
        const { target } = event;
        const imageURL = target.src;

        this.setState({
          imageCache: {
            ...this.state.imageCache,
            [imageURL]: target,
          },
        });
      };

      handleProjectChange = async (newProjectCounter) => {
        this.setState({
          proyectCounter: newProjectCounter,
          imageCache: {}, // Limpiamos la caché de imágenes
        });
      
        await this.waitForImagesToLoad(); // Esperamos a que las imágenes se carguen
      
        this.setState({
          imageCache: {}, // Limpiamos la caché nuevamente después de que todas las imágenes están cargadas
        });
      };
      
      waitForImagesToLoad = () => {
        const { proyectCounter } = this.state;
        const currentProject = data[proyectCounter - 1][`PROYECTO${proyectCounter}`];
      
        const promises = currentProject.map((item) => {
          const imageURL = item.imgUrl;
      
          return new Promise((resolve) => {
            if (this.state.imageCache[imageURL]) {
              // Si la imagen ya está en caché, resolvemos inmediatamente
              resolve();
            } else {
              // Si la imagen no está en caché, esperamos a que se cargue y luego resolvemos
              const img = new Image();
              img.src = imageURL;
              img.onload = () => resolve();
              this.setState((prevState) => ({
                imageCache: {
                  ...prevState.imageCache,
                  [imageURL]: img,
                },
              }));
            }
          });
        });  
        return Promise.all(promises);
      };

    render(){

        const { proyectCounter } = this.state;
        const { toggle } = this.props;
        const { toggleColor } = this.props;

        return (
          <div className={styles.divPrincipal}>
            <div className={styles.divGeneral}>
                <div style={{height: '2rem'}} className={styles.divChange}>
                    <h1 className={`${styles.p3} ${!toggle && styles.transition}`}>
                        <span style={{color: 'white'}}>Mis</span>&nbsp;
                        <span style={{color: '#00AEF6'}}>Proyectos</span>
                    </h1>
                    <h1 className={`${styles.p4} ${toggle && styles.transition}`}>
                        <span style={{color: 'white'}}>My</span>&nbsp;
                        <span style={{color: '#00AEF6'}}>Projects</span>
                    </h1>
                </div> 
                <div style={{ display: "flex", flexDirection: "row", marginTop: '4rem' }}>
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
                            <div style={{height: '2rem'}} className={styles.divChange}>
                              <p className={`${styles.p1} ${!toggle && styles.transition}`}>
                                  {`Desliza para ver las imágenes de cada proyecto.`}
                              </p>
                              <p className={`${styles.p1} ${toggle && styles.transition}`}>
                                {`Swipe to see the images of each project.`}
                              </p>
                            </div>
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
                                                  onLoad={this.handleImageLoad}
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
                <div style={{height: '4rem'}} className={styles.divChange}>
                  <p className={`${styles.p2} ${!toggle && styles.transition}`}>
                    {`Total de proyecto deployados: 2.`}
                  </p>
                  <p className={`${styles.p2} ${toggle && styles.transition}`}>
                    {`Total deployed projects: 2.`}
                  </p>
                </div>         
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
                <div id="minor" style={{height: '2rem'}} className={styles.divChange}>
                  <p style={{ transform: 'translate(-50%, -140%)'}} className={`${styles.p2} ${!toggle && styles.transition}`}>
                    {`Oprima para apreciar las tecnologías usadas y visitar cada proyectos.`}
                  </p>
                  <p style={{ transform: 'translate(-50%, -140%)'}} className={`${styles.p2} ${toggle && styles.transition}`}>
                    {`Click to see the technologies used and visit each project.`}
                  </p>
                </div>  
            </div> 
          </div>
        )
    }
}

const mapStateProps = (state) => {
  return{
    toggle: state.toggle.toogleButtonLenguage,
    toggleColor: state.toggle.toogleButtonColorMode,
  };
};

export default connect(mapStateProps)(Portafolios);
