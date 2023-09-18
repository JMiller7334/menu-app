import React from "react";

//function imports:
import {foodApi } from "./foodApi";

const repCallFoodApi = {
    //TODO: input check may be handled here instead(JM) - JM
    callApi: (foodName) => foodApi(foodName)
};

export default repCallFoodApi;