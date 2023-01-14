import React from "react";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div className="bg-dark text-center p-2">
      <div>Galería de imágenes con diseño responsivo creada con React + Bootstrap</div>
      <Button variant="secondary" href="#header" className="mt-3">
        Ir al inicio
      </Button>
    </div>
  );
}

export default Footer;
