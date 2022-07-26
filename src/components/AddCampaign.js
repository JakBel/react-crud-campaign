import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/Context";
import { Link, useHistory } from "react-router-dom";
import { v4 } from "uuid";
import { Form, FormGroup, Input, Label } from "reactstrap";
import classes from "./FormModule.module.css";

const AddCampaign = () => {
    const { addCampaign } = useContext(GlobalContext);
    const history = useHistory();

    const [name, setName] = useState("");
    const [keywords, setKeywords] = useState("");
    const [amount, setAmount] = useState(0);
    const [funds, setFunds] = useState(0);
    const [status, setStatus] = useState("");
    const [town, setTown] = useState("");
    const [radius, setRadius] = useState(0);

    const newNameHandler = (event) => {
        setName(event.target.value);
    };
    const newKeywordHandler = (event) => {
        setKeywords(event.target.value);
    };
    const newAmountHandler = (event) => {
        setAmount(event.target.value);
    };
    const newFundsHandler = (event) => {
        setFunds(event.target.value);
    };
    const newStatusHandler = (event) => {
        setStatus(event.target.value);
    };
    const newTownHandler = (event) => {
        setTown(event.target.value);
    };
    const newRadiusHandler = (event) => {
        setRadius(event.target.value);
    };

    const addCampaignForm = () => {
        const newCampaign = {
            id: v4(),
            name,
            keywords,
            amount,
            funds,
            status,
            town,
            radius,
        };
        addCampaign(newCampaign);
        history.push("/");
    };

    return (
        <Form className={classes.form} onSubmit={addCampaignForm}>
            <FormGroup className={classes.form__group}>
                <Label>Campaign name</Label>
                <Input
                    className={classes.input}
                    type="text"
                    onChange={newNameHandler}
                    placeholder="Enter campaign name"
                />
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Keywords</Label>
                <Input
                    className={classes.input}
                    type="text"
                    onChange={newKeywordHandler}
                    placeholder="Enter keywords"
                />
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Bid amount</Label>
                <Input
                    className={classes.input}
                    type="number"
                    onChange={newAmountHandler}
                    placeholder="Type bid amount"
                />
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Campaign funds</Label>
                <Input
                    className={classes.input}
                    type="number"
                    onChange={newFundsHandler}
                    placeholder="Type campaign funds"
                />
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Status</Label>
                <Input
                    className={classes.input}
                    type="select"
                    onChange={newStatusHandler}
                >
                    <option defaultValue="Choose" selected disabled hidden>
                        Choose
                    </option>
                    <option value="on">on</option>
                    <option value="off">off</option>
                </Input>
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Town</Label>
                <Input
                    className={classes.input}
                    type="select"
                    onChange={newTownHandler}
                >
                    <option defaultValue="Choose" selected disabled hidden>
                        Choose
                    </option>
                    <option>Warszawa</option>
                    <option>Kraków</option>
                    <option>Łódź</option>
                    <option>Wrocław</option>
                    <option>Poznań</option>
                    <option>Gdańsk</option>
                    <option>Szczecin</option>
                    <option>Bydgoszcz</option>
                    <option>Lublin</option>
                    <option>Katowice</option>
                </Input>
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Radius [km]</Label>
                <Input
                    className={classes.input}
                    type="number"
                    onChange={newRadiusHandler}
                    placeholder="Enter radius"
                />
            </FormGroup>
            <FormGroup className={classes.buttons}>
                <button className={classes.button} type="submit">
                    Submit
                </button>
                <Link className={classes.button} to="/">
                    Cancel
                </Link>
            </FormGroup>
        </Form>
    );
};

export default AddCampaign;
