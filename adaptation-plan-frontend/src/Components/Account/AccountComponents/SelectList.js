import React from 'react';
import Select from 'react-select';

/*const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};*/

/*
const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);
*/

export default function SelectList() {
  const colourOptions =[
    {id: 1, label: '1'},{ label: '2'}
  ]
  
  const groupedOptions = [
    {value: '1', label: 'efwefewf'},{value: '2'},{value: '3'},{value: '4'}
  ]
  
  const customTheme = theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#f8fcfe',
        primary: '#bed52d'
      }
    }
  }
  
  return (
    <Select
      defaultValue={colourOptions[1]}
      options={groupedOptions}
      theme={customTheme}
      /*formatGroupLabel={formatGroupLabel}*/
    />
  );
}
