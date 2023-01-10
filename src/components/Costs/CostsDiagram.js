import { Diagram } from "../Diagram/Diagram";




export const CostsDiagram = (props) => {

  const diagramDate =[
    {label: 'Jan', value: '0'},
    {label: 'Fev', value: '0'},
    {label: 'Mar', value: '0'},
    {label: 'Apl', value: '0'},
    {label: 'May', value: '0'},
    {label: 'Jun', value: '0'},
    {label: 'Jul', value: '0'},
    {label: 'Avg', value: '0'},
    {label: 'Seb', value: '0'},
    {label: 'Okt', value: '0'},
    {label: 'Nob', value: '0'},
    {label: 'Dek', value: '0'},
  ];

  for(let cost of props.costs) {
    let dateMounth = cost.date.getMonth();
    diagramDate[dateMounth].value =+ cost.amount;
  }

  return (
    <div>
      <Diagram dateSets={diagramDate}/>
    </div>
  )
}
















