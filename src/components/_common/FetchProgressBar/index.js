import React from 'react';
import { ProgressBar } from 'react-fetch-progressbar';
import './style.scss';

const FetchProgressBar = ({isLoad, ...props}) => {

  return (
    <div className={`fetch-progress-bar-wrap ${isLoad ? '' : 'is-load'}`}>
      <ProgressBar />
    </div>
  )
}

export default FetchProgressBar;
