import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import default_avatar from "../../assets/icons/default-avatar.jpg";
import { ReactComponent as Exit } from "../../assets/icons/modal-exit.svg";
import { ReactComponent as Success } from "../../assets/icons/success.svg";
import { ReactComponent as UploadAvatar } from "../../assets/icons/upload-avatar.svg";
import "./edit-profile.css";

import { ReactComponent as PasswordHidden } from "../../assets/icons/hidden-password.svg";
import { ReactComponent as Close } from "../../assets/icons/modal-exit.svg";
import { ReactComponent as PasswordHide } from "../../assets/icons/password-eye.svg";
import { useSelector } from "react-redux";
import { mainApi } from "../../components/utils/main-api";
import Snackbar from "../../components/snackbar/snackbar";

function EditProfile({ getMe }) {
  React.useEffect(() => {
    document.title = `Edit Profile | Matchmove machine`;
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
  const [hidden1, setHide1] = useState(false);
  const [hidden2, setHide2] = useState(false);
  const userData = useSelector((state) => state.user);
  const [username, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [website, setWebsite] = useState(userData.website);
  const [portfolio, setPorfolio] = useState(userData.portfolio);
  const [about_me, setAboutme] = useState(userData.about_me);

  const [facebook, setFacebook] = useState(userData.facebook);
  const [twitter, setTwitter] = useState(userData.twitter);
  const [whatsapp, setWhatsapp] = useState(userData.whatsapp);
  const [telegram, setTelegram] = useState(userData.telegram);
  const [messenger, setMessenger] = useState(userData.messenger);
  const [linkedin, setLinkedin] = useState(userData.linkedin);
  const [avatar, setAvatar] = useState(userData.avatarUrl || null);

  const save = () => {
    const userdata = {
      name: username,
      email: email,
      website: website,
      portfolio: portfolio,
      about_me: about_me,
      avatarUrl: avatar,
      facebook: facebook,
      twitter: twitter,
      whatsapp: whatsapp,
      telegram: telegram,
      messenger: messenger,
      linkedin: linkedin,
    };
    mainApi
      .updateUser(userdata)
      .then((res) => {
        snackOptions("Updates successfuly saved", "success");
        getMe();
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
      formData.append("image", file);

      const response = await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAvatar(data.url);
      } else {
        console.error("Failed to upload image:", response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="edit_profile">
        <div className="edit_profile_top">
          <h1>Edit Profile</h1>
          <NavLink to="/profile">
            <Exit />
          </NavLink>
        </div>
        <div className="edit_profile_wrapper">
          <div className="edit_profile_user_avatar">
            <div className="edit_user_avatar">
              <img
                src={avatar ? `http://localhost:3001${avatar}` : default_avatar}
                alt=""
              />

              {/* onClick={handleUpload} */}

              <input
                type="file"
                onChange={handleFileChange}
                hidden
                ref={imgRef}
              />
              <div
                className="upload_avatar"
                onClick={() => imgRef.current.click()}
              >
                <UploadAvatar />
              </div>
            </div>
          </div>
          <div className="edit_profile_content">
            <Tabs>
              <TabList>
                <Tab>Information</Tab>
                <Tab>About me</Tab>
                <Tab>Socials</Tab>
                <Tab>Password</Tab>
              </TabList>
              <div className="edit_profile_content_line"></div>
              <TabPanel>
                <div className="edit_tab_items">
                  <div className="edit_tab_item">
                    <p>Name</p>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="edit_tab_item">
                    <p>Email</p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="edit_tab_item">
                    <p>Website</p>
                    <input
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="edit_tab_item">
                    <p>Portfolio</p>
                    <input
                      type="text"
                      value={portfolio}
                      onChange={(e) => setPorfolio(e.target.value)}
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="edit_tab_item edit_tab_item_textarea">
                  <p>Description</p>
                  <textarea
                    value={about_me}
                    onChange={(e) => setAboutme(e.target.value)}
                  ></textarea>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="edit_tab_items edit_socials_content">
                  <div className="edit_tab_item">
                    <p>Facebook</p>
                    <input
                      type="text"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </div>
                  <div className="edit_tab_item">
                    <p>Twitter (X)</p>
                    <input
                      type="text"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                    />
                  </div>
                  <div className="edit_tab_item">
                    <p>Whatsapp</p>
                    <input
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                  <div className="edit_tab_item">
                    <p>Telegram</p>
                    <input
                      type="text"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                    />
                  </div>
                  <div className="edit_tab_item">
                    <p>Messenger</p>
                    <input
                      type="text"
                      value={messenger}
                      onChange={(e) => setMessenger(e.target.value)}
                    />
                  </div>
                  <div className="edit_tab_item">
                    <p>Linkedin</p>
                    <input
                      type="text"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="edit_tab_items">
                  <div className="edit_tab_item">
                    <p>New password</p>
                    <input type={hidden1 ? "password" : "text"} />
                    <div
                      className="hide_pass"
                      onClick={() => setHide1(!hidden1)}
                    >
                      {hidden1 ? <PasswordHidden /> : <PasswordHide />}
                    </div>
                  </div>
                  <div className="edit_tab_item">
                    <p>Confirm password</p>
                    <input type={hidden2 ? "password" : "text"} />
                    <div
                      className="hide_pass"
                      onClick={() => setHide2(!hidden2)}
                    >
                      {hidden2 ? <PasswordHidden /> : <PasswordHide />}
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
            <div className="edit_profile_content_line"></div>
            <div className="edit_action_btns">
              <NavLink to="/profile">
                <button className="main_btn_temp_transparent close_cancel_btn">
                  <p>Close</p>
                  <Close />
                </button>
              </NavLink>

              <button className="main_btn_temp" onClick={save}>
                <p>Save</p>
                <Success />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar text={snackText} status={snackStatus} visible={visibleSnack} />
    </>
  );
}

export default EditProfile;
