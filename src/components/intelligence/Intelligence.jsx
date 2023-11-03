import "./Intelligence.scss"

export const Intelligence = ({char1}) => {
    const value = char1.powerstats.intelligence;
    
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
