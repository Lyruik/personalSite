// import

export default function About() {
  const imgUrl = "../../../public/img";
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
      {aboutTopics.map((topic) => {
        return (
          <div>
            <div className="singleAboutCard">
              <img className="aboutImgBox" src={topic.image}></img>
              <div className="singleAboutText">
                <h1>{topic.title}</h1>
                <p>{topic.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
