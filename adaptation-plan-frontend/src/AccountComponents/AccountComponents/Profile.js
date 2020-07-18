import React, {useState} from 'react';
import '../AccountStyles/Profile.css';
import ProfileField from "./ProfileField";

function Profile() {
  /*const [state, setState] = useState({
    'Фамилия': 'Хотин',
    'Имя': 'Дмитрий',
    'Отчество': 'Юрьевич',
    'Должность': 'Сотрудник',
    'Дата рождения': '24.02.2000',
    'Почта': 'dmitriykhotin@mail.ru',
    'Компания': 'ГринАтом'
  })
  
  let fields = [];
  for (var prop in state) {
    fields.push({prop: state[prop]});
  }*/
  return (
    <div>
     {/* { fields.map((field, index) => {
        return <ProfileField field={field} key={index}/>
      }) }*/}
      <div>
        Фамилия
        <input type="text" placeholder="Фамилия"></input>
      </div>
      <div>
        Имя
        <input type="text" placeholder="Имя"></input>
      </div>
      <div>
        Отчество
        <input type="text" placeholder="Отчество"></input>
      </div>
      <div>
        Дата рождения
        <input type="date"></input>
      </div>
      <div>
        Почта
        <input type="text" placeholder="example@greenatom.ru"></input>
      </div>
      <div>
        Компания
        <input type="text" placeholder="Компания"></input>
      </div>
    </div>
  );
}

export default Profile;