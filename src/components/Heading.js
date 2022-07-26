import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarText, NavItem } from "reactstrap";
import classes from "./Heading.module.css";

const Heading = () => {
    return (
        <Navbar className={classes.navigator}>
            <Container className={classes.container}>
                <NavbarText className={classes.title}>My campaigns</NavbarText>
                <Nav>
                    <NavItem>
                        <Link className={classes.link} to="/add">
                            New campaign
                        </Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Heading;
