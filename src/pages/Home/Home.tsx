import styles from './Home.module.scss';
import dog from '../../assets/images/dog-small.jpg';

export const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={`${styles.heroCol} ${styles.left}`}>
          <img className={styles.image} src={dog} alt="a black dog" />
        </div>
        <div className={`${styles.heroCol} ${styles.right}`}>
          <div className={styles.heroTextWrapper}>
            <h1 className={styles.h1}>Woof, Woof, Woof!</h1>
            <p className={styles.author}>- The Dog</p>
          </div>
          <div className={styles.guidlineWrapper}>
            <div className={styles.scrollDirection}>
              <div className={styles.circle} />
            </div>
            <p className={styles.guidline}>Do you want to know how does it work?</p>
          </div>
        </div>
      </section>
      {/* <section className={styles.moreDetails}>
        <div className={`${styles.heroCol} ${styles.left}`}>
          <img className={styles.image} src={dog} alt="a black dog" />
        </div>
        <div className={`${styles.heroCol} ${styles.right}`}>
          <h1 className={styles.h1}>Woof, Woof, Woof!</h1>
          <p className={styles.author}>- The Dog</p>
        </div>
      </section> */}
    </div>
  );
};
