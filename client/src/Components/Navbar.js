import { React, useState, useEffect } from 'react';
import themes from './theme.json';

export default function Navbar() {
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme'));

    function updateTheme() {
        document.documentElement.setAttribute('data-theme', theme);
    }

    function handleThemeClick(event) {
        event.preventDefault();
        localStorage.setItem('theme', event.target.name);
        setTheme(event.target.name);
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
            <div className="navbar bg-base-100">
                <div className="flex-1 sm:flex-initial">
                    <a className="btn btn-ghost normal-case text-xl" href="/">Rtrade</a>
                </div>
                <div className="flex-1 justify-center hidden sm:inline-flex">
                    <div className="w-1/2 form-control">
                        <input type="text" placeholder="Search Art" className="input input-bordered" />
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <img alt="theme" src={themes[theme]} />
                            </div>
                        </label>
                        <div tabIndex={0} className="drop-shadow mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <button name="light" className="font-bold text-lg hover:bg-accent rounded" onClick={handleThemeClick}>Light</button>
                                <button name="dark" className="font-bold text-lg hover:bg-accent rounded" onClick={handleThemeClick}>Dark</button>
                                <button name="cupcake" className="font-bold text-lg hover:bg-accent rounded" onClick={handleThemeClick}>Cupcake</button>
                                <button name="synthwave" className="font-bold text-lg hover:bg-accent rounded" onClick={handleThemeClick}>Synthwave</button>
                                <button name="halloween" className="font-bold text-lg hover:bg-accent rounded" onClick={handleThemeClick}>Halloween</button>
                                <button name="forest" className="font-bold text-lg hover:bg-accent rounded" onClick={handleThemeClick}>Forest</button>
                                <button name="night" className="font-bold text-lg hover:bg-accent rounded" onClick={handleThemeClick}>Night</button>
                                <button name="coffee" className="font-bold text-lg hover:bg-accent rounded" onClick={handleThemeClick}>Coffee</button>
                            </div>
                        </div>
                    </div>
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
            <div className="navbar bg-base-100">
                <div className="flex-1 justify-center sm:hidden">
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                </div>
            </div>
        </>
    );
} 