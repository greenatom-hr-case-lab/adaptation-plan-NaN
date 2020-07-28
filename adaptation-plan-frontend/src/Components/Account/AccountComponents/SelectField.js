import React from 'react';
import Select from 'react-select';
import '../AccountStyles/SelectField.css'

function SelectField(props) {
  const startValue = { label: ''}
  const options = props.options.map(function(option, index) {
    return {id: index+1, label: option, value: index}
  })
  
  const customStyles = {
    valueContainer: (provided) => ({
      ...provided,
      height: 32,
      overflow: 'none'
    }),
    singleValue: (provided) => ({
      ...provided,
    }),
    container: (provided) => ({
      ...provided,

    }),
    indicatorContainer: (provided) => ({
      ...provided,
      maxHeight: 16
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      maxHeight: 32
    }),
    control: (provided, state) => ({
      ...provided,
      /*minHeight: 38,
      width: 220,*/
      width: 200,
      minHeight: 32,
      borderRadius: 15,
      borderColor: 'silver',
    }),
    input: (provided) => ({
      ...provided,
      margin: 0,
      padding: 0
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white'
    }),
    group: (provided) => ({
      ...provided,
      backgroundColor: 'green'
    }),
    option: (provided, state) => ({
      ...provided,
      borderColor: 'blue',
      backgroundColor: state.isFocused
        ?
        '#bed52d'
        :
        null,
      color: 'black'
    })
  }

    const onChange = (newValue) => {
      props.update(newValue)
    }
  return (
    <div className="item">
      <span>{props.title.name}</span>
      <Select /*className="selectField"*/
        defaultValue={props.value}
        options={options}
        styles={customStyles}
        onChange={() => onChange}
        isDisabled={props.disabled}
      />
    </div>
    
  );
}

export default SelectField;