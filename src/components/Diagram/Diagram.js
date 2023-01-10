import { DiagramBar } from "./DiagramBar"
import './Diagram.css'



export const Diagram = (props) => {

  const dataValues = props.dateSets.map(
    dataSet => dataSet.value);
  
  const maxMonth = Math.max(...dataValues);


  return (
    <div className="diagram">
      {props.dateSets.map((e) => (
        <DiagramBar 
          key={e.label}
          value={e.value}
          maxValue={maxMonth}
          label={e.label}
        />  
      ))}
    </div>
  )
}












