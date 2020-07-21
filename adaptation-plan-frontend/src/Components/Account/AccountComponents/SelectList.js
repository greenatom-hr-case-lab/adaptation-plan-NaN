import React from 'react';

import Select from 'react-select';

const groupStyles = {
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
};



const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default function SelectList() {
  const colourOptions =[
    '1','2','3','4'
  ]
  
  const groupedOptions = [
    {value: '1'},{value: '2'},{value: '3'},{value: '4'}
  ]
  
  return (
    <Select
      defaultValue={colourOptions[1]}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
    />
  );
}
