//import

import { Link } from "react-router-dom";

export default function Header() {
  const tabs = [
    "Home",
    "About",
    "Resume",
    //"Services",
    //"Skills",
    "Projects",
    "GitHub",
    "YouTube",
    //"Contact",
  ];
  return (
    <header className="headerBar">
      <h1>
        Mike Wadsworth
        <span style={{ fontSize: "12px", marginLeft: "2cm" }}>
          Web Developer
        </span>
      </h1>
      <div className="headerLinks">
        {tabs.map((tab, idx) => {
          console.log(typeof tab);
          return (
            <Link key={`link${idx}`} className="links" to={tab.toLowerCase()}>
              {tab}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
