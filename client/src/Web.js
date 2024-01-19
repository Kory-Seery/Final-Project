import styled from "styled-components"




const Web = () => {
    return (
<ALL>

    <Section1>
        <p>The list</p>
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
background-color: lightgray;

`

const Section2 = styled.div`

`