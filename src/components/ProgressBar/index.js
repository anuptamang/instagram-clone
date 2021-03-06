import React from 'react';
import handleViewport from 'react-in-viewport';
import './ProgressBar.scss';

const ProgressBar = handleViewport((props) => {
  const progressValue = props.value ? props.value : 1;

  return (
    <div
      className="progress"
      ref={props.forwardedRef}
    >
      <div
        className={`progress-bar ${props.color}`}
        style={{width: (props.inViewport) ? progressValue + '%' : 0}}
      >
      </div>
    </div>
  )
})

export default ProgressBar;
