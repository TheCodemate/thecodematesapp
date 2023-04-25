import { useNavigate, useParams } from 'react-router-dom';
import dog from '../../../assets/images/dog1.jpg';

import { IconButton } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Button } from '@/components/Button/Button';
import { LoveButton } from '@/components/LoveButton/LoveButton';

import styles from './PetPage.module.scss';
import { Avatar } from '@/components/Avatar/Avatar';

export const PetPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <main className={styles.container}>
      <div className={styles.imagesContainer}>
        <div className={styles.navContainer}>
          <IconButton onClick={goBackHandler} className={styles.backButton}>
            <ArrowBackIosIcon className={styles.icon} />
          </IconButton>
          <LoveButton />
        </div>

        <img className={styles.image} src={dog} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.petDetails}>
          <div className={styles.basicDetails}>
            <div className={styles.leftSide}>
              <span className={styles.petName}>Rogalik</span>
              <div className={styles.locationContainer}>
                <LocationOnOutlinedIcon className={styles.locationIcon} />
                <span className={styles.location}>California (2,5 km)</span>
              </div>
            </div>
            <div className={styles.rightSide}>
              <span className={styles.price}>$ 95</span>
            </div>
          </div>
          <div className={styles.characteristicsContainer}>
            <div className={styles.characteristic}>
              <span className={styles.char}>Male</span>
              <span className={styles.charTitle}>sex</span>
            </div>
            <div className={styles.characteristic}>
              <span className={styles.char}>Black</span>
              <span className={styles.charTitle}>color</span>
            </div>
            <div className={styles.characteristic}>
              <span className={styles.char}>Tike</span>
              <span className={styles.charTitle}>breed</span>
            </div>
            <div className={styles.characteristic}>
              <span className={styles.char}>3</span>
              <span className={styles.charTitle}>age</span>
            </div>
          </div>
          <div className={styles.ownerContainer}>
            <div className={styles.ownerInfo}>
              <Avatar avatarUrl={'https://xsgames.co/randomusers/avatar.php?g=male'} />
              <div className={styles.ownerDescription}>
                <span className={styles.ownedBySpan}>Owned by: </span>
                <span className={styles.ownerName}>Peter Pizzaeater</span>
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
        <div className={styles.contentBody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laudantium accusantium
          eaque ex repellendus, mollitia dolorum ea, quidem optio provident, neque esse?
          Exercitationem recusandae voluptatibus reprehenderit consequatur dolor quas id?
        </div>
        <div className={styles.contentFooter}>
          <Button variant="action">Adopt me!</Button>
        </div>
      </div>
    </main>
  );
};
