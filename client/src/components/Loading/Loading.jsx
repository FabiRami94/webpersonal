
import React from 'react';
import style from './Loading.module.css';

const Loading = () => {
    return(
        <>
            <div className={style.general}>
                <img
                    className={style.logo} 
                    src="https://i.ibb.co/ZGF3qS3/Logo-propio-Blanco.png" 
                    alt='Logo Propio'/>
                <div className={style.ballContainer}>
                    <div  
                        style={{backgroundColor: 'rgb(35, 39, 47)'}}
                        className={style.ballDiv}>
                        <img 
                            style={{marginTop: '0.2rem'}}
                            src='https://i.ibb.co/1fwZGfV/Logo-React.png/' 
                            alt='Logo React' />
                    </div>
                    <div 
                        style={{backgroundColor: 'rgb(227, 79, 38)'}}
                        className={style.ballDiv}>
                        <img 
                            style={{height: '70%', marginTop: '0.6rem'}}
                            src='https://i.ibb.co/znYM4VS/LogoHtml.png' 
                            alt='Logo HTML' />
                    </div>
                    <div  
                        style={{backgroundColor: 'rgb(2, 119, 189)'}}
                        className={style.ballDiv}>
                        <img 
                            style={{marginTop: '0.6rem'}}
                            src='https://i.ibb.co/VjtLHs4/LogoCss.png' 
                            alt='Logo CSS' />
                    </div>
                    <div 
                        style={{backgroundColor: 'rgb(244, 225, 30)'}} 
                        className={style.ballDiv}>
                        <img
                            style={{marginTop: '0.2rem'}} 
                            src='https://i.ibb.co/2NJxXnR/Logo-Java-Script.png' 
                            alt='Logo JavaScript' />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Loading;

