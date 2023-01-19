import './Frontcard.scss';

function Frontcard() {
  return (
    <div className="card card-front">
      <div className="front-circles">
        <div className="circle-xl" />
        <div className="circle-xs" />
      </div>
      <div className="front-number">0000 0000 0000 0000</div>
      <div className="front-name">Jane Appleseed</div>
      <div className="front-date"><span className="month">00</span>/<span className="year">00</span></div>
    </div>
  );
}

export default Frontcard;
