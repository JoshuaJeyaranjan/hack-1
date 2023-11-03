import "./Power.scss"

export const Power = ({char1}) => {
    const value = char1.powerstats.power;
    
    const progressBarStyle = {
        width: `${value}%`,
      };
  return (
    <div className="ability">
      <div className="progress">
        <div className="progress__bar" style={progressBarStyle}></div>
      </div>
    </div>
  )
}
