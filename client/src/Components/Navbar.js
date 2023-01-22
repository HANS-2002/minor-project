import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

{/* <Link to={`/achievements`}><input type="button" value="Achievements" /></Link> */}

export default function Navbar() {
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme'));

    function updateTheme() {
        document.documentElement.setAttribute('data-theme', theme);
    }

    function handleThemeClick(event) {
        event.preventDefault();
        var tempTheme = theme;
        if (tempTheme === 'cupcake')
            tempTheme = 'forest';
        else
            tempTheme = 'cupcake';
        localStorage.setItem('theme', tempTheme);
        setTheme(tempTheme);
        updateTheme();
    }

    useEffect(() => {
        var thm = localStorage.getItem('theme');
        if (thm)
            setTheme(thm);
        updateTheme();
    }, [theme]);


    return (
        <>
            <div className="navbar bg-base-100 drop-shadow-md sticky top-0 z-5 backDropCustom">
                <div className="flex-1 sm:flex-initial">
                    <a className="btn btn-ghost normal-case text-xl" href="/">Rtrade</a>
                </div>
                <div className="flex-1 justify-center hidden sm:inline-flex">
                    <div className="w-1/2 form-control">
                        <input type="text" placeholder="Search Art" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator" onClick={handleThemeClick}>
                            {
                                (theme === "forest") ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(255, 255, 255, 1)" }}>
                                        <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">
                                        </path>
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(0, 0, 0, 1)" }}>
                                        <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z">
                                        </path>
                                    </svg>
                            }
                        </div>
                    </label>
                    <div className="drop-shadow dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/100/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.107.107 1.107H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt="dp" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between" href="/">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href="/">Settings</a></li>
                            <li><a href="/">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar bg-base-100 sm:hidden">
                <div className="flex-1 justify-center ">
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                </div>
            </div>
        </>
    );
} 