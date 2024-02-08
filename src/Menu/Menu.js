"use client";
import React from "react";
import menuItems from "./configuration.json";
import { useRouter } from "next/navigation";
import styles from "@/Menu/Menu.module.css";
export const Menu = () => {
  const [menuItem, setMenuItem] = React.useState("home");
  const router = useRouter();
  const fnMenuClick = (id, path) => {
    // const { id } = eve?.target;

    setMenuItem(id);
    // fn(id);
    //redirect("/" + path);
    router.push(`${path}`);
  };
  return (
    <div>
      <ul className={styles.menu}>
        {menuItems.map(({ id, item, path }, index) => {
          return (
            <li
              key={index}
              className={`${menuItem === id ? styles.menuActive : ""}`}
              id={id}
              onClick={() => {
                fnMenuClick(id, path);
              }}
            >
              {id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
