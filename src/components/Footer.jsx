import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closehour = 22;
  const isOpen = hour >= openHour && hour < closehour;
  return (
    <footer className="footer">
      We are Currently Open Visit Us or Order Online
    </footer>
  );
};

export default Footer;
