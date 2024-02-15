export const Listing = ({ rate, trend }) => {
  return (
    <>
      <div className="marquee-listing">
        <h3>{rate.currency}</h3>
        <span>=</span>
        {trend === "high" ? (
          <em className="up">{rate.rate} &#9650; </em>
        ) : (
          <></>
        )}

        {trend === "low" ? (
          <em className="down">{rate.rate} &#9660; </em>
        ) : (
          <></>
        )}

        {trend === "same" ? <em className="up">{rate.rate} </em> : <></>}
      </div>
      <div className="marquee-listing">
        <h3>{rate.myCurrency}</h3>
        <span>=</span>
        {trend === "high" ? (
          <em className="up">{rate.myRate} &#9650; </em>
        ) : (
          <></>
        )}

        {trend === "low" ? (
          <em className="down">{rate.myRate} &#9660; </em>
        ) : (
          <></>
        )}

        {trend === "same" ? <em className="up">{rate.myRate} </em> : <></>}
      </div>
    </>
  );
};

// &#9650; - Up Caret
// &#9660; - Down Caret
