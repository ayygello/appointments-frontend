import Link from 'next/link';
import { cancelAppointment, loadAppointments, loadDays } from '../api';
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
                onCancel={() => cancelAppointment(appointment.id)}
              />
            ))}
          </div>
          <Calendar days={days} />
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const appointments = await loadAppointments();
  const days = await loadDays();
  return { props: { days, appointments } };
};

export default Appointments;
