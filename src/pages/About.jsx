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
  } = useTerminal();

  const terminalCommands = useMemo(() => ({
    'help': async () => {
      pushToHistory(
        <div>hi aww</div>
      );
    },
    'nocommand': async () => {
      pushToHistory(
        <div>Command not found. Use `help` to see a list of all supported commands.</div>
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
    'cd': async (args) =>{
      changeDirectory(args[0]);
    }
  }), [pushToHistory, resetTerminal, listDirectory, changeDirectory]);

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