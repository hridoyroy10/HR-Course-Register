"use client";

import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button, SearchBar } from "keep-react";

const Navbars = () => {
  return (
    <div>
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>

            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="About" />
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Navbar.Link linkName="Home" />
                <Navbar.Link linkName="Projects" />
                <Navbar.Link linkName="Blogs" />
                <Navbar.Link linkName="News" />
                <Navbar.Link linkName="Resources" />
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">

            <SearchBar placeholder="Search Anything"
            bordered={false}
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"></SearchBar>
            <Button size="md" type="outlineGray">
              Contact
            </Button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
