import React, { useRef, useState } from "react";
import "./affiliate-program.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload-icon.svg";
import { ReactComponent as ContributionIcon } from "../../assets/icons/contribution-icon.svg";
import contributor from "../../assets/images/contributor.png";
import Select from "react-select";
import Snackbar from "../../components/snackbar/snackbar";
import { mainApi } from "../../components/utils/main-api";
import TopContributorsList from "../../components/top-contributos-list/top-contributos-list";

function AffiliateProgram() {
  React.useEffect(() => {
    document.title = `Affiliate program | Matchmove machine`;
  }, []);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  // snackbar
  const [visibleSnack, setVisibleSnack] = useState(false);
  const [snackText, setSnackText] = useState("");
  const [snackStatus, setSnackStatus] = useState("");
  const snackOptions = (text, status) => {
    setVisibleSnack(true);
    setSnackText(text);
    setSnackStatus(status);
    setTimeout(() => {
      setVisibleSnack(false);
    }, 2000);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1111121a"
        : provided.backgroundColor,
      color: state.isSelected ? "white" : provided.color,
    }),
  };
  const cameraOptions = [
    {
      value: "smartphone",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>Smartphone</p>
          </div>
        </div>
      ),
    },
    {
      value: "dslr",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>DSLR</p>
          </div>
        </div>
      ),
    },
    {
      value: "digital_camera",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>Digital camera</p>
          </div>
        </div>
      ),
    },
  ];

  const cameraManufacter = [
    {
      value: "canon",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>Canon</p>
          </div>
        </div>
      ),
    },
    {
      value: "nikon",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>Nikon</p>
          </div>
        </div>
      ),
    },
    {
      value: "sony",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>Sony</p>
          </div>
        </div>
      ),
    },
    {
      value: "tamron",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>Tamron</p>
          </div>
        </div>
      ),
    },
    {
      value: "panasonic",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>Panasonic</p>
          </div>
        </div>
      ),
    },
    {
      value: "sigma",
      label: (
        <div className="drop_api_item">
          <div className="drop_api_item_name">
            <p>Sigma</p>
          </div>
        </div>
      ),
    },
  ];
  const [lensModel, setLensModel] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [selectedCamera, setSelectedCamera] = useState(null);
  const handleSelectCamera = (selectedOption) => {
    setSelectedCamera(selectedOption);
  };
  const [selectedCameraM, setSelectedCameraM] = useState(null);
  const handleSelectCameraM = (selectedOption) => {
    setSelectedCameraM(selectedOption);
  };

  const saveGrid = () => {
    const gridData = {
      camera: selectedCamera.value,
      lens_model: lensModel,
      camera_manufacturer: selectedCameraM.value,
      file: selectedFile,
    };
    mainApi
      .createGridsApi(gridData)
      .then((res) => {
        snackOptions("Grid saved successfuly", "success");
        setLensModel("");
        setSelectedCamera("");
        setSelectedCameraM("");
      })
      .catch((err) => {
        console.log("Error object:", err);
        let errorMessage = "An error occurred";
        if (err && Array.isArray(err) && err.length > 0) {
          errorMessage = err[0].msg || err[0].message || "Error";
        } else if (err && err.message) {
          errorMessage = err.message;
        }
        snackOptions(errorMessage, "error");
      });
  };

  const imgRef = useRef(null);

  const handleFileChange = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:3001/file", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSelectedFile(data.url);
      } else {
        console.error("Failed to upload image:", response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <p>Affiliate program</p>
        </div>
        <div className="header_template_title">
          <h1>Affiliate program</h1>
        </div>
        <div className="affliate_header_text">
          <p>
            {" "}
            <b>Join the community of Lens Distortion Contributors!</b>
          </p>
          <p>
            {" "}
            <b>Shape the future.</b> Let’s build the most comprehensive
            Distortion Grids Database. Your shared distortion grids will make
            this resource even more valuable for the entire community.
          </p>
          <p>
            <b>Become a Contributor & Earn rewards.</b> Everyone who uploads
            distortion grids and gets them approved by our team becomes a valued
            contributor. You'll receive a <b>15% discount promo code</b> for any
            purchase in the Distortion Grids Database as a token of our
            appreciation. Top contributors, those who consistently share
            high-quality assets, will be recognized on a dedicated page,
            showcasing their work to a wider audience.
          </p>
          <p>
            <b>Let's push the boundaries of CG together!</b> Share your assets
            and contribute to this ever-growing resource. The more distortion
            grids we have, the more options artists will have to bring their
            visions to life. Upload your grids today and become part of a
            thriving creative community!
          </p>
        </div>

        <div className="custom_grids_upload">
          <div className="custom_form">
            <Select
              placeholder="Camera"
              styles={customStyles}
              options={cameraOptions}
              value={selectedCamera}
              onChange={handleSelectCamera}
            />
            <Select
              placeholder="Lens manufacturer"
              styles={customStyles}
              options={cameraManufacter}
              value={selectedCameraM}
              onChange={handleSelectCameraM}
            />
            <input
              type="text"
              placeholder="Lens model"
              value={lensModel}
              onChange={(e) => setLensModel(e.target.value)}
            />
            <textarea placeholder="Description"></textarea>
            <div className="main_btn_temp" onClick={saveGrid}>
              <p>Send</p>
              <ArrowRight />
            </div>
          </div>
          <div className="custom_upload">
            <UploadIcon />
            <input
              type="file"
              onChange={handleFileChange}
              hidden
              ref={imgRef}
            />
            <p>
              Select a file from local drive <br /> or <span>drag it here</span>
            </p>
            <h4>(The download file cannot be larger than 15 MB)</h4>
            <div
              className="main_btn_temp"
              onClick={() => imgRef.current.click()}
            >
              <p>Import</p>
              <ArrowRight />
            </div>{" "}
          </div>
        </div>
      </div>
      <TopContributorsList />
      <Snackbar text={snackText} status={snackStatus} visible={visibleSnack} />
    </>
  );
}

export default AffiliateProgram;
