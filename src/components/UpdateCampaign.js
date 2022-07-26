import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/Context";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import classes from "./FormModule.module.css";

const UpdateCampaign = (props) => {
    const { updateCampaign, campaigns } = useContext(GlobalContext);
    const history = useHistory();
    const currentId = props.match.params.id;

    const [newData, setNewData] = useState({
        id: "",
        name: "",
        keywords: "",
        amount: 0,
        funds: 0,
        status: "",
        town: "",
        radius: 0,
    });

    useEffect(() => {
        const campaignId = currentId;
        const selectedCampaign = campaigns.find(
            (campaign) => campaign.id === campaignId
        );
        setNewData(selectedCampaign);
    }, [currentId, campaigns]);

    const newDataHandler = (event) => {
        setNewData({ ...newData, [event.target.name]: event.target.value });
    };

    const updateCampaignForm = () => {
        updateCampaign(newData);
        history.push("/");
    };

    return (
        <Form className={classes.form} onSubmit={updateCampaignForm}>
            <FormGroup className={classes.form__group}>
                <Label>Campaign name</Label>
                <Input
                    className={classes.input}
                    name="name"
                    value={newData.name}
                    type="text"
                    onChange={newDataHandler}
                    placeholder="Enter campaign name"
                />
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Keywords</Label>
                <Input
                    className={classes.input}
                    name="keywords"
                    type="text"
                    value={newData.keywords}
                    onChange={newDataHandler}
                    placeholder="Enter keywords"
                />
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Bid amount</Label>
                <Input
                    className={classes.input}
                    name="amount"
                    type="number"
                    value={newData.amount}
                    onChange={newDataHandler}
                    placeholder="Type bid amount"
                />
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Campaign funds</Label>
                <Input
                    className={classes.input}
                    name="funds"
                    type="number"
                    value={newData.funds}
                    onChange={newDataHandler}
                    placeholder="Type campaign funds"
                />
            </FormGroup>
            <FormGroup className={classes.form__group}>
                <Label>Status</Label>
                <Input
                    className={classes.input}
                    name="status"
                    value={newData.status}
                    type="select"
                    onChange={newDataHandler}
                >
                    <option defaultValue="Choose" disabled hidden>
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
                    name="town"
                    value={newData.town}
                    type="select"
                    onChange={newDataHandler}
                >
                    <option defaultValue="Choose" disabled hidden>
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
                    name="radius"
                    type="number"
                    value={newData.radius}
                    onChange={newDataHandler}
                    placeholder="Enter radius"
                />
            </FormGroup>
            <FormGroup className={classes.buttons}>
                <Button className={classes.button} type="submit">
                    Submit
                </Button>
                <Link className={classes.button} to="/">
                    Cancel
                </Link>
            </FormGroup>
        </Form>
    );
};

export default UpdateCampaign;
