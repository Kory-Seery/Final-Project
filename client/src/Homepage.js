import styled from "styled-components"



const Homepage = () => {
    return (
        <Page>
            <Divider>
                <Chillz>ChillZ</Chillz>
                <P>Live a little</P>
            </Divider>
            
            <div class="glow-on-hover" type="button">
                <P>Sign-In</P>
                </div>
            <div class="glow-on-hover" type="button">
                <P>Sign-Up</P>
            </div>
            
        </Page>
    )
}


const Page = styled.div`
background: gray;
height: 100vh;
`

const Divider = styled.div`
padding-top: 300px;
`

const P = styled.p`
text-align: center;
font-size: 30px;
font-family: 'FROZEN ICE', sans-serif;
`


const Chillz = styled.h1`
text-align: center;
font-size: 200px;
font-family: 'FROZEN ICE', sans-serif;

`

export default Homepage