//import

import { Link } from "react-router-dom";

export default function Footer() {
  const contactInfo = [
    {
      method: "Phone",
      entry: "801-598-6080",
    },
    {
      method: "Email",
      entry: "mwadsworthdev@gmail.com",
    },
    {
      method: "LinkedIn",
      entry: "https://www.linkedin.com/in/michael-wadsworth-dev",
    },
  ];
  return (
    <footer>
      <div className="footerBox">
        <div className="contactInfoBox">
          Contact me:
          <br />
          {contactInfo.map((item, idx) => {
            if (item.method === "LinkedIn") {
              return (
                <p key={`infoItem${idx}`}>
                  {item.method}:{" "}
                  <Link to={item.entry} target="_blank">
                    {item.entry}
                  </Link>
                </p>
              );
            }
            return (
              <p key={`infoItem${idx}`}>
                {item.method}: {item.entry}
              </p>
            );
          })}
        </div>
        <div className="footerQuoteBox">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            sit tempore enim laborum quasi ad beatae perspiciatis at illo, harum
            asperiores obcaecati aut nemo magni sequi cumque sed provident
            aliquam.
          </p>
        </div>
      </div>
    </footer>
  );
}
