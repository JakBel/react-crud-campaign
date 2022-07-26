import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavItem } from "reactstrap";
import classes from "./Heading.module.css";

const Heading = () => {
    return (
        <Navbar className={classes.navigator}>
            <Container className={classes.container}>
                <h1 className={classes.title}>My campaigns</h1>
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
