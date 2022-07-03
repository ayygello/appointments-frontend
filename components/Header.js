import classes from '../styles/header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={classes.header}>
        <h1 className={classes.header__title}>Мой профиль</h1>
        <div className={classes.header__icons}>
          <img src='/1.png' alt='' className={classes.header__item_1}></img>
          <img src='/2.png' alt='' className={classes.header__item_2}></img>
          <img src='/3.png' alt='' className={classes.header__item_3}></img>
          <img src='/4.png' alt='' className={classes.header__avatar}></img>
          <img src='/5.png' alt='' className={classes.header__item_4}></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
