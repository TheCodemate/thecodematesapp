import { AddForm } from '@/components/AddForm/AddForm';

import { TextEmoji } from '@/components/TextEmoji/TextEmoji';

import styles from './AddAnnouncementPage.module.scss';

export const AddAnnouncementPage = () => {
  return (
    <main className={styles.container}>
      <h1>
        You are one step away from placing adoption announcement! <br />
        <TextEmoji>🫶🏻</TextEmoji>
      </h1>
      <p>Fill out the form!</p>
      <AddForm />
    </main>
  );
};
