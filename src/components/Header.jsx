import React from "react";

function Header({ title }) {
  return (
    <div className="bg-dark text-center p-2" id="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
