import styled from "styled-components"
import { Link } from "react-router-dom"



const Signin = () => {
    return (
    <Wrapper>
    <form>
        <div>
            <h1>Sign-in</h1>
        </div>
    <div>
        <div>
            <p>Nickname: <input type = "text" id = "nickname" required/></p>
        </div>
        <div>
            <p>Password: <input class = "test" type = "password" id = "password" required/></p>
        </div>
    </div>

    <Footer>

        <div className="glow-on-hover" type="button" >
            <Buttonstyle type = "reset">Clear</Buttonstyle>
        </div>
        
        <div className="glow-on-hover" type="button" >
            <GOTO to="/Web">Confirm</GOTO>
        </div>

    </Footer>
    </form>
        </Wrapper>
    );
}

export default Signin


/*const BUTTON = styled.button`
display: flex;
justify-content: center;
background: transparent;
border: none;
padding: 0px;
padding-left: 15%;
font-size: 40px;
font-family: 'FROZEN ICE', sans-serif;
color: white;
`*/

const Buttonstyle = styled.button`
display: flex;
justify-content: center;
text-decoration: none;
padding: 8px;
padding-left: 70px;
padding-right: 70px;
border: none;
font-size: 30px;
font-family: 'FROZEN ICE', sans-serif;
color: white;
background: transparent;
`

const Footer = styled.footer`
display: flex;
`

const GOTO = styled(Link)`
display: flex;
justify-content: center;
text-decoration: none;
padding: 8px;
font-size: 30px;
font-family: 'FROZEN ICE', sans-serif;
color: white;
`

const Wrapper = styled.div`

`


