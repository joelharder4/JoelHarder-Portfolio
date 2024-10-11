import {useCallback, useEffect, useState} from 'react';


const files = {
  'skills/': {
    'programming-languages.txt': 'JavaScript, TypeScript, Python, Java, PHP',
    'web-development.txt': 'React.js, Next.js, Tailwind CSS',
  },
  'contact/': {
    'email.txt': 'My email address is: joelharder4@gmail.com',
    'phone.txt': 'You can contact me on my mobile phone: (+1) 226-218-9358.',
    'linkedin.txt': 'https://www.linkedin.com/in/joel-harder/',
  },
  'hobbies/': {
    'sports.txt': 'I go rock climbing 3 days a week and play intramural dodgeball at university',
    'video-game.txt': 'I play a lot of different games, but my current favourite is Baldurs Gate 3.',
  },
}

const useTerminal = () => {
  const [terminalRef, setDomNode] = useState();
  const setTerminalRef = useCallback((node) => setDomNode(node), []);

  const [history, setHistory] = useState([]);
  const [currentDir, setCurrentDir] = useState('~/');

  /**
   * Scroll to the bottom of the terminal when window is resized
   */
  useEffect(() => {
    const windowResizeEvent = () => {
      terminalRef?.scrollTo({
        top: terminalRef?.scrollHeight ?? 99999,
        behavior: 'smooth',
      });
    };
    window.addEventListener('resize', windowResizeEvent);

    return () => {
      window.removeEventListener('resize', windowResizeEvent);
    };
  }, [terminalRef]);

  /**
   * Scroll to the bottom of the terminal on every new history item
   */
  useEffect(() => {
    terminalRef?.scrollTo({
      top: terminalRef?.scrollHeight ?? 99999,
      behavior: 'smooth',
    });
  }, [history, terminalRef]);

  const pushToHistory = useCallback((item) => {
    setHistory((old) => [...old, item]);
  }, []);

  /**
   * Write text to terminal
   * @param content The text to be printed in the terminal
   * @param delay The delay in ms before the text is printed
   * @param executeBefore The function to be executed before the text is printed
   * @param executeAfter The function to be executed after the text is printed
   */
  const pushToHistoryWithDelay = useCallback(
    ({
       delay = 0,
       content,
     }) =>
      new Promise((resolve) => {
        setTimeout(() => {
          pushToHistory(content);
          return resolve(content);
        }, delay);
      }),
    [pushToHistory]
  );

  const resetTerminal = useCallback(() => {
    setHistory([]);
  }, []);




  const getDirectory = useCallback((path) => {
    const cleanPath = path?.replace(/^~\//, '');
    const pathParts = cleanPath.split('/').filter(Boolean);
    let dir = files;

    for (const part of pathParts) {
      dir = dir[`${part}/`];
      if (!dir) {
        return null;
      }
    }

    return dir;
  }, []);


  const getFile = useCallback((path) => {
    const cleanPath = path?.replace(/^~\//, '');
    const pathParts = cleanPath.split('/').filter(Boolean);
    const file = pathParts.pop();
    let dir = getDirectory(pathParts.join('/'));

    return dir[file];
  }, [getDirectory]);


  const changeDirectory = useCallback((dir) => {
    if (dir === '..') {

      if (currentDir === '~/') return;

      const newDir = currentDir.split('/').slice(0, -2).join('/') + '/';
      setCurrentDir(newDir || '~/');

    } else {

      const newDir = currentDir + dir + '/';
      const directory = getDirectory(newDir);
      if (directory) {
        setCurrentDir(newDir);
      } else {
        pushToHistory(`cd: ${dir}: No such directory`);
      }
    }
  }, [getDirectory, currentDir, pushToHistory]);



  const listDirectory = useCallback(() => {
    const directory = getDirectory(currentDir);
    if (!directory) {
      console.error('Invalid directory');
      return;
    }

    const content = Object.keys(directory);
    return content.length ? content : 'No files or directories';
  }, [getDirectory, currentDir]);



  const getFileContent = useCallback((filepath) => {
    const file = getFile(filepath);
    if (!file) {
      return `File '${filepath}' not found.`;
    }
    if (typeof(file) != 'string') {
      return `'${filepath}' is not a readable file.`;
    }

    return file;
  }, [getFile]);


  return {
    history,
    pushToHistory,
    pushToHistoryWithDelay,
    terminalRef,
    setTerminalRef,
    resetTerminal,
    currentDir,
    getDirectory,
    getFile,
    changeDirectory,
    listDirectory,
    getFileContent,
  };
};

export default useTerminal;