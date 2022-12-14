// const BASE_URL = "https://indie-foods.centralindia.cloudapp.azure.com/api/v1";
const BASE_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:8000/api/v1";
const AUTH_URL = `${BASE_URL}/auth`;
const USER_URL = `${BASE_URL}/user`;
const CHEF_URL = `${BASE_URL}/chef`;
const MENU_ITEMS_URL = `${BASE_URL}/menuItems`;
const ORDER_URL = `${BASE_URL}/order`;

export const SIGNUP_USER_URL = `${AUTH_URL}/signupUser`;
export const SIGNUP_CHEF_URL = `${AUTH_URL}/signupChef`;
export const GET_USER_URL = `${AUTH_URL}/getUserDetails`;
export const FETCH_ALL_CHEFS_URL = `${CHEF_URL}/`;
export const FETCH_CHEF_ALL_ORDERS = `${ORDER_URL}/getPaidOrdersOfAChef`;
export const UPDATE_ADDRESS_URL = `${USER_URL}/updateAddress`;
export const UPDATE_MENU_ITEM_URL = `${CHEF_URL}/menuItems/`;
export const UPDATE_PROFILE_PICTURE_URL = `${CHEF_URL}/updateProfilePicture`;
export const UPDATE_PROFILE_DATA_URL = `${CHEF_URL}/updateProfileData`;
export const SET_SIGN_CONTRACT_SUCCESS_URL = `${CHEF_URL}/setSignedContractSuccess`;
export const FETCH_MENU_ITEMS_URL = `${MENU_ITEMS_URL}/`;
export const INITIALIZE_ORDER_URL = `${ORDER_URL}/initializeOrder`;
export const VERIFY_ORDER_URL = `${ORDER_URL}/verifyOrder`;
export const GET_USER_ORDERS = `${ORDER_URL}/getOrdersOfAUser`;
