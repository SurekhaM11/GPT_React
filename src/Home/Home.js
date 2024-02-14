"use client";
import React, { useEffect, useState } from "react";
import styles from "@/Home/Home.module.css";
import Link from "next/link";
import { Menu } from "@/Menu";
import { Api } from "@/app/common/Api";
import { useDispatch } from "react-redux";
export const Home = () => {
  const [balance, setBalance] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    fnBalance();
  }, [balance]);
  const fnBalance = async () => {
    try {
      console.log("fn balance called ");
      const result = await Api.getBalance("/wallets");
      var data = await result.data;
      console.log("result", data.payload[0].balance);
      setBalance(data.payload[0].balance);
      localStorage.setItem("wallet_balance", data.payload[0].balance);
      dispatch({
        type: "BAL_UPDATE",
        payload: balance,
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className={styles.homedefault_container}>
      <div className={styles.homedefault_homedefault}>
        <img
          className={styles.logo_styles}
          src="logo.png"
          alt="backgroung_img"
        />

        <div className={styles.desktop_6_child}>
          <div className={styles.topbar}>
            <div className={styles.logo}>
              <img
                className={styles.codegpt}
                src="GPTAnonymous.svg"
                alt="logo"
              />
              <span className={styles.logo_text}>GPT Anonymous</span>
            </div>
            <Menu />
          </div>

          <div className={styles.mid_section}>
            <div id="left-panel" className={styles.left_content}>
              <div className={styles.head}>
                <span className={styles.text_ai}>A.I. Chat</span>
              </div>
              <hr className={styles.line}></hr>

              <a href="home.html" className={styles.link1}>
                <div
                  className={styles.homepage_text54}
                  style={{ color: "rgb(186,218,85)" }}
                >
                  <span>Albert</span>
                </div>
                <span
                  className={styles.badge}
                  style={{ display: "none" }}
                  id="bingCount"
                >
                  <span className={styles.badge_text}>0</span>
                </span>
              </a>

              <a href="uncensored.html" className={styles.link2}>
                <div
                  className={styles.homepage_text57}
                  style={{ color: "rgb(136,156,231)" }}
                >
                  <span>Bella</span>
                </div>
                <span
                  className={styles.badge}
                  style={{ display: "none" }}
                  id="gptCount"
                >
                  <span className={styles.badge_text}>0</span>
                </span>
              </a>
            </div>

            <div className={styles.homepage_rectangle783} id="chat-body">
              <div className={styles.flexContainer}>
                <span className={styles.homepage_text02}>
                  Albert: Anonymous A.I Chat
                </span>
                <button type="button" className={styles.newconversation}>
                  New Conversation
                </button>
              </div>
              <hr className={styles.line1}></hr>

              <div className={styles.custom_scrollbar} id="messageTable">
                <table
                  className={styles.m_table}
                  style={{ borderSpacing: "30px" }}
                >
                  <tbody></tbody>
                </table>
              </div>

              {/* <div className={styles.homepage_rectangle791}>
                <input
                  className={styles.message}
                  type="text"
                  name="message"
                  id="message"
                />
                <div className={styles.homepage_rectangle788} id="send-btn">
                  <img
                    src="arrowup1538-08h.svg"
                    alt="arrowup1538"
                    className={styles.arrowup}
                  />
                </div>
              </div> */}
            </div>
          </div>

          <hr className={styles.frame_child}></hr>
          <div className={styles.footer}>
            <span className={styles.footer_text00}>
              @ 2023 RAIDAtech. All rights reserved
            </span>
            <a
              id="myAnchor1"
              href="http://www.gptanonymous.com/privacy"
              target="_blank"
              className={styles.footer_text}
            >
              <span>Privacy Policy</span>&nbsp;&nbsp;
              <span>Terms and Services</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
