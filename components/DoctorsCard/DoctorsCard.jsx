const DoctorsCard = ({ title, subtitle, avatar, name, position }) => {
  return (
    <>
      <div className='card'>
        <div className='card__body'>
          <h1 className='card__title'>{title}</h1>
          <h3 className='card__subtitle'>{subtitle}</h3>
          <div className='card__details'>
            <img className='card__image' src={avatar} />
            <div className='card__info'>
              <p className='card__name'>{name}</p>
              <p className='card__position'>{position}</p>
            </div>
          </div>
        </div>
        <div className='card__button'>
          <button>Отменить</button>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
