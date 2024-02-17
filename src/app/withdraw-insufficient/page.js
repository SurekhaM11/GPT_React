"use client";
import React from "react";
import { Menu } from "@/Menu";
import styles from "./withdrawinsufficient.module.css";
const withdrawinsufficient = () => {
  const fnHome = () => {
    router.push("/wallet");
  };
  return (
    <div className={styles.homedefault_container}>
      <div className={styles.homedefault_homedefault}>
        <img src="logo.png" alt="grid0118582" className={styles.logo_styles} />

        <div className={styles.desktop_6_child}>
          <div className={styles.topbar}>
            <div className={styles.logo}>
              <img
                src="GPTAnonymous.svg"
                alt="GPTI1281"
                className={styles.codegpt}
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
                  style={{ color: "rgb(136,156,231)" }}
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
                  className={styles.badge1}
                  style={{ display: " none" }}
                  id="gptCount"
                >
                  <span className={styles.badge_text1}>0</span>
                </span>
              </a>
            </div>

            <div className={styles.homepage_rectangle783} id="chat-body">
              <div className={styles.flexContainer1}>
                <span className={styles.homepage_text02}>Wallet</span>
                <div className={styles.raida_status} id="signalWrap">
                  <div className={styles.raida}>RAIDA</div>
                </div>
              </div>
              <hr className={styles.line1}></hr>

              <div className={styles.middle_container2}>
                <div className={styles.form_group1}>
                  <label>Insufficient Funds</label>
                  <img
                    src="rectangle7823922-jsak-200h.png"
                    alt="Rectangle7823922"
                    className={styles.desktop15_rectangle782}
                  />
                </div>

                <div className={styles.desktop15_text11}>
                  <span>
                    You do not have enough coins to withdraw that amount.
                  </span>
                </div>
                <div className={styles.desktop9_btn_div}>
                  <button className={styles.desktop9_button} onClick={fnHome}>
                    Return Home
                  </button>
                </div>
              </div>

              <div className={styles.icons2}>
                <a href="/wallet">
                  <svg
                    className={styles.home_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(186,218,85)"
                    class="bi bi-house"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
                </a>

                <a href="/transactions">
                  <svg
                    className={styles.transactions_icon}
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.9166 3.41675H10.2499C9.34376 3.41675 8.47472 3.77672 7.83397 4.41747C7.19322 5.05822 6.83325 5.92726 6.83325 6.83341V34.1667C6.83325 35.0729 7.19322 35.9419 7.83397 36.5827C8.47472 37.2234 9.34376 37.5834 10.2499 37.5834H30.7499C31.6561 37.5834 32.5251 37.2234 33.1659 36.5827C33.8066 35.9419 34.1666 35.0729 34.1666 34.1667V13.6667L23.9166 3.41675Z"
                      stroke="#A6AAB4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.9167 3.41675V13.6667H34.1667"
                      stroke="#A6AAB4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.3334 22.2083H13.6667"
                      stroke="#A6AAB4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.3334 29.0417H13.6667"
                      stroke="#A6AAB4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.0834 15.375H15.3751H13.6667"
                      stroke="#A6AAB4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a href="/raida-status">
                  <svg
                    className={styles.status_icon}
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#A6AAB4" strokeLinecap="round" strokeWidth="1.5">
                      <path d="m6.87988 18.1501v-2.07" />
                      <path d="m12 18.15v-4.14" />
                      <path d="m17.1201 18.1499v-6.22" />
                      <path d="m17.1199 5.8501-.46.54c-2.55 2.98-5.97 5.09-9.78002 6.04" />
                      <g strokeLinejoin="round">
                        <path d="m14.1899 5.8501h2.93v2.92" />
                        <path d="m9 22h6c5 0 7-2 7-7v-6c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7z" />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <hr className={styles.frame_child}></hr>
          <div className={styles.footer}>
            <span className={styles.footer_text00}>
              @ 2023 RAIDAtech. All rights reserved
            </span>
            <a
              id="myAnchor1"
              href="https://www.gptanonymous.com/privacy"
              target="_blank}
        className={styles.footer_text"
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

export default withdrawinsufficient;
