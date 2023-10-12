import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
function Footer() {
    return (
        <footer className="w-full h-auto bg-[#7971EA]/[.8] dark:bg-[#403c7b] text-center pt-4 text-2xl text-white/[.65]">
        <a href="#" className="mx-2">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" className="mx-2">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" className="mx-2">
          <i className="bi bi-github"></i>
        </a>
        <div className="w-full h-auto bg-[#7971EA]/[.6] mt-2 md:text-base text-sm">© 2023 All Rights Reserved by Kittikorn Voraprateep</div>
    </footer>
    );
}
export default Footer;