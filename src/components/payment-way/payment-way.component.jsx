// import "./payment-way.styles.scss";

export const PaymentWay = ({ image, title, text, number }) => {
  return (
    <div className="way">
      <img src={image} alt="" />
      <div className="content">
        <div className="content-wrap">
          <div className="number">{number}</div>
          <div className="text">
            <h4>{title}</h4>
            <em>{text}</em>
          </div>
        </div>
      </div>
    </div>
  );
};
