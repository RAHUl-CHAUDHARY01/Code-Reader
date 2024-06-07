import React, {useContext, useState} from 'react'

import CodeEditor from "./CodeEditor";
import noteContext from "../context/notes/noteContext"

import { Box } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
function Boxes({loggedin}) {

  let history= useNavigate();

  
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


  // console.log(localStorage.getItem('token'))
  
  
  
  return (

    <Box minH="100vh" minW="100vh" width="100vw" bg="153448" px={6} py={8}>
      <button
        type="button"
        style={{ position: "relative", left: "80%" }}
        class="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Save Code
      </button>
      

      {
        (loggedin ? 
        <div
        class="modal fade"
        style={{ color: "black" }}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Save
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title of Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={note.title}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  {/* <label htmlFor="description" className="form-label">Code</label> */}
                  Code
                  <textarea
                    cols="40"
                    rows="5"
                    className="form-control"
                    id="description"
                    name="description"
                    value={note.description}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
  


                  <label htmlFor="tag" className="form-label">
                    Language Used
                  </label>
                  <br/>
                  <select  name="tag">
                  <option value="javascript">javascript</option>
                  <option value="saab">python</option>
                  <option value="fiat">csharp</option>
                  <option value="audi">php</option>
                  <option value="audi">php</option>
                  <option value="audi">java</option>
                </select>
                  {/* <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={note.tag}
                    onChange={onChange}
                  /> */}
                </div>
              </form>
            </div>
            <div class="modal-footer">
            <button type="submit" disabled={note.title.length<5 || note.description.length<5}className="btn btn-primary" onClick={handleClick}>Save</button>
            </div>
          </div>
        </div>
      </div>:
      history('/login')  
    )
      }

      <CodeEditor />
    </Box>
    // <h1>sddfdvc</h1>
  );
}

export default Boxes;
