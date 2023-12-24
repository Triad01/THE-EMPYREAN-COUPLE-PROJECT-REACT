import ListItem from "./ListItem";
import classes from "./AboutList.module.css";
import AboutImage from "../../Assets/about-service-img.svg";

const items = [
  {
    id: 1,
    image: AboutImage,
    heading: "Provide Supportive Listening",
    paragraph:
      "Sometimes, couples just need someone to listen to their concerns and challenges.",
  },
  {
    id: 2,
    image: AboutImage,
    heading: "Offer Advice and Guidance",
    paragraph:
      "Sometimes, couples just need someone to listen to their concerns and challenges.",
  },
  {
    id: 3,
    image: AboutImage,
    heading: "Organize Couples' Activities",
    paragraph:
      "Sometimes, couples just need someone to listen to their concerns and challenges.",
  },
  {
    id: 4,
    image: AboutImage,
    heading: "Celebrate Milestones",
    paragraph:
      "Sometimes, couples just need someone to listen to their concerns and challenges.",
  },
  {
    id: 5,
    image: AboutImage,
    heading: "Encourage Self-Care",
    paragraph:
      "Sometimes, couples just need someone to listen to their concerns and challenges.",
  },
];

const AboutList = () => {
  return (
    <ul className={classes.list}>
      <p className={classes.p_list} key={10}>
        there are several ways we make a positive impact in the lives of others.
      </p>
      {items.map((item) => {
        return (
          <ListItem
            img={item.image}
            h_text={item.heading}
            p_text={item.paragraph}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};
export default AboutList;
