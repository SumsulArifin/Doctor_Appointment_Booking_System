import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navber = () => {
    const naviget = useNavigate();
    const [showmenu, setshowmwnu] = useState(false);
    const [token, setToken] = useState(true);
    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
            <img className="w-44 cursor-pointer" src={assets.logo} alt="" />
            <ul className="hidden md:flex items-strat gap-5 font-medium">
                <NavLink to={"/"}>
                    <li className="py-1">Home</li>
                    <hr className="border-none outline h-0.2  bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to={"/doctor"}>
                    <li className="py-1">All Doctor</li>
                    <hr className="border-none outline h-0.2 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to={"/contact"}>
                    <li className="py-1">Contact</li>
                    <hr className="border-none outline h-0.2 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to={"/about"}>
                    <li className="py-1">About</li>
                    <hr className="border-none outline h-0.2 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {token ? (
                    <div className="relative flex items-center gap-2 cursor-pointer group">
                        <img
                            className="w-8 rounded-full"
                            src={assets.profile_pic}
                            alt="Profile"
                        />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

                        <div className="absolute top-0 right-0 pt-14 rounded-md text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div>
                                <p onClick={() => { naviget("/my_profile") }} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={() => { naviget("/appointment   ") }} className="hover:text-black cursor-pointer">Appointment</p>
                                <p className="hover:text-black cursor-pointer">Setting</p>
                                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">LogOut</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    // <div className=" flex items-center gap-2 cursor-pointer group-relative">
                    //     <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
                    //     <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                    //     <div className="absolute top-0 right-0 pt-4 px-4 bg-white shadow-lg rounded-md text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                    //         <p>My Profile</p>
                    //         <p>Appoinment</p>
                    //         <p>Setting</p>
                    //     </div>
                    // </div>
                    <button
                        onClick={() => naviget("/login")}
                        className="bg-primary text-white px-8 py-3 rounded-full font -light hidden md:block"
                    >
                        Create Account
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navber;
