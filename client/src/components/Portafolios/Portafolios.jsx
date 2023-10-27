
import React from "react";
import styles from  "./Portafolios.module.css";
import {data} from "../../assets/data.js"


class Portafolios extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          imageShow: 0,
          counter: 0,
          proyectCounter: 1,
        };
      }

      onClickHandler = (event) => {
        const { id } = event.target;
        if (id === "Left2") {
          this.moveToLeft();
        } else {
          this.moveToRigth();
        }
      };
    
      moveToLeft = () => {
        const { counter, imageShow } = this.state;
        if (counter > 0) {
          this.setState({ imageShow: imageShow + 20, counter: counter - 1 });
        } else {
          this.setState({ imageShow: -80, counter: 4 });
        }
      };
    
      moveToRigth = () => {
        const { counter, imageShow } = this.state;
        if (counter < 4) {
          this.setState({ imageShow: imageShow - 20, counter: counter + 1 });
        } else {
          this.setState({ imageShow: 0, counter: 0 });
        }
      };
    
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
          this.setState({ proyectCounter: 3 });
        } else {
          this.setState((prevState) => ({
            proyectCounter: prevState.proyectCounter - 1,
          }));
        }
      };
    
      moveToRigthProyect = () => {
        const { proyectCounter } = this.state;
        if (proyectCounter > 2) {
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
                        <span
                        id="Left2"
                        onClick={this.onClickHandler}
                        className={styles.flechaizquierda2}>&#8249;
                        </span>
                        <div className={styles.secondaryContainer}>
                            <h2 style={{ color: 'white', margin: "5px", textAlign: "center" }}>
                                {Object.keys(data[proyectCounter - 1])[0]}
                            </h2>
                            <div
                                className={styles.carruseles}
                                style={{ transform: `translateX(${imageShow}%)` }}>
                                {data[proyectCounter - 1][`PROYECTO${proyectCounter}`].map(
                                    (item) => (
                                        <section key={item.id} className={styles.sliderSection}>
                                            <img
                                                className={styles.image}
                                                alt={`foto ${item.id}`}
                                                src={item.imgUrl}
                                            />
                                        </section>
                                    )
                                )}
                            </div>
                        </div>
                        <span
                            id="Rigth2"
                            onClick={this.onClickHandler}
                            className={styles.flechaderecha2}>&#8250;
                        </span>
                    </div>
                    <span
                        id="Rigth1"
                        onClick={this.onClickHandlerProyect}
                        className={styles.flechaderecha1}>&#8250;
                    </span>
                </div>
                <div style={{textAlign: 'center'}}>
                  <span style={{ color: 'white', fontWeight: 'bold'}}>Links Soon...</span>
                </div>
            </div>  
          </div>
        )
    }
}


export default Portafolios;