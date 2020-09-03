import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
//COLLECTIONS ACCEPS AN ARRAY OF STRINGS 
const FiltersNav = ({ collections }) => {
  return (
    <Nav className="justify-content-between m-0 p-0" defaultActiveKey="Tracks">
      {
        // takes an array of strings and creates Navlinks based on values !
        collections.map((e, i) => {
          return (
            <Nav.Item key={i}>
              <Nav.Link eventKey={e}>{e}</Nav.Link>
            </Nav.Item>
          );
        })
      }
    </Nav>
  );
};

export default FiltersNav;
