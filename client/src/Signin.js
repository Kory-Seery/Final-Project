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
            <BUTTON type = "reset">Clear</BUTTON>
        </div>
        
        <div className="glow-on-hover" type="button" >
            <GOTO to="/Web"><BUTTON>Confirm</BUTTON></GOTO>
        </div>

    </Footer>
    </form>
        </Wrapper>
    );
}

export default Signin


const BUTTON = styled.button`
display: flex;
justify-content: center;
background: transparent;
border: none;
padding: 8px;
font-size: 30px;
font-family: 'FROZEN ICE', sans-serif;
color: white;
`
const Footer = styled.div`
display: flex;
`

const GOTO = styled(Link)`
text-decoration: none;
`

const Wrapper = styled.div`

`


