import React from "react";
import UserAvatar from "../../assets/images/userAvatar.jpg";
import us from "./Users.module.css";
import { NavLink } from "react-router-dom";


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={us.container}>
      <div className={us.countNumbers}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && us.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={us.photo_ava}
                  src={u.photos.small != null ? u.photos.small : UserAvatar}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={us.btn}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  {" "}
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={us.btn}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>
              <h1>{u.name}</h1>
            </div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.city"}</div>
            <div>{"u.location.country"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
