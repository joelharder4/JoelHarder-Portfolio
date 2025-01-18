import React, { useState, useEffect, useMemo, useRef } from 'react';
import Terminal from '../components/emulator/Terminal.jsx';
import useTerminal from '../tools/useTerminal.jsx';
import ViewFileModal from '../components/ViewFileModal.jsx';
import FullScreenGif from '../components/FullscreenGif.jsx';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton } from '@mui/material';
import HelpMenu from '../components/HelpMenu.jsx';
import BackgroundAudioPlayer from '../tools/BackgroundAudioPlayer.jsx';


const About = () => {
  const {
    history,
    pushToHistory,
    pushToHistoryWithDelay,
    setTerminalRef,
    resetTerminal,
    currentDir,
    changeDirectory,
    listDirectory,
    getFileContent,
    getAllFileContents,
    isTextFile,
    isAudioFile,
    removeComponentTypeFromHistory,
  } = useTerminal();
  const audioPlayerRef = useRef(null);
  const [popupName, setPopupName] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  const [gifSrc, setGifSrc] = useState(null);
  const [gifSize, setGifSize] = useState('full');
  const [helpOpen, setHelpOpen] = useState(false);

  const terminalCommands = {
    'help': async (args) => {
      const commandDescriptions = (
        args[0] === '--secret' || args[0] === '-s'
      ) ? {
        'yippee': 'Yippee!!!',
        'obama': 'Grilled Cheese Obama Sandwich Singalong!',
        'explode': '💥 BOOM! 💥',
        'milli': 'She Wiggies!!!',
      } : {
        'help [--secret]': 'Shows a list of all supported commands.',
        'clear': 'Clears all previous commands in the terminal.',
        'ls': 'Lists all folders and files in the current directory.',
        'cd [dir]': 'Changes the current directory to [dir] if it exists. Parent directory is `..`',
        'pwd': 'Prints the current directory path.',
        'cat [file]': 'Prints the content of any text file [file]. Multiple files can be specified.',
        'catdir': 'Prints the content of all files in the current directory.',
        'view [file]': 'View the content of a file [file] in a new window. Supports image and text files.',
        'play [file]': 'Plays an audio file [file]. It stops when the audio ends or when you use the command `stop`.',
        'stop': 'Stops all currently playing audio files.',
        'loop [file]': 'Plays an audio file [file] on repeat. It doesn\'t stop until you use the command `stop`.',
        '8ball [question]': 'Ask the magic 8-ball any yes/no question. [question] can be in any format.',
      }

      pushToHistory(<>
        {Object.entries(commandDescriptions).map(([command, description]) => {
          return (
            <div className='flex w-full' key={`command-desc-${command}`}>
              <p className='min-w-[30%] md:min-w-44'>{command}</p>
              <p className='text-left'>{description}</p>
            </div>
          );
        })}
      </>);
    },

    'nocommand': async () => {
      pushToHistory(
        <div>Command not found. Use &apos;help&apos; to see a list of all supported commands.</div>
      );
    },

    'clear': async () => {
      resetTerminal();
    },

    'ls': async () => {
      const files = listDirectory();
      pushToHistory(
        files.map((file, index) => {
          return <div key={`file-${index}`}>{file}</div>
        })
      );
    },

    'cd': async (args) => {
      if (args.length === 0) {
        pushToHistory(<div>Usage: cd [dir]</div>);
        return;
      }

      changeDirectory(args[0]);
    },

    'pwd': async () => {
      pushToHistory(
        <div>{currentDir}</div>
      );
    },

    'cat': async (args) => {
      pushToHistory(
        args.map((arg) => {
          const content = getFileContent(currentDir + arg);
          if (typeof(content) != 'string') {
            return `'${currentDir + arg}' is not a text file.`;
          }
          return <div key={`file-${arg}`}>{content}</div>
        })
      );
    },

    'catdir': async () => {
      const files = getAllFileContents();
      pushToHistory(
        <pre className='text-wrap'>{files}</pre>
      );
    },

    'view': async (args) => {
      const content = getFileContent(currentDir + args[0]);
      if (content.length === 0 || content === `File '${currentDir + args[0]}' not found.` || args.length <= 0) {
        pushToHistory(content);
        return;
      }
      setPopupName(args[0]);

      if (args[0].endsWith('.mp3')) {
        setPopupContent(
          <div className='flex justify-center'>
            {content}
          </div>
        )
      } else {
        setPopupContent(content);
      }
    },

    'play': async (args) => {
      const content = getFileContent(currentDir + args[0]);
      if (content === `File '${currentDir + args[0]}' not found.` || args.length <= 0) {
        pushToHistory(content);
        return;
      }
      if (!isAudioFile(args[0])) return;

      pushToHistory(<>
        <div>Now playing {args[0]}. To cancel, use the command `stop`.</div>
        <BackgroundAudioPlayer source={content} volume={0.6} ref={audioPlayerRef}/>
      </>);
      // let audioLength = 0;

      // while (!audioLength) {
      //   audioLength = await audioPlayerRef.current?.getAudioLength();
      //   await new Promise((resolve) => setTimeout(resolve, 10)); // wait 10ms
      // }
      
      // await pushToHistoryWithDelay(<></>, audioLength * 1000);
    },

    'loop': async (args) => {
      const content = getFileContent(currentDir + args[0]);
      if (content === `File '${currentDir + args[0]}' not found.` || args.length <= 0) {
        pushToHistory(content);
        return;
      }
      if (!isAudioFile(args[0])) return;

      pushToHistory(<>
        <div>Now playing {args[0]} on repeat. To cancel, refresh the page.</div>
        <BackgroundAudioPlayer source={content} volume={0.6} loopAudio={true} ref={audioPlayerRef}/>
      </>);
    },

    'stop': async () => {
      removeComponentTypeFromHistory('BackgroundAudioPlayer');
    },

    '8ball': async () => {
      const responses = ['Yes!', 'No!', 'Maybe?', 'Ask again later.', 'I don\'t know.', 'Probably', 'Unlikely.', '101% Chance.', 'Absolutely not.', 'Oh yeah!', 'Sure.', 'You shouldn\'t even have to ask.', 'Nuh uh.', 'Yuh huh.', 'I think so.', 'I wouldn\'t count on it', 'Brooo I wishhh!', 'Nope, thank God.', 'Dear god no', 'Totally!', 'Not a chance', '78% chance', '43% chance.', '15% chance', 'Cloudly with a chance of possible', 'That problem is undecidable', 'I have constructed a Turing Machine M to recognize your question... REJECT!', 'I have constructed a Turing Machine M to recognize your question... ACCEPT!', 'Duh', 'I\'ve never thought about that before...', 'Fourty Two.', 'Pay me $10 and I\'ll tell you.', 'I\'m not sure, but I think you should ask your mom.'];
      const response = responses[Math.floor(Math.random() * responses.length)];
      pushToHistory(
        <div>{response}</div>
      );
    },


    // Secret commands
    'yippee': async () => {
      pushToHistory(<>
        <div>🎉🎉🎉</div>
        <audio controls autoPlay className='hidden'>
          <source src="/sounds/yippee.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </>);
    },
    'obama': async () => {
      pushToHistory(<>
        <audio controls autoPlay className='hidden'>
          <source src="/sounds/obama-sandwich.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </>);
      await pushToHistoryWithDelay(<div>Mmmmm... Oh no I don&apos;t understand this</div>, 300);
      await pushToHistoryWithDelay(<div>Grilled Cheese Obama Sandwich</div>, 3500);
      await pushToHistoryWithDelay(<div>My calories won&apos;t stand this</div>, 2800);
      await pushToHistoryWithDelay(<div>My stomach will reject it</div>, 3500);
      await pushToHistoryWithDelay(<div>Mmmmm... Oh no I don&apos;t understand this</div>, 3200);
    },
    'explode': () => {
      setGifSize('full');
      setGifSrc('/img/explosion.gif');
      pushToHistory(
        <div>💥💥💥</div>
      );
    },
    'milli': () => {
      setGifSize('half');
      setGifSrc('/img/milli_wiggles.gif');
      pushToHistory(
        <div>Silly Milli! She Wiggies!!!</div>
      );
    },
  };


  const commandAutocompletes = useMemo(() => ({
    'help': ['--secret', ''],
    'cd': listDirectory().filter((name) => {return name.endsWith('/')}),
    'cat': listDirectory().filter((name) => {return isTextFile(name)}),
    'view': listDirectory(),
    'play': listDirectory().filter((name) => {return isAudioFile(name)}),
    'loop': listDirectory().filter((name) => {return isAudioFile(name)}),
  }), [listDirectory, isTextFile, isAudioFile]);


  useEffect(() => {
    resetTerminal();

    pushToHistory(<>
        <div className='leading-4 whitespace-pre'>
          <strong>Welcome to</strong>
          <pre>
&nbsp;       __           __   __  __               __               __  <br/>
&nbsp;      / /___  ___  / /  / / / /___ __________/ /__  __________/ /_ <br/>
&nbsp; __  / / __ \/ _ \/ /  / /_/ / __ `/ ___/ __  / _ \/ ___/ ___/ __ \<br/>
&nbsp;/ /_/ / /_/ /  __/ /  / __  / /_/ / /  / /_/ /  __/ /  (__  ) / / /<br/>
&nbsp;\____/\____/\___/_/  /_/ /_/\__,_/_/   \__,_/\___/_(_)/____/_/ /_/ <br/><br/>
          </pre>
          Use `help` to see a list of all supported commands.
        </div>
      </>
    );
  }, [resetTerminal, pushToHistory]);



  return (<>
    <FullScreenGif src={gifSrc} size={gifSize} onFinish={() => {setGifSrc(null)}}/>
    <ViewFileModal
      open={Boolean(popupContent)}
      onClose={() => setPopupContent(null)}
      title={popupName}
      fileContent={popupContent}
      type={popupName?.endsWith('.mp3') ? 'audio' : 'default'}
    />
    <div className="w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-row mx-auto justify-end items-center pt-16 md:pt-28 xl:pt-16 z-[40]">
      <p className='text-gray-400 hidden md:block'>How does this work?</p>
      <IconButton onClick={() => {setHelpOpen(true)}}>
        <HelpOutlineIcon sx={{color: 'rgb(156, 163, 175);'}}/>
      </IconButton>
    </div>
    <div className='text-primary mt-4 md:mt-0'>
      <div className='flex justify-center'>
        <Terminal 
          history={history}
          ref={setTerminalRef}
          commands={terminalCommands}
          prompt={`${currentDir} $ `}
          pushToHistory={pushToHistory}
          commandAutocompletes={commandAutocompletes}
        />
      </div>
    </div>

    <HelpMenu helpOpen={helpOpen} setHelpOpen={setHelpOpen}/>
  </>);
};

export default About;