import React, { useState } from "react";
import "./tutorials.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import tutorial1 from "../../assets/images/tutorial-1.png";
import tutorial2 from "../../assets/images/tutorial-2.png";
import tutorial3 from "../../assets/images/tutorial-3.png";
import TutorialCard from "../../components/tutorial-card/tutoril-card";
import TutorialPagination from "../../components/tutorial-pagination/tutorial-pagination";
function Tutorials() {
  const AllData = [
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
    {
      title: "Extract Focal Length",
      img: tutorial2,
      desc: "The script allows you to copy the Focal Length curve from the EXR metadata directly to the Curve Editor, as well as to the lens connected to the camera (if the focal length does not change and the curve is not needed, you can just get it from the EXR and write it to Lens).",
    },
    {
      title: "OpenEXR Metadata Reader",
      img: tutorial3,
      desc: "The script allows you to view the metadata of EXR files inside the 3DEqualizer",
    },
    {
      title: "Multi-Camera Geometry Tracking",
      img: tutorial1,
      desc: "Welcome to an in-depth exploration of Multi-Camera Geometry Tracking Technology! In this video, we'll unlock the mysteries behind this cutting-edge innovation and its incredible applications.",
    },
  ];
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <p>Tutorials</p>
        </div>
        <div className="header_template_title">
          <h1>Tutorials</h1>
        </div>
      </div>
      <div className="tutorials_list container">
        <TutorialPagination
          items={AllData}
          setData={setData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="tutorial_cards">
          {data && data.length
            ? data.map((item, index) => (
                <TutorialCard key={index} data={item} />
              ))
            : ""}
        </div>
        <TutorialPagination
          items={AllData}
          setData={setData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default Tutorials;
