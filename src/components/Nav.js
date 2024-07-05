import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./Nav.module.css";

const Nav = ({ className = "" }) => {
  return (
    <header className={[styles.nav, className].join(" ")}>
      <div className={styles.contentBackground} />
      <div className={styles.projectZuvWrapper}>
        <img
          className={styles.projectZuvIcon}
          loading="lazy"
          alt=""
          src="/project-zuv.svg"
        />
      </div>
      <div className={styles.pageContent}>
        <div className={styles.dropdownMenu}>
        <button class={styles.select}>Home
        </button>

          <div class={styles.dropdown}>
            <button class={styles.select}>Exhibition
            <img
              className={styles.systemactionarrowDropDownIcon}
              alt=""
              src="/24systemactionarrow-drop-down.svg"
            />
            </button>
              <div class={styles.content}>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
              </div>
          </div>

          <div class={styles.dropdown}>
            <button class={styles.select}>History&Origin
            <img
              className={styles.systemactionarrowDropDownIcon}
              alt=""
              src="/24systemactionarrow-drop-down.svg"
            />
            </button>
              <div class={styles.content}>
              <h4 class={styles.dropheading}>History & Origin</h4>
                  <a href="/">Origin</a>
                  <a href="/oldest-site-in-kashmir">Oldest Site</a>
                  <a href="/kashmir-the-name">History of Name</a>
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
                <h4 class={styles.dropheading}>Food</h4>
                  <a href="/food-history">History</a>
                  <a href="/kashmiri-pandit-cuisine">Kashmiri Pandit Cuisine</a>
                  <img
                      className={styles.dropdish}
                      alt=""
                      src="/dish.png"
                    />
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
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
              </div>
          </div>

          <div class={styles.dropdown}>
            <button class={styles.select}>About
            <img
              className={styles.systemactionarrowDropDownIcon}
              alt=""
              src="/24systemactionarrow-drop-down.svg"
            />
            </button>
              <div class={styles.content}>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
              </div>
          </div>

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
