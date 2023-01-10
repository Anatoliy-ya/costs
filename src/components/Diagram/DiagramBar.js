import './DiagramBar.css'


export const DiagramBar = (props) => {

  let heightBar = "0%"

  if (props.maxValue > 0) {
    heightBar =Math.round(props.value / props.maxValue * 100) + '%';
  }

  return (
    <div className='diagram-bar'>
      <div className='inner' >
        <div className='fill' style={{height: heightBar}}></div>
      </div>
      <div className='label'>{props.label}</div>
    </div>
  )
};












