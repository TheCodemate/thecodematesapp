import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAnnouncements } from '@/store/features/announcements/announcements.selectors';

import { IconButton } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Button } from '@/components/Button/Button';
import { LoveButton } from '@/components/LoveButton/LoveButton';
import { Avatar } from '@/components/Avatar/Avatar';

import styles from './PetPage.module.scss';

export const PetPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { announcements } = useSelector(getAnnouncements);
  const currentAnnouncement = announcements.filter((announcement) => announcement.id === id).pop();
  const goBackHandler = () => {
    navigate(-1);
  };

  if (!currentAnnouncement) {
    return <h2>Could not get announcement data</h2>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.navContainer}>
          <IconButton onClick={goBackHandler} className={styles.backButton}>
            <ArrowBackIosIcon className={styles.icon} />
          </IconButton>
          <LoveButton />
        </div>

        <img className={styles.image} src={currentAnnouncement.imageUrl[0]} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.petDetails}>
          <div className={styles.basicDetails}>
            <div className={styles.leftSide}>
              <span className={styles.petName}>{currentAnnouncement.petName}</span>
              <div className={styles.locationContainer}>
                <LocationOnOutlinedIcon className={styles.locationIcon} />
                <span
                  className={
                    styles.location
                  }>{`${currentAnnouncement.location.country} ( ${currentAnnouncement.location.city} )`}</span>
              </div>
            </div>
            <div className={styles.rightSide}>
              <span className={styles.price}>$ {currentAnnouncement.price}</span>
            </div>
          </div>
          <div className={styles.characteristicsContainer}>
            <div className={styles.characteristic}>
              <span className={styles.char}>{currentAnnouncement.characteristics.sex}</span>
              <span className={styles.charTitle}>sex</span>
            </div>
            <div className={styles.characteristic}>
              <span className={styles.char}>{currentAnnouncement.characteristics.color}</span>
              <span className={styles.charTitle}>color</span>
            </div>
            <div className={styles.characteristic}>
              <span className={styles.char}>{currentAnnouncement.characteristics.breed}</span>
              <span className={styles.charTitle}>breed</span>
            </div>
            <div className={styles.characteristic}>
              <span className={styles.char}>{currentAnnouncement.characteristics.age}</span>
              <span className={styles.charTitle}>age</span>
            </div>
          </div>
          <div className={styles.ownerContainer}>
            <div className={styles.ownerInfo}>
              <Avatar avatarUrl={currentAnnouncement.owner.avatarUrl} />
              <div className={styles.ownerDescription}>
                <span className={styles.ownedBySpan}>Owned by: </span>
                <span className={styles.ownerName}>
                  {`${currentAnnouncement.owner.firstName} ${currentAnnouncement.owner.lastName}`}
                </span>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactButton}>
                <SmartphoneOutlinedIcon className={styles.icon} />
              </div>
              <div className={styles.contactButton}>
                <EmailOutlinedIcon className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentBody}>{currentAnnouncement.description}</div>
        <div className={styles.contentFooter}>
          <Button variant="action">Adopt me!</Button>
        </div>
      </div>
    </main>
  );
};
