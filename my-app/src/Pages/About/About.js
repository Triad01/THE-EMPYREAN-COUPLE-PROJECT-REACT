import aboutImage from "../../Assets/about_header_img.svg";
import classes from "./About.module.css";
import AboutList from "./AboutList";
import facebookIcon from "../../Assets/facebook.svg";
import instagramIcon from "../../Assets/instagram.svg";
import tiktokIcon from "../../Assets/tiktok.svg";
import youtubeIcon from "../../Assets/youtube.svg";
import threadIcon from "../../Assets/thread.svg";
import linkdinIcon from "../../Assets/linkdin.svg";
import snapchatIcon from "../../Assets/snapchat.svg";
import whatsappIcon from "../../Assets/whatsapp.svg";
import messengerIcon from "../../Assets/messenger.svg";
const About = () => {
  return (
    <div>
      <main>
        <section className={classes.about}>
          <div className={classes.about__header}>
            <img
              className={classes.img}
              src={aboutImage}
              alt="couple display"
            />
            <div className={classes.about__text}>
              <h1>About us</h1>
              <p>
                At Empyrean, we believe that life is a beautiful tapestry woven
                from the threads of shared lifestyle, beliefs, love, and faith.
                Our website is a sanctuary where like-minded individuals can
                come together to celebrate the rich tapestry of life, explore
                their shared values, and forge lasting connections with others
                who share their passions.
              </p>
              <p>
                We recognize that our beliefs are at the heart of who we are.
                The Empyrean provides a platform for open, respectful, and
                enriching discussions on faith, spirituality, and philosophical
                viewpoints. It's a place where differences are respected, and
                understanding is cultivated.
              </p>
              <p>
                Our talented writers and guest contributors explore a wide range
                of topics, from lifestyle choices to faith-based insights,
                relationship advice, and heartwarming stories of love. There's
                something for everyone.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.section__story}>
          <div className={classes.story__text}>
            Our story is made up of our shared lifestyle, beliefs, love & faith.
            Which we seek to share through:
          </div>
        </section>
        <section className={classes.section__mission}>
          <h2>Our Mission</h2>
          <p>
            At Empyrean, we believe that life is a beautiful tapestry woven from
            the threads of shared lifestyle, beliefs, love, and faith. Our
            website is a sanctuary where like-minded individuals can come
            together to celebrate the rich tapestry of life, explore their
            shared values, and forge lasting connections with others who share
            their passions.
          </p>
          <p>
            We recognize that our beliefs are at the heart of who we are. The
            Empyrean provides a platform for open, respectful, and enriching
            discussions on faith, spirituality, and philosophical viewpoints.
            It's a place where differences are respected, and understanding is
            cultivated.
          </p>
          <p>
            Our talented writers and guest contributors explore a wide range of
            topics, from lifestyle choices to faith-based insights, relationship
            advice, and heartwarming stories of love. There's something for
            everyone.
          </p>
        </section>
        <section className={classes.section__vision}>
          <h2>Our Vision</h2>
          <p>
            At Empyrean, we believe that life is a beautiful tapestry woven from
            the threads of shared lifestyle, beliefs, love, and faith. Our
            website is a sanctuary where like-minded individuals can come
            together to celebrate the rich tapestry of life, explore their
            shared values, and forge lasting connections with others who share
            their passions.
          </p>
          <p>
            We recognize that our beliefs are at the heart of who we are. The
            Empyrean provides a platform for open, respectful, and enriching
            discussions on faith, spirituality, and philosophical viewpoints.
            It's a place where differences are respected, and understanding is
            cultivated.
          </p>
          <p>
            Our talented writers and guest contributors explore a wide range of
            topics, from lifestyle choices to faith-based insights, relationship
            advice, and heartwarming stories of love. There's something for
            everyone.
          </p>
        </section>
        <section className={classes.section__services}>
          <h2>How we help</h2>
          <div className={classes.services__wrapper}>
            {/* <p>
              there are several ways we make a positive impact in their lives of
              others.
            </p> */}
            <AboutList />
          </div>
        </section>
        <section className={classes.section__channels}>
          <h3>Our Channels</h3>
          <div className={classes.channel__icons}>
            <img src={facebookIcon} alt="icon" />
            <img src={instagramIcon} alt="icon" />
            <img src={tiktokIcon} alt="icon" />
            <img src={youtubeIcon} alt="icon" />
            <img src={threadIcon} alt="icon" />
            <img src={linkdinIcon} alt="icon" />
            <img src={snapchatIcon} alt="icon" />
            <img src={whatsappIcon} alt="icon" />
            <img src={messengerIcon} alt="icon" />
          </div>
        </section>
      </main>
    </div>
  );
};
export default About;
