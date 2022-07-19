import Layout from '../components/Layout/Layout';
import DoctorsCard from '../components/DoctorsCard/DoctorsCard';
import ExtraRecord from '../components/ExtraRecord/ExtraRecord';
import InfoCard from '../components/InfoCard/InfoCard';
import AboutLogo from '../components/InfoCard/AboutPatient/AboutLogo';
import AboutBody from '../components/InfoCard/AboutPatient/AboutBody';
import ResultsLogo from '../components/InfoCard/Results/ResultsLogo';
import ResultsBody from '../components/InfoCard/Results/ResultsBody';
import AddLogo from '../components/InfoCard/AddInfo/AddLogo';
import AddBody from '../components/InfoCard/AddInfo/AddBody';
import HistoryLogo from '../components/InfoCard/History/HistoryLogo';
import HistoryBody from '../components/InfoCard/History/HistoryBody';
import { cancelAppointment, loadAppointments } from './api';

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
          <h2>Электронная карта</h2>
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
