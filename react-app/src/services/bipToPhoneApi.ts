import qs from "qs";

import config from "../config";
import HTTP from "./http";
import { postConfig } from "./walletApi";

export const getInfo = async () => {
  return await HTTP.get(`${config.apiURL}/phone/getInfo`);
};

export const getKeyword = async (phone: string) => {
  const data = { phone };
  return await HTTP.post(
    `${config.apiURL}/phone/getKeyword`,
    qs.stringify(data),
    postConfig
  );
};
