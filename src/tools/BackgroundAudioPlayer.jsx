import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const BackgroundAudioPlayer = forwardRef(({ source, volume, loopAudio=false }, ref) => {
  const audioRef = useRef();

  useImperativeHandle(ref, () => ({
    getAudioLength: () => {audioRef.current?.duration},
  }));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume ?? 1;
    }
  }, [volume]);

  return (
    <audio ref={audioRef} controls autoPlay loop={loopAudio} className="hidden">
      {source}
      Your browser does not support the audio tag.
    </audio>
  );
});

BackgroundAudioPlayer.displayName = 'BackgroundAudioPlayer';

export default BackgroundAudioPlayer;