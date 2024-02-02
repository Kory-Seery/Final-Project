import styled from "styled-components"
import Countdown from "./Countdown";
import Header from "./Header";



const Web = ({currentUser, setcurrentuser}) => {
    return (
        <div>
            <Header currentUser={currentUser} setcurrentuser={setcurrentuser}/>
        
<ALL>

    <Section1>
        <Countdown />
    </Section1>


    <Section2>
        <p>THE SITE</p>
    </Section2>



</ALL>
</div>
    )
}




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

export default Web;