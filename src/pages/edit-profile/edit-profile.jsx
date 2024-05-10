import React, { useState } from "react";
import "./edit-profile.css";
import { ReactComponent as Exit } from "../../assets/icons/modal-exit.svg";
import { ReactComponent as UploadAvatar } from "../../assets/icons/upload-avatar.svg";
import { NavLink } from "react-router-dom";
import default_avatar from "../../assets/icons/default-avatar.jpg";
import Select from "react-select";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ReactComponent as Success } from "../../assets/icons/success.svg";

import { ReactComponent as Close } from "../../assets/icons/modal-exit.svg";
import { ReactComponent as PasswordHide } from "../../assets/icons/password-eye.svg";
import { ReactComponent as PasswordHidden } from "../../assets/icons/hidden-password.svg";
function EditProfile() {
  React.useEffect(() => {
    document.title = `Edit Profile | Matchmove machine`;
  }, []);
  const [hidden1, setHide1] = useState(false);
  const [hidden2, setHide2] = useState(false);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1111121a"
        : provided.backgroundColor,
      color: state.isSelected ? "white" : provided.color,
    }),
  };
  return (
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
            <img src={default_avatar} alt="" />
            <div className="upload_avatar">
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
                  <input type="text" />
                </div>
                <div className="edit_tab_item">
                  <p>Email</p>
                  <input type="email" />
                </div>
                <div className="edit_tab_item">
                  <p>Website</p>
                  <input type="text" />
                </div>
                <div className="edit_tab_item">
                  <p>Portfolio</p>
                  <input type="text" />
                </div>
                <div className="edit_tab_item">
                  <p>Occupation</p>
                  <Select placeholder="Editor" styles={customStyles} />
                </div>
              </div>
              <div className="edit_profile_content_line"></div>
              <div className="edit_action_btns">
                <button className="main_btn_temp_transparent close_cancel_btn">
                  <p>Close</p>
                  <Close />
                </button>
                <button className="main_btn_temp">
                  <p>Save changes</p>
                  <Success />
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="edit_tab_item edit_tab_item_textarea">
                <p>Description</p>
                <textarea></textarea>
              </div>
              <div className="edit_profile_content_line"></div>
              <div className="edit_action_btns">
                <button className="main_btn_temp_transparent close_cancel_btn">
                  <p>Close</p>
                  <Close />
                </button>
                <button className="main_btn_temp">
                  <p>Save</p>
                  <Success />
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="edit_tab_items edit_socials_content">
                <div className="edit_tab_item">
                  <p>Facebook</p>
                  <input type="text" />
                </div>
                <div className="edit_tab_item">
                  <p>Twitter (X)</p>
                  <input type="text" />
                </div>
                <div className="edit_tab_item">
                  <p>Whatsapp</p>
                  <input type="text" />
                </div>
                <div className="edit_tab_item">
                  <p>Telegram</p>
                  <input type="text" />
                </div>
                <div className="edit_tab_item">
                  <p>Messenger</p>
                  <input type="text" />
                </div>
                <div className="edit_tab_item">
                  <p>Linkedin</p>
                  <input type="text" />
                </div>
              </div>
              <div className="edit_profile_content_line"></div>
              <div className="edit_action_btns">
                <button className="main_btn_temp_transparent close_cancel_btn">
                  <p>Close</p>
                  <Close />
                </button>
                <button className="main_btn_temp">
                  <p>Save</p>
                  <Success />
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="edit_tab_items">
                <div className="edit_tab_item">
                  <p>New password</p>
                  <input type={hidden1 ? "password" : "text"} />
                  <div className="hide_pass" onClick={() => setHide1(!hidden1)}>
                    {hidden1 ? <PasswordHidden /> : <PasswordHide />}
                  </div>
                </div>
                <div className="edit_tab_item">
                  <p>Confirm password</p>
                  <input type={hidden2 ? "password" : "text"} />
                  <div className="hide_pass" onClick={() => setHide2(!hidden2)}>
                    {hidden2 ? <PasswordHidden /> : <PasswordHide />}
                  </div>
                </div>
              </div>
              <div className="edit_profile_content_line"></div>
              <div className="edit_action_btns">
                <button className="main_btn_temp_transparent close_cancel_btn">
                  <p>Close</p>
                  <Close />
                </button>
                <button className="main_btn_temp">
                  <p>Save</p>
                  <Success />
                </button>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
