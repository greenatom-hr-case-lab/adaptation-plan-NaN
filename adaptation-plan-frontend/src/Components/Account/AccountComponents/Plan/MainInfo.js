import React, {useState} from 'react';
import './MainInfo.css'
import TextField from "../TextField";
import CalendarField from "../CalendarField";
import SelectField from "../SelectField";
import Stage from "./Stage";

function MainInfo(props) {
  const date = new Date()
  const [field, setField] = useState([
    {id: 1, name: 'Должность', disabled: true},
    {id: 2, name: 'Руководитель', disabled: true},
    {id: 3, name: 'Начало', disabled: true},
    {id: 4, name: 'Конец', disabled: true},
    {id: 5, name: 'HR-сотрудник', disabled: true},
    {id: 6, name: 'Оценка', disabled: true}
  ])
  
  const [stage, setStage] = useState([
    {id: 1, name: 'Создание плана', completed: true , doing: false},
    {id: 2, name: 'Заполнение сотрудником', completed: true, doing: false},
    {id: 3, name: 'Согласование руководителем', completed: false, doing: true},
    {id: 4, name: 'Выполнение', completed: false, doing: false},
    {id: 5, name: 'Оценка руководителем', completed: false, doing: false},
    {id: 6, name: 'Оценка завершена', completed: false, doing: false}
  ])
  
  return (
    <div className="mainInfo">
      <p>Дата создания плана: 24.07.2020</p>
      <TextField title={field[0]}/>
      <SelectField title={field[1]}/>
      <CalendarField title={field[2]}/>
      <CalendarField title={field[3]}/>
      <SelectField title={field[4]}/>
      <SelectField title={field[5]}/>
      <div className="buttonsList"> {/* here we got all our stages*/}
        { stage.map(stage => {
          return <Stage stage={stage} key={stage.id}/>
        }) }
      </div>
    </div>
  );
}

export default MainInfo;
