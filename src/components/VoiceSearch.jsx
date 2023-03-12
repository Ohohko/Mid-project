
import React, { useState } from 'react';
import {GiOldMicrophone} from 'react-icons/gi'

function VoiceSearch() {
    const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
      setIsListening(false);
    };
    recognition.start();
  };

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>
        {isListening ? 'Listening...' : <GiOldMicrophone size={30}/>}
      </button>
      {transcript && <p>You said: {transcript}</p>}
    </div>
  );
};


export default VoiceSearch




