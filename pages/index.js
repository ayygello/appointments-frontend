import Layout from '../components/Layout';
import DoctorsCard from '../components/DoctorsCard/DoctorsCard';
import ExtraRecord from '../components/ExtraRecord/ExtraRecord';
import AboutLogo from '../components/AboutPatient/AboutLogo';
import AboutBody from '../components/AboutPatient/AboutBody';
import InfoCard from '../components/InfoCard/InfoCard';
import ResultsLogo from '../components/Results/ResultsLogo';
import ResultsBody from '../components/Results/ResultsBody';
import AddLogo from '../components/AddInfo/AddLogo';
import AddBody from '../components/AddInfo/AddBody';
import HistoryLogo from '../components/History/HistoryLogo';
import HistoryBody from '../components/History/HistoryBody';
import { cancelAppointment, loadAppointments } from './api';
import axios from 'axios';

const MyProfile = ({ appointments }) => {
  return (
    <Layout title={'My Profile'}>
      <main className='doctors'>
        <div className='doctors__title'>
          <h1>Записи на прием</h1>
        </div>
        <div className='doctors__row'>
          {appointments.map((appointment, index) => {
            if (index < 2) {
              return (
                <DoctorsCard
                  key={appointment.id}
                  title={appointment.title}
                  subtitle={appointment.subtitle}
                  avatar={appointment.avatar}
                  name={appointment.name}
                  position={appointment.position}
                  onCancel={() => cancelAppointment(appointment.id)}
                />
              );
            }
          })}
          {appointments.length > 2 && (
            <ExtraRecord count={appointments.length - 2} />
          )}
        </div>
        <div className='doctors__title'>
          <h1>Электронная карта</h1>
        </div>
        <div className='info'>
          <div className='info__row'>
            <InfoCard logo={<AboutLogo />} body={<AboutBody />} />
            <InfoCard logo={<ResultsLogo />} body={<ResultsBody />} />
            <InfoCard logo={<AddLogo />} body={<AddBody />} />
            <InfoCard logo={<HistoryLogo />} body={<HistoryBody />} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const appointments = await loadAppointments();
  return { props: { appointments } };
};

export default MyProfile;
