import { Link } from "gatsby";
import React from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <>
      <div className="container mx-auto">
        <nav className="flex justify-between py-3 ">
          <div className="uppercase font-bold">logo</div>
          <div className="flex gap-4 items-center">
            <Link to="/">Homepage</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
            <Link to="/gallery/">Gallery</Link>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </>
  );
}
