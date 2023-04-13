import { ExpandMore } from '@mui/icons-material';
import { Form } from '@components/Form/Form';
import { TextEmoji } from '@components/TextEmoji/TextEmoji';

import dog from '@assets/images/dog-small.jpg';

import styles from './Home.module.scss';
type Props = {
  toggleModalHandler: () => void;
};

export const Home = ({ toggleModalHandler }: Props) => {
  return (
    <main className={styles.content}>
      <section className={styles.heroSection}>
        <div className={styles.heroWrapper}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h1 className={styles.header}>
              There are hundreds <TextEmoji> 💯 </TextEmoji> of pets <TextEmoji>🐶🐱</TextEmoji>
              looking for their lovely home <TextEmoji>🏠❤️</TextEmoji>
            </h1>
          </div>
        </div>
        <div className={styles.guidlinesWrapper}>
          <a href="#start">
            <div className={styles.circle}>
              <ExpandMore sx={{ color: 'var(--color-text-icon-light)' }} />
            </div>
          </a>
          <div className={styles.guidline}>Check woof to do to adopt me!</div>
        </div>
      </section>

      <section id="start" className={`${styles.section} ${styles.two}`}>
        <div className={styles.info}>
          <TextEmoji className={styles.emoji}>💡</TextEmoji>
          <p className={styles.infoParagraph}>You can help them to find their place on earth!</p>
          <p className={styles.questionParagraph}>Woof to find out how? - scroll down... </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.three}`}>
        <div className={styles.info}>
          <p className={styles.infoParagraph}>
            Take the last step and register to adopt one of homless pets
          </p>
          <p className={styles.questionParagraph}>Just one more woof... sorry, scroll </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.four}`}>
        <div className={styles.contentWrapper}>
          <Form showCloseButton={false} toggleModalHandler={toggleModalHandler} />
        </div>
      </section>
    </main>
  );
};
