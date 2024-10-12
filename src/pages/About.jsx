import React, { useEffect, useMemo } from 'react';
import Terminal from '../components/emulator/Terminal.jsx';
import useTerminal from '../tools/useTerminal.jsx';

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
  } = useTerminal();

  const terminalCommands = useMemo(() => ({
    'help': async (args) => {
      const commandDescriptions = (
        args[0] === '--secret' || args[0] === '-s'
      ) ? {
        'yippee': 'Yippee!!!',
        'obama': 'Grilled Cheese Obama Sandwich Singalong!',
      } : {
        'help [--secret]': 'Shows a list of all supported commands.',
        'clear': 'Clears all previous commands in the terminal.',
        'ls': 'Lists all folders and files in the current directory.',
        'cd [dir]': 'Changes the current directory to [dir] if it exists. Parent directory is `..`',
        'pwd': 'Prints the current directory path.',
        'cat [file]': 'Prints the content of the file [file].',
        'catdir': 'Prints the content of all files in the current directory.',
        '8ball [question]': 'Ask the magic 8-ball a question.',
      }

      pushToHistory(<>
        {Object.entries(commandDescriptions).map(([command, description]) => {
          return (
            <div className='flex w-full' key={`command-desc-${command}`}>
              <p className='min-w-44'>{command}</p>
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
          return <div key={`file-${arg}`}>{getFileContent(currentDir + arg)}</div>
        })
      );
    },
    'catdir': async () => {
      const files = getAllFileContents();
      pushToHistory(
        <pre className='text-wrap'>{files}</pre>
      );
    },
    '8ball': async () => {
      const responses = ['Yes!', 'No!', 'Maybe?', 'Ask again later.', 'I don\'t know.', 'Probably', 'Unlikely.', '101% Chance.', 'Absolutely not.', 'Oh yeah!', 'Sure.', 'You shouldn\'t even have to ask.', 'Nuh uh.', 'Yuh huh.', 'I think so.', 'I wouldn\'t count on it'];
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
  }), [pushToHistory, pushToHistoryWithDelay, resetTerminal, currentDir, listDirectory, changeDirectory, getFileContent, getAllFileContents]);

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

  return (
    <div className='text-primary mt-32'>
      <div className='flex justify-center'>
        <Terminal 
          history={history}
          ref={setTerminalRef}
          commands={terminalCommands}
          prompt={`${currentDir} $ `}
          pushToHistory={pushToHistory}
        />
      </div>
    </div>
  );
};

export default About;