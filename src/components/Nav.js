import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./Nav.module.css";

const Nav = ({ className = "" }) => {
  return (
    <header className={[styles.nav, className].join(" ")}>
      <div className={styles.contentBackground} />
      <div className={styles.projectZuvWrapper}>
        Project Zuv
      </div>


      <div className={styles.phone}>
      <ul className={styles.menu1}>
            <li className={styles.dropdown1}>
                <a href="#"><img className={styles.bars} src="/bars-solid.svg"></img>
                </a>
                <ul className={styles.dropdownmenu1}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/event"> Exhibition</a></li>
                    <li className={styles.dropdown1}>
                        <a href="#"><img className={styles.caret} src="/caret-left-solid.svg"></img> History & Origin</a>
                        <ul className={styles.dropdownmenu1}>
                        <li><a href="/origin">Origin</a></li>
                        <li><a href="/oldest-site-in-kashmir">Oldest Site</a></li>
                        <li><a href="/kashmir-the-name">History of Name</a></li>
                        </ul>
                    </li>
                    <li className={styles.dropdown1}>
                        <a href="#"><img className={styles.caret} src="/caret-left-solid.svg"></img> Food</a>
                        <ul className={styles.dropdownmenu1}>
                        <li><a href="/food-history">History</a></li>
                        <li><a href="/kashmiri-pandit-cuisine">Kashmiri Pandit Cuisine</a></li>
                        </ul>
                    </li>
                    <li className={styles.dropdown1}>
                        <a href="#"><img className={styles.caret} src="/caret-left-solid.svg"></img> Culture</a>
                        <ul className={styles.dropdownmenu1}>
                        <li><a href="/festival">Festivals</a></li>
                        <li><a href="/music">Music</a></li>
                        </ul>
                    </li>
                    <li><a href="/about-us"> About</a></li>
                </ul>
            </li>
        </ul>
        </div>


      <div className={styles.pageContent}>
        <div className={styles.dropdownMenu}>
        <button class={styles.select}>
          <a href="/">Home</a>
        </button>

        <button class={styles.select}>
          <a href="/event">Exhibition</a>
        </button>
          

          <div class={styles.dropdown}>
            <button class={styles.select}>History & Origin
            <img
              className={styles.systemactionarrowDropDownIcon}
              alt=""
              src="/24systemactionarrow-drop-down.svg"
            />
            </button>
              <div class={styles.content}>
                <div class={styles.items}>
                  <h4 class={styles.dropheading}>History & Origin</h4>
                    <a href="/origin">Origin</a>
                    <a href="/oldest-site-in-kashmir">Oldest Site</a>
                    <a href="/kashmir-the-name">History of Name</a>
                </div>
                <div class={styles.items1}>
                  <img
                        className={styles.dropdish}
                        alt=""
                        src="/dish.png"
                      />
                </div>
              </div>
          </div>

          <div class={styles.dropdown}>
            <button class={styles.select}>Food
            <img
              className={styles.systemactionarrowDropDownIcon}
              alt=""
              src="/24systemactionarrow-drop-down.svg"
            />
            </button>
              <div class={styles.content}>
                <div class={styles.items}>
                  <h4 class={styles.dropheading}>Food</h4>
                    <a href="/food-history">History</a>
                    <a href="/kashmiri-pandit-cuisine">Kashmiri Pandit Cuisine</a>
                </div>
                <div class={styles.items1}>
                  <img
                    className={styles.dropdish}
                    alt=""
                    src="/dish.png"
                  />
                </div>
              </div>
          </div>

          <div class={styles.dropdown}>
            <button class={styles.select}>Culture
            <img
              className={styles.systemactionarrowDropDownIcon}
              alt=""
              src="/24systemactionarrow-drop-down.svg"
            />
            </button>
            <div class={styles.content}>
              <div class={styles.items}>
                <h4 class={styles.dropheading}>Culture</h4>
                  <a href="/festival">Festivals</a>
                  <a href="/music">Music</a>
              </div>
              <div class={styles.items1}>
                <img
                  className={styles.dropdish}
                  alt=""
                  src="/dish.png"
                />
              </div>
              </div>
          </div>

          <button class={styles.select}>
            <a href="/about-us">About</a>
          </button>

          

        </div>
      </div>
      <div className={styles.donationButton}>
        <a className={styles.donateNow}>Donate Now</a>
      </div>

      
    </header>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
