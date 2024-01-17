import { Link } from "react-router-dom"
import styled from "styled-components"



const Header = () => {
    return (
<Everything>
<Linkstoplaces>
    <Homelink to="/">Home</Homelink>
</Linkstoplaces>
</Everything>
    )
}

const Everything = styled.div`

width: 100%;
z-index: 200;
`

const Linkstoplaces = styled.div`
display: flex;
text-align: center;
background-color: black;
`

const Homelink = styled(Link)`
color: white;
text-decoration: none;
padding: 1%;
margin: auto;
text-align: center;
&:hover {
    color: black;
    background-color:skyblue;
}
`


export default Header