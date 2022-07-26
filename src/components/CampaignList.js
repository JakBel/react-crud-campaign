import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import classes from "./CampaignList.module.css";

const CampaignList = () => {
    const { campaigns, deleteCampaign } = useContext(GlobalContext);

    return (
        <ListGroup>
            {campaigns.length > 0 ? (
                <>
            {campaigns.map((campaign) => (
                <ListGroupItem className={classes.listGroup} key={campaign.id}>
                    <p>
                        Campaign name: <span className={classes.span}>{campaign.name}</span>
                    </p>
                    <p>
                        Keywords: <span className={classes.span}>{campaign.keywords}</span>
                    </p>
                    <p>
                        Bid amount: <span className={classes.span}>{campaign.amount}</span>
                    </p>
                    <p>
                        Campaign funds: <span className={classes.span}>{campaign.funds}</span>
                    </p>
                    <p>
                        Status: <span className={classes.span}>{campaign.status}</span>
                    </p>
                    <p>
                        Town: <span className={classes.span}>{campaign.town}</span>
                    </p>
                    <p>
                        Radius: <span className={classes.span}>{campaign.radius}</span>
                    </p>
                    <div className={classes.buttons}>
                        <Link className={classes.button} to={`/update/${campaign.id}`}>Update</Link>
                        <Button className={classes.button} onClick={() => deleteCampaign(campaign.id)}>
                            Delete
                        </Button>
                    </div>
                </ListGroupItem>
            ))}
                </>
            ) : (
                <h2 className={classes.noList}>No campaigns</h2>
            )}
        </ListGroup>
    );
};

export default CampaignList;
