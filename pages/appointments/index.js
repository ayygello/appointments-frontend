import axios from 'axios';
import Link from 'next/link';
import Calendar from '../../components/Calendar/Calendar';
import DoctorsCard from '../../components/DoctorsCard/DoctorsCard';
import Layout from '../../components/Layout';
import classes from '../../styles/appoinments.module.scss';

const Appointments = ({ days, appointments }) => {
  return (
    <Layout title={'My Appointments'}>
      <main className={classes.appointments}>
        <div className={classes.appointments__title}>
          <Link href={'/'}>
            <img src='back-to-main.png' />
          </Link>
          <h1>Мои записи</h1>
        </div>
        <div className={classes.appointments__row}>
          <div className={classes.appointments__col}>
            {appointments.map((appointment) => (
              <DoctorsCard
                key={appointment.id}
                title={appointment.title}
                subtitle={appointment.subtitle}
                avatar={appointment.avatar}
                name={appointment.name}
                position={appointment.position}
              />
            ))}
          </div>
          <Calendar days={days} />
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res1 = await axios.get('http://localhost:7777/days');
  const res2 = await axios.get('http://localhost:7777/appointments');

  if (res1.statusText !== 'OK' || res2.statusText !== 'OK') {
    throw new Error(response.statusText);
  }

  const days = await res1.data;
  const appointments = await res2.data;
  return { props: { days, appointments } };
};

export default Appointments;
