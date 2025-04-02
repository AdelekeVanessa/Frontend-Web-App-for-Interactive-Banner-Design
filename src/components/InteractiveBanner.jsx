import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import BannerControls from "./BannerControls";
import { motion } from "framer-motion";
import { SketchPicker } from "react-color";
import {
  FaUpload,
  FaTextHeight,
  FaTools,
  FaShapes,
  FaPlus,
  FaMinus,
  FaTable,
  FaIcons,
  FaHighlighter,
  FaPaintBrush,
  FaGripLines,
  FaSmile,
  FaPen,
  FaEraser,
  FaCog,
  FaChevronDown,
} from "react-icons/fa";
import TableControls from "./TableControls";
import "../App.css";
import "../index.css";

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
  const [showSettings, setShowSettings] = useState(false);
  const [showTableOptions, setShowTableOptions] = useState(false);
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [showRemoveOptions, setShowRemoveOptions] = useState(false);
  const [weight, setWeight] = useState(5);
  const [transparency, setTransparency] = useState(1);

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
          <label>
            <FaUpload /> Background
          </label>
          <input type="file" onChange={handleFileUpload} />
          <SketchPicker
            color={background}
            onChangeComplete={handleBackgroundChange}
          />
        </div>

        {/* Uploaded Files */}
        <div className="tool-section">
          <label>
            <FaUpload /> Uploads
          </label>
          <div className="uploads-container">
            {uploads.map((file, index) => (
              <img
                key={index}
                src={file}
                alt="Uploaded"
                className="upload-thumbnail"
              />
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
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
              />
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
              >
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
              <select
                value={textStyle}
                onChange={(e) => setTextStyle(e.target.value)}
              >
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
                Drawing Tools <FaChevronDown />
              </div>
              {showDrawOptions && (
                <div className="sub-dropdown">
                  <div className="tooltip-container">
                    <button onClick={() => setDrawingTool("pen")}>
                      <FaPen />{" "}
                    </button>
                    <span className="tooltip">Pen</span>
                  </div>
                  <div className="tooltip-container">
                    <button onClick={() => setDrawingTool("marker")}>
                      <FaHighlighter />{" "}
                    </button>
                    <span className="tooltip">Marker</span>
                  </div>
                  <div className="tooltip-container">
                    <button onClick={() => setDrawingTool("brush")}>
                      <FaPaintBrush />{" "}
                    </button>
                    <span className="tooltip">Brush</span>
                  </div>
                  <div className="tooltip-container">
                    <button onClick={() => setDrawingTool("eraser")}>
                      <FaEraser />{" "}
                    </button>
                    <span className="tooltip">Eraser</span>
                  </div>
                  {/* Settings button with sub-dropdown */}
                  <div className="settings-container">
                    <div className="tooltip-container">
                      <button onClick={() => setShowSettings(!showSettings)}>
                        <FaCog /> <FaChevronDown />
                      </button>
                      <span className="tooltip">Settings</span>
                    </div>
                    {showSettings && (
                      <div className="sub-dropdown">
                        <label>
                          Weight:
                          <input
                            type="range"
                            min="1"
                            max="10"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                          />
                        </label>
                        <label>
                          Transparency:
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={transparency}
                            onChange={(e) => setTransparency(e.target.value)}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div onClick={() => setShowElementOptions(!showElementOptions)}>
                Elements <FaChevronDown />
              </div>
              {showElementOptions && (
                <div className="sub-dropdown">
                  <div className="tooltip-container">
                    <button>
                      <FaShapes />{" "}
                    </button>
                    <span className="tooltip">Shapes</span>
                  </div>
                  <div className="tooltip-container">
                    <button>
                      <FaGripLines />{" "}
                    </button>
                    <span className="tooltip">Lines</span>
                  </div>
                  <div className="tooltip-container">
                    <button>
                      <FaIcons />{" "}
                    </button>
                    <span className="tooltip">Icons</span>
                  </div>
                  <div className="tooltip-container">
                    <button>
                      <FaSmile />{" "}
                    </button>
                    <span className="tooltip">Stickers</span>
                  </div>
                </div>
              )}
              <div className="tool-section">
                <label onClick={() => setShowTableOptions(!showTableOptions)}>
                  <FaTable /> Table <FaChevronDown />
                </label>
                {showTableOptions && (
                  <div className="dropdown">
                    <div className="tooltip-container">
                      <button className="table-btn">
                        <FaTable />
                      </button>
                      <span className="tooltip">Create</span>
                    </div>
                    <div className="dropdown-container">
                      <div className="tooltip-container">
                        <button
                          className="table-btn"
                          onClick={() => setShowAddOptions(!showAddOptions)}
                        >
                          <FaPlus />
                        </button>
                        <span className="tooltip">Add</span>
                      </div>
                      {showAddOptions && (
                        <div className="sub-dropdown">
                          <button>Add Row</button>
                          <button>Add Column</button>
                        </div>
                      )}
                    </div>
                    <div className="dropdown-container">
                      <div className="tooltip-container">
                        <button
                          className="table-btn"
                          onClick={() =>
                            setShowRemoveOptions(!showRemoveOptions)
                          }
                        >
                          <FaMinus />
                        </button>
                        <span className="tooltip">Remove</span>
                      </div>
                      {showRemoveOptions && (
                        <div className="sub-dropdown">
                          <button>Remove Row</button>
                          <button>Remove Column</button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Banner Display */}
      <motion.div className="banner" style={{ backgroundColor: background }}>
        {uploads.length > 0 && (
          <img
            src={uploads[uploads.length - 1]}
            alt="Background"
            className="banner-image"
          />
        )}
        {text && (
          <h1 style={{ fontFamily: selectedFont, fontWeight: textStyle }}>
            {text}
          </h1>
        )}
      </motion.div>
    </div>
  );
};

export default InteractiveBanner;
