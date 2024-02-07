import styled from "styled-components";



const Recommend = () => {
    return (
    <Wrapper>
        <div>
            <form>
            <FO>
        <div>
            <H1>SUGGESTION</H1>
        </div>
    <TEXT>
        <div>
            <p>
            Suggestion:{" "}
            <input
                type="text"
            />
            </p>
        </div>
    </TEXT>

    <Footer>
            <div className="glow-on-hover" type="button">
            <Bu to="/Recommend" >Clear</Bu>
            </div>
            <div className="glow-on-hover" type="button">
            <Buttonstyle>Confirm</Buttonstyle>
            </div>
        </Footer>
    </FO>
    </form>
        </div>
    </Wrapper>
    )
}


const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-left: 31%;
    position: absolute;
`

const BUTTON = styled.button`
    display: flex;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0px;
    padding-left: 15%;
    font-size: 40px;
    margin-left: 8%;
    font-family: 'FROZEN ICE', sans-serif;
    color: white;
`

const Buttonstyle = styled(BUTTON)`
    text-align: center;
    padding-right: 50px;
`

const Bu = styled(BUTTON)`
    text-align: center;
    padding-right: 84px;
`

const H1 = styled.h1`
margin-bottom: 40px;
`

const FO = styled.div`
border: 2px solid black;
border-radius: 10px;
box-shadow:  0px 0px 50px 5px lightblue;
padding: 20px;
text-align: center;
margin: 100px;
height: 50vh;
background-color: white;
`

const Wrapper = styled.div`
background: #222;
height: 93.4vh;
padding-top: 60px;
`

const TEXT = styled.div`
margin: 20px;
`

export default Recommend;