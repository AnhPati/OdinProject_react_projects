import styled from "styled-components";

const Home = () => {
    return (
        <HomeStyled>
            <h1>Urban Avenue</h1>
        </HomeStyled>
    )
}

export default Home

const HomeStyled = styled.main`
    height: 100vh;
    background: #1D3E56;
    animation: fadeBackgroundColor 5000ms ease-in;

    @keyframes fadeBackgroundColor {
        0% {
            background: #F1FAFD;
        }
        100% { 
            background: #1D3E56;
        }
    }
`;