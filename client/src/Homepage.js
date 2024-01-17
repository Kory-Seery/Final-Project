import styled from "styled-components"
import { Link } from "react-router-dom"


const Homepage = () => {
    return (
        <Page>
            <Divider>
                <Chillz>ChillZ</Chillz>
                <P>Live a little</P>
            </Divider>
    <Divhold>
        <Divbutton>
            <div className="glow-on-hover" type="button">
                <GOTO to="/Signin">Sign-In</GOTO>
            </div>
        
            <div className="glow-on-hover" type="button" >
                <GOTO to="/Signup">Sign-Up</GOTO>
            </div>
        
        </Divbutton>
    </Divhold>
        </Page>
    )
}


const Page = styled.div`
background: #222;
height: 94vh;
`

const Divider = styled.div`
padding-top: 300px;
`
const Divbutton = styled.div`
`

const GOTO = styled(Link)`
display: flex;
justify-content: center;
padding: 8px;
font-size: 30px;
font-family: 'FROZEN ICE', sans-serif;
color: white;
`

const P = styled.p`
color: gray;
text-align: center;
font-size: 30px;
font-family: 'FROZEN ICE', sans-serif;
`

const Divhold = styled.div`
display: flex;
justify-content: center;
`

const Chillz = styled.h1`
text-align: center;
font-size: 200px;
font-family: 'FROZEN ICE', sans-serif;

`

export default Homepage