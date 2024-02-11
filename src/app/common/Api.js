"use client";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export class Api {
  static getBalance(url) {
    console.log("get balance called from api");
    return axios.get(BASE_URL + url);
  }

  static fnSendGetReq(url) {
    return axios.get(BASE_URL + url);
  }
  static fnSendPostReq(url, data) {
    return axios.post(BASE_URL + url, data);
  }
  static fnSendPuttReq(url) {
    return axios.put(BASE_URL + url);
  }
  static fnsendDeleteReq(url) {
    return axios.delete(BASE_URL + url);
  }
}
