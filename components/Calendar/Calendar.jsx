import classes from '../../styles/calendar.module.scss';

const Calendar = ({ days }) => {
  return (
    <div className={classes.calendar}>
      <div className={classes.calendar__month}>
        <img src='pagination-back.png' />
        <p>Июнь, 2020</p>
        <img src='pagination-forward.png' />
      </div>
      <div className={classes.calendar__week}>
        <p>Пн</p>
        <p>Вт</p>
        <p>Ср</p>
        <p>Чт</p>
        <p>Пт</p>
        <p>Сб</p>
        <p>Вс</p>
      </div>
      <div className={classes.calendar__days}>
        {days.map((day) => (
          <div
            className={classes.calendar__day}
            style={
              day.disabled && { backgroundColor: '#EBE7FF', color: '#00000040' }
            }
            key={day.id}
          >
            <p>{day.day}</p>
            {day.count && <img src={day?.count} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
