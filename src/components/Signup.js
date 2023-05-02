import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleSignupClick(e) {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let username = e.target.username.value;
    // Find an user in the database
    const q = query(collection(db, "users"), where("email", "==", email));
    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.size !== 0) {
        setErrorMessage("Email already in use");
        return;
      } else {
        // Create a new user in the database
        setDoc(doc(db, "users", email), {
          email: email,
          username: username,
          sentiments: [],
        });
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err.code);
            console.log(err.message);
          });
      }
    });
  }

  function validateUsername(user_name) {
    const q = query(
      collection(db, "users"),
      where("username", "==", user_name)
    );
    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.size !== 0) {
        setErrorMessage("Username already in use");
      } else {
        setErrorMessage("");
      }
    });
  }

  function validateEmail(email) {
    const q = query(collection(db, "users"), where("email", "==", email));
    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.size !== 0) {
        setErrorMessage("Email already in use");
      } else {
        setErrorMessage("");
      }
    });
  }

  function validatePassword(pass) {
    if (pass.length < 6)
      setErrorMessage("Password needs to be atleast 6 characters long");
    else setErrorMessage("");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 mainDiv">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
              Sign up to analyze sentiment
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-red-900 text-center"
            >
              {errorMessage}
            </label>
            <form className="space-y-6" onSubmit={handleSignupClick}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-white-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    onChange={(e) => validateUsername(e.target.value)}
                    autoComplete="current-username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => validateEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => {
                      validatePassword(e.target.value);
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-5 text-center text-sm text-white-500">
              Already a user?{" "}
              <Link
                to="/signin"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
