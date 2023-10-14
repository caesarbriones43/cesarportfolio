import { Text, Title, TextInput, Button, Image, Avatar } from '@mantine/core';
import classes from './ProfileBanner.module.css';

export function ProfileBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Image
          className={classes.image}
          src={'https://s6.gifyu.com/images/S6d6H.gif'}
          alt={`A cute animal!`}
        />

        {/* Utiliza clases responsivas para ajustar el tamaño del Avatar */}
        <div className={`${classes.avatarContainer} ${classes.mobileAvatar}`}>
          <Avatar
            className={classes.image}
            size={300}
            src="https://s6.gifyu.com/images/S6dFU.gif"
          />
        </div>
      </div>
    </div>
  );
}
