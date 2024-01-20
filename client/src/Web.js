import styled from "styled-components"
import Countdown from "./Countdown";




const Web = () => {
    return (
<ALL>

    <Section1>
        <p>The list</p>
        <Countdown />
    </Section1>


    <Section2>
        <p>THE SITE</p>
    </Section2>



</ALL>
    )
}

export default Web;


const ALL = styled.div`
display: grid;
grid-template-columns: auto auto;
height: 94vh;

`


const Section1 = styled.div`
width: 400px;
background-color: lightgray;

`

const Section2 = styled.div`

`