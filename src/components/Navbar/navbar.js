import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Navbar() {
  const [user, loading] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? document.documentElement.getAttribute("data-theme")
      : "valentine"
  );

  useEffect(() => {
    var thm = localStorage.getItem("theme");
    if (thm) setTheme(thm);
    updateTheme();
  }, [theme]);

  useEffect(() => {
    if (loading || !user) {
      return;
    }
    const q = query(collection(db, "users"), where("email", "==", user.email));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setUserDetails(data);
      });
    });
  }, [loading, user]);

  function handleLogoutClick() {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function updateTheme() {
    if (typeof window !== "undefined")
      document.documentElement.setAttribute("data-theme", theme);
  }

  function handleThemeClick(event) {
    event.preventDefault();
    var tempTheme = theme;
    if (tempTheme === "valentine") tempTheme = "forest";
    else tempTheme = "valentine";
    localStorage.setItem("theme", tempTheme);
    setTheme(tempTheme);
    updateTheme();
  }

  return (
    <>
      {loading ? (
        <></>
      ) : !user ? (
        <nav className="flex items-center justify-between flex-wrap text-white bg-blue-500 p-2">
          <div className="flex items-center flex-shrink-0 mr-6 ml-2">
            <span className="font-semibold text-xl tracking-tight">
              Sentiment Analysis
            </span>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <a
              className="btn btn-ghost"
              href="https://github.com/HANS-2002/minor-project"
              target="_blank"
              rel="noreferrer"
              content="noopener noreferrer"
            >
              DOCS
            </a>
            <label tabIndex={1} className="btn btn-ghost btn-circle">
              <div
                className="indicator flex justify-center"
                onClick={handleThemeClick}
              >
                {theme === "forest" ? (
                  <img
                    src={require("./bulb.png")}
                    height={"75%"}
                    width={"75%"}
                    alt="bulb"
                  />
                ) : (
                  <img
                    src={require("./moon.png")}
                    height={"75%"}
                    width={"75%"}
                    alt="moon"
                  />
                )}
              </div>
            </label>
          </div>
        </nav>
      ) : (
        <nav className="flex items-center justify-between flex-wrap text-white bg-blue-500 p-2">
          <div className="flex items-center flex-shrink-0 mr-6 ml-2">
            <span className="font-semibold text-xl tracking-tight">
              Sentiment Analysis
            </span>
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <a
              className="btn btn-ghost"
              href="https://github.com/HANS-2002/minor-project"
              target="_blank"
              rel="noreferrer"
              content="noopener noreferrer"
            >
              DOCS
            </a>
            <div className="flex-none gap-2 dropdown dropdown-end dropdown-hover">
              <button
                className="btn btn-ghost mr-2"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
            <label tabIndex={1} className="btn btn-ghost btn-circle">
              <div
                className="indicator flex justify-center"
                onClick={handleThemeClick}
              >
                {theme === "forest" ? (
                  <img
                    src={require("./bulb.png")}
                    height={"75%"}
                    width={"75%"}
                    alt="bulb"
                  />
                ) : (
                  <img
                    src={require("./moon.png")}
                    height={"75%"}
                    width={"75%"}
                    alt="moon"
                  />
                )}
              </div>
            </label>
          </div>
        </nav>
      )}
    </>
  );
}
