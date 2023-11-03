import "./Strength.scss"

export const Strength = ({char1}) => {
    const value = char1.powerstats.strength;
    
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
