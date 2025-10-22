import React from 'react'
import Alert from './Alert';
import Firstsection from './Firstsection';
import Secondsection from './Secondsection';
import Thirdsection from './Thirdsection';
import Fourthsection from './Fourthsection';
import Fifthsection from './Fifthsection';
import Sixthsection from './Sixthsection';
import YoutubeVideos from './you tube/YoutubeVideos';

function Mainsection() {
  return (
    <div>
      <Alert/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Fourthsection/>
      <Fifthsection />
      <Sixthsection />
      <YoutubeVideos/>
    </div>
  );
}

export default Mainsection
