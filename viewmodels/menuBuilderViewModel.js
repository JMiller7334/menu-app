import { useState, useEffect } from "react"; 

//function import:
import repositoryFoodApi from "../repositories/foodRepository";


/**VIEW MODEL CLASS FOR MENU BUILDER SCREEN :
 * 
 */
const MenuBuilderViewModel = {
    //TODO: useState for livedata; implement this (Jacob) - JM
    //test call:
    callApi: () => repositoryFoodApi.callApi('rice')
};

export default MenuBuilderViewModel;
