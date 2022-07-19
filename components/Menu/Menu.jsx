import Link from 'next/link';
import menuClasses from '../../styles/menu.module.scss';

const Menu = () => {
  return (
    <nav className={menuClasses.menu}>
      <Link href={'/'}>
        <a className={menuClasses.menu__logo}>Логотип</a>
      </Link>
      <ul className={menuClasses.menu__list}>
        <li className={menuClasses.menu__list_1}>Профиль</li>
        <li className={menuClasses.menu__list_2}>Врачи и клиники</li>
        <li className={menuClasses.menu__list_3}>Сообщения</li>
        <li className={menuClasses.menu__list_4}>Тестирование</li>
        <li className={menuClasses.menu__list_5}>Полезно знать</li>
      </ul>
      <Link href={'/newAppointment'}>
        <div className={menuClasses.menu__request}>
          <button>Подать заявку</button>
        </div>
      </Link>
      <ul className={menuClasses.menu__list}>
        <li className={menuClasses.menu__list_6}>Помощь</li>
      </ul>
    </nav>
  );
};

export default Menu;
