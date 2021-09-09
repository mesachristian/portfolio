import React from 'react';

import Tilt from 'components/Tilt';
import Slider from 'components/Slider';
import Footer from 'components/Footer';

import ComputerIcon from './components/ComputerIcon';
import BookIcon from './components/BookIcon';
import DumbbellIcon from './components/DumbbellIcon';

import './styles.css';

// ICONS
import developer_icon from 'icons/developer_icon.svg';
import algo_visualizer_logo from 'icons/algo_visualizer_logo.png';
import SmartGenix_logo from 'icons/SmartGenix_logo.png';
import artist_logo from 'icons/artist_logo.png';

const Home = () => {
    return(
        <div>
            <GreetingSection/>

            <ProjectsSection/>
            
            <WhoAmISection/>

            <HomeFooter />
        </div>
    );
}

const GreetingSection = () =>{
    let imageStyle = {
        width : 500,
        height : 600,
        marginTop : -150
    }

    return(
        <div className="greeting-section-container">
            <div className="greeting-section">
                <div className="greeting-text-section">
                    <h1 className="greeting-text-section-h1">
                        Hi everyone,<br/>My name is Christian Mesa<br/><br/>
                    </h1>

                    <h3 className="greeting-text-section-h3">
                        I'm a self taught developer and this is my project portfolio.
                    </h3>
                </div>

                <div className="greeting-image-section">
                    <img alt="" src={developer_icon} style={imageStyle}/>
                </div>
            </div>
        </div>
    );
}

const ProjectsSection = () => {
    return(
        <div className="projects-section-container">
            <div className="projects-section-title">
                <h1 className="projects-section-title-h1">Projects...</h1>
            </div>
            <div className="card-container">
                
                <Card title="Smartgenix" number="01" icon={SmartGenix_logo}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries.
                </Card>

                <Card title="Algo Visualizer" number="02" icon={algo_visualizer_logo}>
                    2 is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries.
                </Card>

                <Card title="Art Creator" number="03" icon={artist_logo}>
                    Lorem 3 is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries.
                </Card>
            </div>
        </div>
    );
}

const Card = (props) => {
    return(
    <div className="cc-card">
        <Tilt>
            <div className="card">
                    <div className="card-content">
                        <h2 className="card-content-h2">{props.number}</h2>
                        <h3 className="card-content-h3">{props.title}</h3>
                        <p className="card-content-p">
                            {props.children}
                        </p>   
                        <a className="card-content-a" href="/projects">Read More</a>
                    </div>

                    <div className="card-icon-container">
                        <img alt="" className="card-icon" src={props.icon}></img>
                        <h1 className="card-icon-title">{props.title}</h1>
                    </div>
            </div>
        </Tilt>
    </div>
    );
}

const WhoAmISection = () =>{
    return(
        <div className="who-am-i-section-container">

            <div className="projects-section-title">
                <h1 className="projects-section-title-h1">Who am I...</h1>
            </div>

            <div className="hobbies-container">
                <Slider>
                    <Hobbie title="Big fan of technologie" icon={<ComputerIcon/>}>
                        Lorem 3 is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries.
                    </Hobbie>

                    <Hobbie title="Enthusiastic reader" icon={<BookIcon/>}>
                        Lorem 3 is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries.
                    </Hobbie>

                    <Hobbie title="Love making exercise" icon={<DumbbellIcon/>}>
                        Lorem 3 is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries.
                    </Hobbie>

                </Slider>
            </div>
        </div>
    );
}

const Hobbie = (props) =>{
    return(
        <div className="hobbie-container">
            <div className="hobbie">
                <h2 className="hobbie-title">{props.title}</h2>

                <p className="hobbie-content">{props.children}</p>
            </div>

            <div className="hobbie-icon">
                {props.icon}
            </div>
        </div>
    );
} 

const HomeFooter = () => {
    return(
        <div className="home-footer">
            <Footer />
        </div>
    );
}

export default Home;
