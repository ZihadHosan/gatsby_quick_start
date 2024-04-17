import React from "react";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <>
      <div className="container text-center">
        <p className="border-t border-slate-400 dark:border-slate-700 pt-5">
          &copy; Gatsby Quick Start{" "}
          <Link to="https://zihadhosan.dev/" target="_blank">
            zihadhosan.dev
          </Link>
        </p>
      </div>
    </>
  );
}
