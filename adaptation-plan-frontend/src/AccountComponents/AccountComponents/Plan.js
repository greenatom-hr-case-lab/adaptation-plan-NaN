import React, {useState} from 'react';
import '../AccountStyles/Plan.css';
import SelectList from "./SelectList";
import Stage from "./Stage";
import AdaptationField from "./AdaptationField";

function Plan() {
  const [stage, setStage] = useState([
    {id: 1, name: 'Создание плана', completed: true , doing: false},
    {id: 2, name: 'Заполнение сотрудником', completed: true, doing: false},
    {id: 3, name: 'Согласование руководителем', completed: false, doing: true},
    {id: 4, name: 'Выполнение', completed: false, doing: false},
    {id: 5, name: 'Оценка руководителем', completed: false, doing: false},
    {id: 6, name: 'Оценка завершена', completed: false, doing: false}
  ])
  
  function updateStage(id){
    setStage(
      stage.map(stage => {
        stage.id === id ? stage.doing = true : stage.doing = false;
        return stage;
      })
    )
  }
  
  return (
    <div className="plan">
      <div className="select">
        <SelectList/>
      </div>
      <div className="adaptation">
        <AdaptationField/>
      </div>
      <div className="buttonsList">
        { stage.map((stage, index) => {
          return <Stage stage={stage} key={stage.id} updateStage={updateStage}/>
        }) }
      </div>
    </div>
  );
}

export default Plan;