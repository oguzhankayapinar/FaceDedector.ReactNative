import * as contant from "../constants";

const setApp = (payload) => ({
  type: contant.SET_APP,
  payload,
});

const setNickName = (payload) => ({
  type: contant.SET_NICKNAME,
  payload,
});

export { setApp, setNickName };
