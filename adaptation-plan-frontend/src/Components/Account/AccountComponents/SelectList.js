import React, {useState} from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import '../AccountStyles/SelectList.css'
import {employeesFetchData} from "../../../redux/actions/employeesPlan";
import {planFetchData} from "../../../redux/actions/adaptationPlan";
import {connect} from "react-redux";

function SelectList(props) {
  const colourOptions = {
    label: 'Выберите сотрудника..'
}
  
  const groupedOptions = [
    {id: 1, label: 'Дмитрий Хотин', value: 'Дмитрий Хотин'},
    {id: 2, label: 'Александр Пушкин', value: 'Александр Пушкин'}
  ]
  
  const [options, setOptions] = useState([
    {id: 1, label: 'Дмитрий Хотин', value: 'Дмитрий Хотин'},
    {id: 2, label: 'Александр Пушкин', value: 'Александр Пушкин'}
    ])
  
  /*const [options, setOptions] = useState(props.state.employees)*/
  
  const customTheme = theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#f8fcfe',
        primary: '#bed52d'
      },
    }
  }
  
  const onChange = (newValue) => {
    console.log({
      name: newValue.label.split(' ')[0],
      secondname: newValue.label.split(' ')[1]
    })
    /*props.fetchPlan({
      name: newValue.label.split(' ')[0],
      secondname: newValue.label.split(' ')[1]
    })*/
  }
  return (
    <div className='selectList'>
      <Select
        defaultValue={colourOptions}
        options={groupedOptions}
        theme={customTheme}
        /*formatGroupLabel={formatGroupLabel}*/
      />
      {/*<AsyncSelect
        defaultValue={colourOptions}
        onMenuOpen={onMenuOpen}
        defaultOptions={options}
        onChange={onChange}
        theme={customTheme}
      />*/}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    employees: state.employeesPlanReducer.employees
  }
}
const mapDispatchToProps = (dispatch, object) => {
  return {
    fetchPlan: (object) => dispatch(planFetchData(object))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectList)