import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
// import { createGlobalStyle, keyframes, styled } from 'styled-components';
import { createGlobalStyle, keyframes, styled } from 'styled-components';




const GlobalStyles = createGlobalStyle`
html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#30142b, #a12727);
}
`;

const LoginBox = styled.div`
position: relative;
top: 280px;
left: 50%;
width: 800px;
padding: 40px;
transform: translate(-50%, -50%);
background: rgba(0, 0, 0, 0.5);
box-sizing: border-box;
box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
border-radius: 10px;
`;

const LoginBoxHeading = styled.h2`
margin: 0 0 30px;
padding: 0;
color: #fff;
text-align: center;
`;

const UserBox = styled.div`
position: relative;
`;

const UserBoxInput = styled.input`
width: 100%;
padding: 10px 0;
font-size: 16px;
color: #fff;
margin-bottom: 30px;
border: none;
border-bottom: 1px solid #fff;
outline: none;
background: transparent;
`;

const UserBoxLabel = styled.label`
position: absolute;
top: 0;
left: 0;
padding: 10px 0;
font-size: 16px;
color: #fff;
pointer-events: none;
transition: 0.5s;
`;

const UserBoxInputFocus = styled(UserBoxInput)`
&:focus ~ ${UserBoxLabel},
&:valid ~ ${UserBoxLabel} {
  top: -20px;
  left: 0;
  color: #f68e44;
  font-size: 12px;
}
`;

const LoginButton = styled.a`
position: relative;
display: inline-block;
padding: 10px 20px;
color: #b79726;
font-size: 16px;
text-decoration: none;
text-transform: uppercase;
overflow: hidden;
transition: 0.5s;
margin-top: 40px;
letter-spacing: 4px;
`;

const LoginButtonHover = styled(LoginButton)`
&:hover {
  background: #f49803;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f4c803,
            0 0 25px #bd9d0b,
            0 0 50px #f4e403,
            0 0 100px #d5cf1e;
}
`;

const ButtonSpan = styled.span`
position: absolute;
display: block;
`;

const btnAnim1 = keyframes`
0% {
  left: -100%;
}
50%, 100% {
  left: 100%;
}
`;

const btnAnim2 = keyframes`
0% {
  top: -100%;
}
50%, 100% {
  top: 100%;
}
`;

const btnAnim3 = keyframes`
0% {
  right: -100%;
}
50%, 100% {
  right: 100%;
}
`;

const btnAnim4 = keyframes`
0% {
  bottom: -100%;
}
50%, 100% {
  bottom: 100%;
}
`;

const ButtonSpan1 = styled(ButtonSpan)`
top: 0;
left: -100%;
width: 100%;
height: 2px;
background: linear-gradient(90deg, transparent, #f4c003);
animation: ${btnAnim1} 1s linear infinite;
`;

const ButtonSpan2 = styled(ButtonSpan)`
top: -100%;
right: 0;
width: 2px;
height: 100%;
background: linear-gradient(180deg, transparent, #f4bc03);
animation: ${btnAnim2} 1s linear infinite;
animation-delay: 0.25s;
`;

const ButtonSpan3 = styled(ButtonSpan)`
bottom: 0;
right: -100%;
width: 100%;
height: 2px;
background: linear-gradient(270deg, transparent, #f4dc03);
animation: ${btnAnim3} 1s linear infinite;
animation-delay: 0.5s;
`;

const button = styled(ButtonSpan)`
bottom: -100%;
left: 0;
width: 2px;
height: 100%;
background: linear-gradient(360deg, transparent, #f4b003);
animation: ${btnAnim4} 1s linear infinite;
animation-delay: 0.75s;
//   border: none; /* remove border */
//   background: transparent;
`;

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }



    return (
<>

            <GlobalStyles />
      <LoginBox>
      {/* <h2>Add a Code</h2> */}

        <LoginBoxHeading>Add a Code</LoginBoxHeading>
        <form >
          <UserBox>
            <label>Title of code</label>
            <UserBoxInput type="text" value={note.title} onChange={onChange} minLength={5}  aria-describedby="emailHelp" id="title" name="title" required/>
          </UserBox>
          <UserBox>
          <label>Code</label>
            <UserBoxInput type="text" value={note.description} onChange={onChange}  minLength={5} name="description" id="description" required />
          </UserBox>
          <UserBox>
            <label>Language Used</label>
            <UserBoxInput type="text" value={note.tag} onChange={onChange} minLength={5} id="tag" name="tag" required/>
          </UserBox>
          <LoginButtonHover type="submit" style={{position:"relative",left:"43%"}}>
            <ButtonSpan1 />
            <ButtonSpan2 />
            <ButtonSpan3 />
            <button type="submit" disabled={note.title.length<5 || note.description.length<5}className="btn btn-primary" onClick={handleClick}  style={{ border:" none",
  background: "transparent", color:"#b79726"}}>Add code</button>
          </LoginButtonHover>
        </form>
      </LoginBox>
        </>
    )
}

export default AddNote;