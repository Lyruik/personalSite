// import

export default function About() {
  const imgUrl = "./img";
  const aboutTopics = [
    {
      title: "About Me",
      description: "Lorem",
      image: `${imgUrl}/motorbike.jpg`,
    },
    {
      title: "Interests",
      description: "Lorem",
      image: `${imgUrl}/tennis.jpg`,
    },
    {
      title: "Ideas",
      description: "Lorem",
      image: `${imgUrl}/voipy.jpg`,
    },
  ];
  return (
    <div className="container" id="aboutContainer">
      {aboutTopics.map((topic, idx) => {
        return (
          //<div >
          <div
            id={`aboutCard${idx}`}
            className="singleAboutCard"
            key={`aboutCard${idx}`}
            onClick={(e) => {
              const container = document.getElementById("aboutContainer");
              container.style.display = "grid";
              console.log(idx);
              for (let key in aboutTopics) {
                console.log(key);
                if (key !== idx.toString()) {
                  const cardToHide = document.getElementById(`aboutCard${key}`);
                  //cardToHide.style.display = "none";
                } else {
                  const cardToDisplay = document.getElementById(
                    `aboutCard${key}`
                  );
                }
              }
            }}
          >
            <img className="aboutImgBox" src={topic.image}></img>
            <div className="singleAboutText">
              <h1>{topic.title}</h1>
              <p>{topic.description}</p>
            </div>
          </div>
          //</div>
        );
      })}
    </div>
  );
}
