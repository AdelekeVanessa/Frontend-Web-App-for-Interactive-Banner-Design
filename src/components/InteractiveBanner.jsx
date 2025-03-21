import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import BannerControls from "./BannerControls";
import { motion } from "framer-motion";
import { SketchPicker } from "react-color";
import { FaUpload, FaTextHeight, FaTools, FaShapes, FaPen, FaEraser, FaChevronDown } from "react-icons/fa";
import "../App.css"
import "../index.css"

const InteractiveBanner = () => {
  const [background, setBackground] = useState("#ffffff");
  const [uploads, setUploads] = useState([]);
  const [text, setText] = useState("");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [textStyle, setTextStyle] = useState("");
  const [drawingTool, setDrawingTool] = useState(null);
  const [showTextOptions, setShowTextOptions] = useState(false);
  const [showToolOptions, setShowToolOptions] = useState(false);
  const [showDrawOptions, setShowDrawOptions] = useState(false);
  const [showElementOptions, setShowElementOptions] = useState(false);

  const handleBackgroundChange = (color) => {
      setBackground(color.hex);
  };

  const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
          setUploads([...uploads, URL.createObjectURL(file)]);
      }
  };

  return (
      <div className="interactive-container">
          {/* Sidebar Form */}
          <div className="sidebar">
              <h2>Design Form</h2>
              
              {/* Background Upload */}
              <div className="tool-section">
                  <label><FaUpload /> Background</label>
                  <input type="file" onChange={handleFileUpload} />
                  <SketchPicker color={background} onChangeComplete={handleBackgroundChange} />
              </div>

              {/* Uploaded Files */}
              <div className="tool-section">
                  <label><FaUpload /> Uploads</label>
                  <div className="uploads-container">
                      {uploads.map((file, index) => (
                          <img key={index} src={file} alt="Uploaded" className="upload-thumbnail" />
                      ))}
                  </div>
              </div>

              {/* Text Customization */}
              <div className="tool-section">
                  <label onClick={() => setShowTextOptions(!showTextOptions)}>
                      <FaTextHeight /> Text <FaChevronDown />
                  </label>
                  {showTextOptions && (
                      <div className="dropdown">
                          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                          <select value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
                              <option value="Arial">Arial</option>
                              <option value="Courier New">Courier New</option>
                              <option value="Georgia">Georgia</option>
                              <option value="Times New Roman">Times New Roman</option>
                          </select>
                          <select value={textStyle} onChange={(e) => setTextStyle(e.target.value)}>
                              <option value="normal">Normal</option>
                              <option value="bold">Bold</option>
                              <option value="italic">Italic</option>
                              <option value="underline">Underline</option>
                          </select>
                      </div>
                  )}
              </div>

              {/* Tools Section */}
              <div className="tool-section">
                  <label onClick={() => setShowToolOptions(!showToolOptions)}>
                      <FaTools /> Tools <FaChevronDown />
                  </label>
                  {showToolOptions && (
                      <div className="dropdown">
                          <div onClick={() => setShowDrawOptions(!showDrawOptions)}>
                              Draw <FaChevronDown />
                          </div>
                          {showDrawOptions && (
                              <div className="sub-dropdown">
                                  <button onClick={() => setDrawingTool("pen")}><FaPen /> Pen</button>
                                  <button onClick={() => setDrawingTool("marker")}><FaPen /> Marker</button>
                                  <button onClick={() => setDrawingTool("brush")}><FaPen /> Brush</button>
                                  <button onClick={() => setDrawingTool("eraser")}><FaEraser /> Eraser</button>
                                  <button>Settings</button>
                              </div>
                          )}
                          <button>Table</button>
                          <div onClick={() => setShowElementOptions(!showElementOptions)}>
                              Elements <FaChevronDown />
                          </div>
                          {showElementOptions && (
                              <div className="sub-dropdown">
                                  <button><FaShapes /> Shapes</button>
                                  <button>Lines</button>
                                  <button>Graphics (Icons)</button>
                                  <button>Stickers</button>
                              </div>
                          )}
                      </div>
                  )}
              </div>
          </div>

          {/* Banner Display */}
          <motion.div className="banner" style={{ backgroundColor: background }}>
              {uploads.length > 0 && <img src={uploads[uploads.length - 1]} alt="Background" className="banner-image" />}
              {text && <h1 style={{ fontFamily: selectedFont, fontWeight: textStyle }}>{text}</h1>}
          </motion.div>
      </div>
  );
};

export default InteractiveBanner;