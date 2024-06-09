import React, { useEffect, useState } from "react";
import "./top-contributos-list.css";
import { useDispatch, useSelector } from "react-redux";
import { mainApi } from "../utils/main-api";
import { getAllUsersAction } from "../../redux/users-reducer";

import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

import ContributorCard from "../contributor-card/contributor-card";
function TopContributorsList() {
  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState(allUsers);
  const getUsers = () => {
    mainApi.getAllUsers().then((users) => {
      dispatch(getAllUsersAction(users));
      setUsersList(users);
      console.log(users);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <section className="top_contributors container">
      <div className="top_contributors_title">
        <h2>Top contributors</h2>
        <NavLink to="/top-contributors">
          <div className="main_btn_temp">
            <p>See all</p>
            <ArrowRight />
          </div>
        </NavLink>
      </div>
      <div className="top_contributors_list">
        {usersList
          .reverse()
          .slice(0, 15)
          .map((data, index) => (
            <ContributorCard data={data} number={index}/>
          ))}
      </div>
    </section>
  );
}

export default TopContributorsList;
