import "./Durability.scss"

export const Durability = ({char1}) => {
    const value = char1.powerstats.durability;
    console.log(value)
    
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
