import "./Speed.scss"

export const Speed = ({char1}) => {
    const value = char1.powerstats.speed;
    
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
