import { ExpandMore } from '@mui/icons-material';
import { TextEmoji } from '@components/TextEmoji/TextEmoji';
import { useModalContext } from '@layouts/Layout/Layout';

import styles from './Home.module.scss';
import { FormLayout } from '@/components/Forms/FormLayout/FormLayout';

export const Home = () => {
  const {
    toggleModalHandler,
    isRegisterRequested,
    closeRegisterFormHandler,
    openRegisterFormHandler
  } = useModalContext();
  return (
    <main className={styles.content}>
      <section
        className={`${styles.section} ${styles.heroSection}`}
        aria-labelledby="pets-looking-for-home-heading">
        <div className={styles.heroWrapper}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h1 className={styles.header} id="pets-looking-for-home-heading">
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

      <section
        id="start"
        aria-labelledby="help-them-find-place-heading"
        className={`${styles.section} ${styles.two}`}>
        <div className={styles.info}>
          <TextEmoji className={styles.emoji}>💡</TextEmoji>
          <h2 id="help-them-find-place-heading" className={styles.infoParagraph}>
            You can help them to find their place on earth!
          </h2>
          <p className={styles.questionParagraph}>Woof to find out how? - scroll down... </p>
        </div>
      </section>

      <section
        aria-labelledby="last-step-to-adopt-heading"
        className={`${styles.section} ${styles.three}`}>
        <div className={styles.info}>
          <h2 id="last-step-to-adopt-heading" className={styles.infoParagraph}>
            Take the last step and register to adopt one of homless pets
          </h2>
          <p className={styles.questionParagraph}>Just one more woof... sorry, scroll </p>
        </div>
      </section>

      <section aria-labelledby="fill-form-heading" className={`${styles.section} ${styles.four}`}>
        <div className={styles.contentWrapper}>
          <h2 id="fill-form-heading" className={styles.infoParagraph}>
            Fill the form and help them out!
          </h2>
          <FormLayout
            showCloseButton={false}
            toggleModalHandler={toggleModalHandler}
            closeRegisterFormHandler={closeRegisterFormHandler}
            openRegisterFormHandler={openRegisterFormHandler}
            isRegisterRequested={isRegisterRequested}
          />
        </div>
      </section>
    </main>
  );
};
