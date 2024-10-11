import React, { useEffect, useMemo } from 'react';
import Terminal from '../components/emulator/Terminal.jsx';
import useTerminal from '../tools/useTerminal.jsx';

const About = () => {
  const {
    history,
    pushToHistory,
    setTerminalRef,
    resetTerminal,
    currentDir,
    changeDirectory,
    listDirectory,
    getFileContent,
  } = useTerminal();

  const terminalCommands = useMemo(() => ({
    'help': async (args) => {
      const commandDescriptions = (
        args[0] === '--secret' || args[0] === '-s'
      ) ? {
        'yippee': 'Yippee!!!',
      } : {
        'help [--secret]': 'Shows a list of all supported commands.',
        'clear': 'Clears all previous commands in the terminal.',
        'ls': 'Lists all folders and files in the current directory.',
        'cd [dir]': 'Changes the current directory to [dir] if it exists. Parent directory is `..`',
        'pwd': 'Prints the current directory path.',
        'cat [file]': 'Prints the content of the file [file].',
      }

      pushToHistory(<>
        {/* <div>Type &apos;help name&apos; to find out more about the function &apos;name&apos;.</div> */}
        {Object.entries(commandDescriptions).map(([command, description]) => {
          return (
            <div className='flex w-full' key={`command-desc-${command}`}>
              <p className='w-40'>{command}</p>
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
      const fileContent = getFileContent(currentDir + args[0]);
      pushToHistory(
        <div>{fileContent}</div>
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
  }), [pushToHistory, resetTerminal, currentDir, listDirectory, changeDirectory, getFileContent]);

  useEffect(() => {
    resetTerminal();

    pushToHistory(<>
        <div><strong>Welcome!</strong> to the terminal.</div>
        <div>Use `help` to see a list of all supported commands.</div>
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