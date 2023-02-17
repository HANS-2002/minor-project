"use client";
import { React, useState, useEffect } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { initFirebase } from "../firebaseConfig";
import { db } from "@/firebaseConfig";
import {
  collection,
  doc,
  addDoc,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiSearchAlt } from "react-icons/bi";

export default function Navbar() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence);
  const [user, loading] = useAuthState(auth);
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? document.documentElement.getAttribute("data-theme")
      : "emerald"
  );
  useEffect(() => {
    var thm = localStorage.getItem("theme");
    if (thm) setTheme(thm);
    updateTheme();
  }, [theme]);
  function updateTheme() {
    typeof window !== "undefined"
      ? document.documentElement.setAttribute("data-theme", theme)
      : null;
  }

  function handleThemeClick(event) {
    event.preventDefault();
    var tempTheme = theme;
    if (tempTheme === "emerald") tempTheme = "night";
    else tempTheme = "emerald";
    localStorage.setItem("theme", tempTheme);
    setTheme(tempTheme);
    updateTheme();
  }

  function handleLoginClick(event) {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const Query = query(
          collection(db, "users"),
          where("user_id", "==", user.uid)
        );
        getDocs(Query).then((docs) => {
          if (docs.size === 0) {
            addDoc(collection(db, "users"), {
              user_id: user.uid,
              user_name: user.displayName,
              user_email: user.email,
              user_avatar: user.photoURL,
              user_tagline: 'Write a nice tagline!',
              user_passage: 'Write something about yourself here!',
            });
          }
        });
      })
      .catch((error) => {
        console.log({
          "Error Code": error.code,
          "Error Message": error.message,
        });
      });
  }

  function handleLogoutClick() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log("signout unsuccessfull");
      });
  }
  if (loading) {
    return <></>;
  }
  if (user) {
    // console.log(user);
    return (
      <>
        <div className="navbar bg-base-100 drop-shadow-md sticky top-0 z-999 backDropCustom">
          <div className="flex-1 sm:flex-initial">
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">
              Rtrade
            </Link>
          </div>
          <div className="flex-1 justify-center hidden sm:inline-flex">
            <div className="w-1/2 form-control">
              <input
                type="text"
                placeholder="Search Art"
                className="input input-bordered"
              />
            </div>
            <button className="w-12 h-12 ml-3">
              <BiSearchAlt size={"50%"} />
            </button>
          </div>
          <div className="flex-none gap-2 sm:hidden dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <BiSearchAlt size={"50%"} />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64"
            >
              <div className="navbar bg-base-100">
                <div className="flex-1 justify-center ">
                  <div className="form-control w-8/12">
                    <input
                      type="text"
                      placeholder="Search Art"
                      className="input input-bordered"
                    />
                  </div>
                  <button className="w-12 h-12 ml-3">
                    <BiSearchAlt size={"50%"} />
                  </button>
                </div>
              </div>
            </ul>
          </div>
          <div className="flex-none gap-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator" onClick={handleThemeClick}>
                {theme === "night" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(255, 255, 255, 1)" }}
                  >
                    <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(0, 0, 0, 1)" }}
                  >
                    <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
                  </svg>
                )}
              </div>
            </label>
          </div>
          <div className="flex-none gap-2 dropdown dropdown-end dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle flex align-middle justify-center">
              <div className="indicator">
                <img className="btn btn-ghost btn-circle" src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={`/user/${user.uid}`}>Account</Link>
              </li>
              <li>
                <button onClick={handleLogoutClick}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="navbar bg-base-100 drop-shadow-md sticky top-0 z-999 backDropCustom">
        <div className="flex-1 sm:flex-initial">
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            Rtrade
          </Link>
        </div>
        <div className="flex-1 justify-center hidden sm:inline-flex">
          <div className="w-1/2 form-control">
            <input
              type="text"
              placeholder="Search Art"
              className="input input-bordered"
            />
          </div>
          <button className="w-12 h-12 ml-3">
            <BiSearchAlt size={"50%"} />
          </button>
        </div>
        <div className="flex-none gap-2 sm:hidden dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <BiSearchAlt size={"50%"} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64"
          >
            <div className="navbar bg-base-100">
              <div className="flex-1 justify-center ">
                <div className="form-control w-8/12">
                  <input
                    type="text"
                    placeholder="Search Art"
                    className="input input-bordered"
                  />
                </div>
                <button className="w-12 h-12 ml-3">
                  <BiSearchAlt size={"50%"} />
                </button>
              </div>
            </div>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator" onClick={handleThemeClick}>
              {theme === "night" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(255, 255, 255, 1)" }}
                >
                  <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(0, 0, 0, 1)" }}
                >
                  <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
                </svg>
              )}
            </div>
          </label>
        </div>
        <div className="flex-none gap-2">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="indicator" onClick={handleLoginClick}>
              <button>Login</button>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
