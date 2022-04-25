import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { SocialMediaIconsReact } from "social-media-icons-react";

function Footer() {
  const location = useLocation();
  const [posAbsolute, setPosAbsolute] = useState(false);
  useEffect(() => {
    if (location.pathname !== "/") {
      setPosAbsolute(true);
    } else {
      setPosAbsolute(false);
    }
  });
  return (
    <div className={`footer ${posAbsolute ? "bottom" : ""}`}>
      <section className="icons">
        <SocialMediaIconsReact
          className="icon"
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="twitter"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(0,0,0,1)"
          iconSize="5"
          roundness="50%"
          url="https://some-website.com/my-social-media-url"
          size="30"
        />
        <SocialMediaIconsReact
          className="icon"
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="facebook"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(0,0,0,1)"
          iconSize="5"
          roundness="50%"
          url="https://some-website.com/my-social-media-url"
          size="30"
        />
        <SocialMediaIconsReact
          className="icon"
          borderColor="rgba(0,0,0,0.25)"
          borderWidth="5"
          borderStyle="solid"
          icon="instagram"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(0,0,0,1)"
          iconSize="5"
          roundness="50%"
          url="https://some-website.com/my-social-media-url"
          size="30"
        />
      </section>
      <section className="trademark">
        <span>™2022 Jakari Stratton</span>
      </section>
    </div>
  );
}

export default Footer;
