import React, { useState } from "react";

import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

export default function ToggleDarkMode() {
  return (
    <button className="shadow-md md:w-16 md:h-16 w-12 h-12 fixed lg:bottom-16 lg:right-16 md:bottom-10 md:right-10 bottom-7 right-7 z-50 rounded-full bg-customFrblack text-white md:text-3xl text-2xl flex justify-center items-center">
        <FaMoon />
    </button>
  )
}
