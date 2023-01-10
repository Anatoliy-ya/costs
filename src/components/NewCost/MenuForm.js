import { useState } from "react";







export const MenuForm = (props) => {
  let more = 'document.getElementById("myForm")';
  const [open, setOpen] = useState(more);

  const openForm = () => {
    if(open.style.display === 'none') {
      setOpen(open.style.display = 'flex')
    };
  }

  return (
    <div>
      <button onClick={openForm} >Добавить Новый Расход</button>
    </div>
  )
}





