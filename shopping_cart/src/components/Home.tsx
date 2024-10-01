import styled from "styled-components";
import CloudOne from "./../assets/cloud-1.svg"
import CloudTwo from "./../assets/cloud-2.svg"
import CloudThree from "./../assets/cloud-3.svg"
import CloudFour from "./../assets/cloud-4.svg"
import CloudFive from "./../assets/cloud-5.svg"
import CloudSix from "./../assets/cloud-6.svg"
import CloudSeven from "./../assets/cloud-7.svg"
import CloudEight from "./../assets/cloud-8.svg"

const Home = () => {
    return (
        <HomeStyled>
            <h1>Urban Avenue</h1>
            <img src={CloudOne} alt="first cloud" />
            <img src={CloudTwo} alt="second cloud" />
            <img src={CloudThree} alt="third cloud" />
            <img src={CloudFour} alt="fourth cloud" />
            <img src={CloudFive} alt="fifth cloud" />
            <img src={CloudSix} alt="sixth cloud" />
            <img src={CloudSeven} alt="seventh cloud" />
            <img src={CloudEight} alt="eighth cloud" />
        </HomeStyled>
    )
}

export default Home

const HomeStyled = styled.main`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1D3E56;
    animation: fadeBackgroundColor 5000ms ease-in;

    img {
        position: absolute;
        bottom: 50%;
        right: 50%;
    }

    img:nth-child(2) {
        right: 35%;
        bottom: 40%;
        animation: slideOutRight 5000ms ease-in-out;
        transform: translateX(70%);
        
    }
    img:nth-child(3) {
        bottom: 31%;
        right: 39%;
        animation: fastSlideOutRight 5000ms ease-in-out;
        transform: translateX(120%);
        
    }
    img:nth-child(4) {
        bottom: 49%;
        right: 40%;
        animation: fastSlideOutRight 5000ms ease-in-out;
        transform: translateX(120%);
        
    }
    img:nth-child(5) {
        bottom: 55%;
        right: 45%;
        animation: slideOutRight 5000ms ease-in-out;
        transform: translateX(70%);
        
    }
    img:nth-child(6) {
        bottom: 35%;
        right: 55%;
        animation: slideOutLeft 5000ms ease-in-out;
        transform: translateX(-70%);
        
    }
    img:nth-child(7) {
        bottom: 40%;
        right: 60%;
        animation: fastSlideOutLeft 5000ms ease-in-out;
        transform: translateX(-120%);
        
    }
    img:nth-child(8) {
        bottom: 41%;
        right: 45%;
        animation: fastSlideOutLeft 5000ms ease-in-out;
        transform: translateX(-120%);
        
    }
    img:nth-child(9) {
        bottom: 49%;
        right: 52%;
        animation: slideOutLeft 5000ms ease-in-out;
        transform: translateX(-70%);
        
    }

    @keyframes fadeBackgroundColor {
        0% {
            background: #F1FAFD;
        }
        100% { 
            background: #1D3E56;
        }
    }

    @keyframes slideOutLeft {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-70%);
        }
    }

    @keyframes slideOutRight {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(70%);
        }
    }
    @keyframes fastSlideOutLeft {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-120%);
        }
    }

    @keyframes fastSlideOutRight {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(120%);
        }
    }
`;