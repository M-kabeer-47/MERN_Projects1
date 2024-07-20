
import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';


export default function FilterDiv() {
  const [sort, updateSort] = useState("price low to high");

  return (
    <div className="filterDiv">
        <h2>HELO</h2>
      {/* <CDropdown dark as="li" variant="nav-item">
          <CDropdownToggle color="dark">Dropdown</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown> */}
    </div>
  );
}
