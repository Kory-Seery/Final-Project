import styled from "styled-components"
//import { Link } from "react-router-dom"
import React, {useState} from "react";
import AvatarSelector from "./AvatarSelector";


const Signup = () => {
const [avatarId, setAvatarId] = useState(null)

    return (
    <Wrapper>
        <h1>Sign-up</h1>
        <div>
        <p>Select Avatar:</p>
        <AvatarSelector onSelect={setAvatarId} />
        </div>
    </Wrapper>
    );
}

export default Signup




const Wrapper = styled.div`

`