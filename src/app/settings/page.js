"use client";
import React from "react";
import styles from "./settings.module.css";
import { Menu } from "@/Menu";

const settings = () => {
  return (
    <div>
      <div className={styles.homedefault_container}>
        <div className={styles.homedefault_homedefault}>
          <img
            src="logo.png"
            alt="grid0118582"
            className={styles.logo_styles}
          />

          <div className={styles.desktop_6_child}>
            <div className={styles.topbar}>
              <div className={styles.logo}>
                <img
                  src="GPTAnonymous.svg"
                  alt="GPTI1281"
                  className={styles.code_gpt}
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
                    style={{ color: "rgb(136, 156, 231)" }}
                  >
                    <span>Albert</span>
                  </div>
                  <span
                    className={styles.badge}
                    style={{ display: " none" }}
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
                    style={{ display: "none" }}
                    id="gptCount"
                  >
                    <span className={styles.badge_text1}>0</span>
                  </span>
                </a>
              </div>

              <div className={styles.homepage_rectangle783} id="chat-body">
                <div className={styles.flexContainer3}>
                  <span className={styles.homepage_text02}>
                    Settings & Support
                  </span>
                  <button
                    type="submit"
                    className={styles.green_button1}
                    id="saveFonts"
                  >
                    Save
                  </button>
                </div>
                <hr className={styles.line1}></hr>

                <div className={styles.settings_container}>
                  <a
                    id="myAnchor2"
                    href="https://raidatechhelpdesk.atlassian.net/servicedesk/customer/portal/14"
                    target="_blank"
                    className={styles.first}
                  >
                    <img
                      src="helpcircle1281-lrwu.svg"
                      alt="helpcircle1281"
                      className={styles.settings_helpcircle}
                    />
                    <span
                      className={styles.settings_text23}
                      style={{ color: "rgb(136, 156, 231)" }}
                    >
                      Support Portal
                    </span>
                  </a>

                  <div className={styles.second}>
                    <img
                      src="vector1281-5j5.svg"
                      alt="Vector1281"
                      className={styles.settings_vector05}
                    />
                    <img
                      src="vector1281-8ua.svg"
                      alt="Vector1281"
                      className={styles.settings_vector06}
                    />
                    <span className={styles.settings_text19}>
                      Support Email: gusp@raidatechhelpdesk.atlassian.net
                    </span>
                  </div>

                  <a
                    id="myAnchor3"
                    href="http://www.gptanonymous.com/privacy"
                    target="_blank"
                    className={styles.fifth}
                  >
                    <img
                      src="vector1281-afzi.svg"
                      alt="Vector1281"
                      className={styles.settings_vector12}
                    />
                    <span
                      className={styles.settings_text25}
                      style={{ color: "rgb(136, 156, 231)" }}
                    >
                      Terms and Conditions
                    </span>
                  </a>

                  <p style={{ display: "none" }} id="secret-value">
                    Value
                  </p>
                  <div className={styles.sixth}>
                    <img
                      src="settings1109-gp16.svg"
                      className={styles.settings_vector10}
                      alt=" settings1109"
                    />
                    <label className={styles.settings_text27}>
                      Conversation Font-size (min 12px and max 35px):{" "}
                    </label>

                    <div className={styles.settings_fontsize}>
                      <input
                        type="text"
                        className={styles.form_control1}
                        name="fontSize"
                        id="fontSize"
                      />
                    </div>
                  </div>
                  <div className={styles.seventh}>
                    <img
                      src="settings1109-gp16.svg"
                      className={styles.settings_vector11}
                      alt="settings1109"
                    />
                    <label
                      htmlFor="fontStyle"
                      className={styles.settings_text29}
                    >
                      Conversation Font Style:
                    </label>
                    <div className={styles.select_box} id="fontStyle">
                      <div
                        className={styles.options_container}
                        id="options-container"
                      >
                        <div className={styles.option}>
                          <input type="radio" class="radio" value="Arial" />
                          <label>Arial</label>
                        </div>
                        <div class="option">
                          <input
                            type="radio"
                            class="radio"
                            value="Constantia"
                          />
                          <label>Constantia</label>
                        </div>
                        <div class="option">
                          <input type="radio" class="radio" value="Calibri" />
                          <label>Calibri</label>
                        </div>
                        <div class="option">
                          <input type="radio" class="radio" value="Courier" />
                          <label>Courier</label>
                        </div>

                        <div class="option">
                          <input
                            type="radio"
                            class="radio"
                            value="Comic Sans MS"
                          />
                          <label>Comic Sans MS</label>
                        </div>
                        <div class="option">
                          <input type="radio" class="radio" value="Papyrus" />
                          <label>Papyrus</label>
                        </div>
                        <div class="option">
                          <input type="radio" class="radio" value="Bell MT" />
                          <label>Bell MT</label>
                        </div>
                        <div class="option">
                          <input
                            type="radio"
                            class="radio"
                            value="Montserrat"
                          />
                          <label>Montserrat</label>
                        </div>
                        <div class="option">
                          <input
                            type="radio"
                            class="radio"
                            value="Courier New"
                          />
                          <label>Courier New</label>
                        </div>
                        <div class="option">
                          <input type="radio" class="radio" value="Chiller" />
                          <label>Chiller</label>
                        </div>
                      </div>

                      <div class="selected" id="selected">
                        <div class="selectedText">Pick a style</div>
                      </div>
                    </div>
                  </div>
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
        ;
      </div>
    </div>
  );
};

export default settings;
