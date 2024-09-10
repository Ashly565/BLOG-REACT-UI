import React from "react";


function Write() {
  return (
    <>
      <div className="write">
        <img className="writeImg"
         src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="  fs-5 text-success fa-solid fa-circle-plus"></i>
            </label>
            <input type="file" name="" id="fileinput"  style={{display:"none"}}/>
            <input type="text" name="" placeholder="Title" autoFocus={true} className="writeInput" />
            
          </div>
          <div className="writeFornGroup">
            <textarea type="text" className="writeInput writeText" placeholder="Add new story...."></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
}

export default Write;
