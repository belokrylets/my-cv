import React from "react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content container">
        <div className="block-Right">
          <div className="Right-name">Created By Sergey Belokrylets</div>
          <div className="right">2022 All Right Reserved.</div>
        </div>
        <div className="social">
          {/* <a href="https://instagram.com/belokrylets" target="_blank" rel="noopener noreferrer">
            <i>
              <Icon icon="ant-design:instagram-filled" width="30" height="30" />
            </i>
          </a> */}
          <a
            href="https://t.me/belokrylets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <Icon icon="file-icons:telegram" width="28" height="28" />
            </i>
          </a>
          <a
            href="https://vk.com/belokrylec"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>
              <Icon icon="fa:vk" width="35" height="35" />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};
