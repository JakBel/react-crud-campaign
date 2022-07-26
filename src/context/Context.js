import React, { createContext, useReducer } from "react";

const initialState = {
    campaigns: [],
};

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "DELETE_CAMPAIGN":
            return {
                campaigns: state.campaigns.filter((campaign) => {
                    return campaign.id !== action.payload;
                }),
            };
        case "ADD_CAMPAIGN":
            return {
                campaigns: [action.payload, ...state.campaigns],
            };
        case "UPDATE_CAMPAIGN":
            const updatedCampaign = action.payload;
            const updateCampaign = state.campaigns.map((campaign) => {
                if (campaign.id === updatedCampaign.id) {
                    return updatedCampaign;
                }
                return campaign;
            });

            return {
                campaigns: updateCampaign,
            };
        default:
            return state;
    }
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [reducerState, dispatch] = useReducer(reducerFunction, initialState);

    const deleteCampaign = (id) => {
        dispatch({
            type: "DELETE_CAMPAIGN",
            payload: id,
        });
    };

    const addCampaign = (campaign) => {
        dispatch({
            type: "ADD_CAMPAIGN",
            payload: campaign,
        });
    };

    const updateCampaign = (campaign) => {
        dispatch({
            type: "UPDATE_CAMPAIGN",
            payload: campaign,
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                campaigns: reducerState.campaigns,
                deleteCampaign,
                addCampaign,
                updateCampaign,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
