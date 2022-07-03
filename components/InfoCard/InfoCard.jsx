const InfoCard = ({ logo, body }) => {
  return (
    <div className='info__card'>
      <div className='info__logo'>{logo}</div>
      <div className='info__body'>{body}</div>
    </div>
  );
};

export default InfoCard;
