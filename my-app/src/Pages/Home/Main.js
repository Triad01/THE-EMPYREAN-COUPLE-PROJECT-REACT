import classes from "./Main.module.css";
// import video1 from "../../Assets/video1.svg";
// import video2 from "../../Assets/video2.svg";
// import video3 from "../../Assets/video3.svg";
import Button from "../../Components/UI/Button";
import ProductList from "../../Components/Products/ProductList";
import Author from "../../Assets/story-author.svg";
import { ReactComponent as RightArrowKey } from "../../Assets/right-arrow-key.svg";
import { ReactComponent as LeftArrowKey } from "../../Assets/left-arrow-key.svg";
import ContactForm from "../../Components/UI/ContactForm";
import NewsLetterForm from "../../Components/UI/NewsLetterForm";
import Carousel from "../../Components/UI/Carousel";
import slides from "../../data/CarouselData.json";

const Main = () => {
  return (
    <main className={classes.main}>
      <section className={classes.section1}>
        <h2>Most Watched Episodes</h2>
        <div className={classes.video__container}>
          <Carousel data={slides} />
        </div>
        <Button className={classes.btn} text="watch more" />
      </section>
      <section className={classes.section__products}>
        <h2>Our Products</h2>
        <ProductList />
      </section>
      <section className={classes.section__testimonials}>
        <div className={classes.testimonial__container}>
          <h2>Testimonials</h2>
          <div className={classes.testimonial__wrapper}>
            <div className={classes.box1}>
              <h3>What people say about our amazing platform.</h3>
              <p>
                Over 1000+ Purchases, 100 Videos watched, 3000 Subscribers And
                50 Stories shared
              </p>
              <div className={classes.readStory}>Read the success stories</div>
            </div>
            <div className={classes.box2}>
              <img
                className={classes.storyImage}
                src={Author}
                alt="author's pics"
              ></img>
              <div className={classes.story}>
                <div className={classes.commentBox}>
                  <p className={classes.comment}>
                    Using this platform has inspired my faith, built my
                    spirituality and changed my love life. It was indeed the
                    best decision I made this year
                  </p>
                  <div className={classes.author__details}>
                    <div>
                      <div className={classes.name}>Zoe Brendan</div>
                      <div className={classes.country}>Croatia</div>
                    </div>
                    <div className={classes.storyRatings}>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.nextIcons}>
            <LeftArrowKey className={classes.leftArrow} />
            <RightArrowKey />
          </div>
        </div>
      </section>
      <section className={classes.section__contact}>
        <h3>
          Share Your Amazing <br />
          <span className={classes.couple}>Couple</span> Journey With Us.
          <span className={classes.memoir}> Memoirs</span> Can Inspire Others.
        </h3>
        <ContactForm />
      </section>
      <section className={classes.section__newsLetter}>
        <h3>Subscribe To Our News letter</h3>
        <NewsLetterForm />
      </section>
    </main>
  );
};

export default Main;
