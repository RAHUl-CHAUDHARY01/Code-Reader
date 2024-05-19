import React from 'react'

const Download = ({text, filename, fileExtension}) => {
    // create a blob from the string
    // console.log("ddddd");

    const createFile = () => {

        const file = new Blob([text], {type: "text/.txt"});
        console.log(fileExtension);

        // anchor link
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = filename;

        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    return (
        <div className="btnDiv">
            <button id="downloadBtn" onClick={createFile} value="download" style={{border:"transparent",background:"white"}}>
              <i className="fa-solid fa-download mx-2"/>

            </button>
        </div>
    )
};

export default Download;