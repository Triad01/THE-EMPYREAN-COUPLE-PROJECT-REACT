import FeaturedList from "../../Components/Products/FeaturedList";
import classes from "./Main.module.css";
import searchIcon from "../../Assets/search-icon.png";
import CustomizedList from "../../Components/Products/CustomizeableList";
const Main = () => {
  return (
    <main>
      <section className={classes.featured__products}>
        <h2>Featured products</h2>
        <article>
          <div className={classes.filter}>
            <div className={classes.select__styled}>
              <select>
                <option value="1">clothe1</option>
                <option value="2">clothe2</option>
              </select>
            </div>

            <input type="search" placeholder="search" />
            <div className={classes.search}>
              <img
                className={classes.searchIcon}
                src={searchIcon}
                alt="search icon"
              />
            </div>
          </div>
          <FeaturedList />
        </article>
      </section>
      <section className={classes.customized__products}>
        <h2>Fully Customizeable Wears</h2>
        <article>
          <CustomizedList />
        </article>
      </section>
    </main>
  );
};

export default Main;
