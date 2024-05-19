import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import CodeEditor from './CodeEditor';
import { useHistory, useNavigate } from 'react-router-dom';
import { position } from '@chakra-ui/react';
import Download from './Download';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  const [codeEditorData, setCodeEditorData] = useState({ show: false, noteContent: '', tagContent: '' });
  const history = useNavigate();

  const passValueToCodeEditor = () => {
    setCodeEditorData({ show: true, noteContent: note.description, tagContent: note.tag });
  };
  
  let fileExtension = "java";
  if (note.tag === "python") {
    fileExtension = "py";
  } else if (note.tag === "javascript") {
    fileExtension = "js";
  } else if (note.tag === "css") {
    fileExtension = "css";
  } else if (note.tag === "html") {
    fileExtension = "html";
  }else if(note.tag==="java"){
    fileExtension="java";
  }
  else if(note.tag==="php"){
    fileExtension="php";
  }
  else if(note.tag==="typescript"){
    fileExtension="ts";
  }
  // console.log(fileExtension);

  return (
    <div>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
              <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
              
              <i className="fa-solid fa-code mx-2" onClick={passValueToCodeEditor}></i>
              {/* <i className="fa-solid fa-download mx-2"> */}
                <Download text={note.description} filename={`${note.title}.${fileExtension}`}/>
              {/* </i>zzz */}
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
      {codeEditorData.show && <CodeEditor noteContent={codeEditorData.noteContent} tagContent={codeEditorData.tagContent} style={{ position: "absolute", top: "100px" }} />}
    </div>
  )
}

export default Noteitem;