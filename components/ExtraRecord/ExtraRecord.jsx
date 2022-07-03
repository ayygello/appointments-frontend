import Link from 'next/link';

const ExtraRecord = ({ count }) => {
  return (
    <div className='record'>
      <p>Еще {count} записи</p>
      <Link href={'/appointments'}>
        <a>Подробнее</a>
      </Link>
    </div>
  );
};

export default ExtraRecord;
