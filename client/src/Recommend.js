import styled from "styled-components";
import Header from "./Header";



const Recommend = (currentUser, setcurrentuser ) => {
    return (
        <div>
        <Header currentUser={currentUser} setcurrentuser={setcurrentuser} />
    <Wrapper>
        <div>

            <form>
            <FO>
        <div>
            <H1>SUGGESTION</H1>
        </div>
    <SELECT>
        <form>
    <label>Difficulty:</label>
    <select>
        <option>Select one</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
        <option>Extreme</option>
    </select>
</form>
<Time>
<form>
    <label>Time:</label>
    <select>
        <option>Select one</option>
        <option>2-5 minutes</option>
        <option>30 minutes - 1 hour</option>
        <option>1-2 hours</option>
        <option>3 - 24 hours</option>
    </select>
</form>
</Time>
</SELECT>
    <TEXT>
        <form>
            <H3>Suggestion:</H3>
            <INPUT rows="4" cols="60" placeholder="provide special instructions for the challenge here"/>
        </form>
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
    </div>
    )
}

const H3 = styled.h3`
margin: 5px;
`

const INPUT = styled.textarea`
width: 50%;
padding-bottom: 120px;
`

const Time = styled.div`
margin-left: 20px;
`

const SELECT = styled.div`
display: flex;
justify-content: center;
`

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
height: 87.4vh;
padding-top: 60px;
`

const TEXT = styled.div`
margin: 20px;
`

export default Recommend;