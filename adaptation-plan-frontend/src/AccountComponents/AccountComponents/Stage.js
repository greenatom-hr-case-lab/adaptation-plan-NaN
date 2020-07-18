import React from 'react';
import '../AccountStyles/Stage.css';

function Stage(props) {
  return (
    <button
      className={
        'stageButton' +
        (props.stage.completed ? ' completed' : '') +
        (props.stage.doing ? ' doing' : '')
      }
      onClick={() => props.updateStage(props.stage.id)}
    >
      { props.stage.name }
    </button>
  );
}

export default Stage;