import React, {useCallback, useEffect, useState} from 'react';


const files = {
  'skills/': {
    'programming-languages.txt': 'I am most experienced with JavaScript and TypeScript, but I have also used Python, Java, and PHP.',
    'web-development.txt': 'I have experience with both front-end and back-end web development and I love both, but I usually prefer front-end.',
    'frameworks.txt': "I've used React.js framework in most projects, usually with Tailwind CSS. I also have used frameworks like Next.js and Spring Boot in the past."
  },
  'experience/': {
    'education.txt': "I am currently completing a Bachelor's degree in Computer Science at the University of Guelph. I started in 2021 and I am expected to graduate in May 2026.",
    'work/': {
      'tulip-retail.txt': 'I worked at Tulip Retail as a Software Developer Co-op in the Fall of 2023 (4 months). I worked on the checkout team which mostly deals with payment processing and helped to develop new features for the Tulip Retail mobile app and web portal. I did the full-stack development for the features I worked on, but I enjoyed developing the front-end in React.js the most.',
    },
  },
  'contact/': {
    'email.txt': 'My email address is joelharder4@gmail.com',
    'phone.txt': 'You can contact me on my mobile phone: (+1) 226-218-9358.',
    'linkedin.txt': 'https://www.linkedin.com/in/joel-harder/',
  },
  'hobbies/': {
    'sports.txt': 'I go Rock Climbing multiple days a week and play intramural dodgeball at university. Besides climbing, my favourite sport is Badminton.',
    'video-games.txt': 'I play a lot of different games, but my current favourite is Baldurs Gate 3.',
    'board-games.txt': 'I love board games, my favourite is Settlers of Catan, but I will play anything. I own every expansion for Catan except for the latest New Engergies expansion.',
    'tabletop.dnd': "I regularly play Dungeons and Dragons with my friends, I have been a DM in the past but I am currently a player. My favourite character that I have played is a delusional wood elf ranged named Zyvan Woodfoot, who insists that he should be called 'The Dragon Slayer' despite never having killed a dragon. He doesn't even do it as a joke, he genuinely believes his life's purpose is to kill all dragons.",
    'mods.txt': 'I love modding games, I have made mods for Hearts of Iron IV, Sid Meyers Civilization 6, Stellaris, and more!',
  },
  'pets/': {
    'ponyo.txt': 'I have a dog named Ponyo, she is a 14 year old (as of Jan 2025) shorkie and loves to cuddle. If you have your own pet, I would love to see then but I am sorry to say that Ponyo will always be cuter.',
    'ponyo.jpg': <img src='img/ponyo_silly.jpg' alt='A very silly picture of a very silly girl.'/>
  },
  'ai-music/': {
    'cooked.mp3': <source src='sounds/cooked.mp3' type='audio/mpeg'/>,
    'bhaals-chosen.mp3': <source src='sounds/bhaals-chosen.mp3' type='audio/mpeg'/>,
    'joe-sawada.mp3': <source src='sounds/joe-sawada.mp3' type='audio/mpeg'/>,
    'myron-invasion.mp3': <source src='sounds/myron-invasion.mp3' type='audio/mpeg'/>,
    'grilled-cheese-sussy-fish-sandwich.mp3': <source src='sounds/grilled-cheese-sussy-fish-sandwich.mp3' type='audio/mpeg'/>,
    'joel-vs-docker.mp3': <source src='sounds/joel-vs-docker.mp3' type='audio/mpeg'/>,
    'spooky-chess.mp3': <source src='sounds/spooky-chess.mp3' type='audio/mpeg'/>,
    'five-lines-of-code.mp3': <source src='sounds/five-lines-of-code.mp3' type='audio/mpeg'/>,
    'the-among-us-man.mp3': <source src='sounds/the-among-us-man.mp3' type='audio/mpeg'/>,
    'we-take-it-to-the-max.mp3': <source src='sounds/we-take-it-to-the-max.mp3' type='audio/mpeg'/>,
    'echoes-of-joel.mp3': <source src='sounds/echoes-of-joel.mp3' type='audio/mpeg'/>,
  }
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
  const pushToHistoryWithDelay = useCallback((content, delay = 0) =>
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
    const segments = dir?.split('/');

    if (segments?.[segments?.length - 1] === '') {
      segments.pop();
    }
    let dirCopy = currentDir;

    for (const segment of segments) {
      if (segment.length === 0) {

        pushToHistory(`No such directory '${dir}'`);
        return;

      } else if (segment === '..') {
        if (dirCopy === '~/') {
          pushToHistory(`Can not go above root directory.`);
          return;
        }

        const newDir = dirCopy.split('/').slice(0, -2).join('/') + '/';
        dirCopy = newDir || '~/';

      } else {

        const newDir = dirCopy + segment + '/';
        const directory = getDirectory(newDir);
        if (directory) {
          dirCopy = newDir;
        } else {
          pushToHistory(`No such directory '${dir}'`);
          return;
        }
      }
    }
    setCurrentDir(dirCopy);
  }, [getDirectory, currentDir, setCurrentDir, pushToHistory]);



  const listDirectory = useCallback((targetDir = currentDir) => {
    const directory = getDirectory(targetDir);
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

    return file;
  }, [getFile]);



  const getAllFileContents = useCallback((targetDir = currentDir) => {
    const dir = getDirectory(targetDir);
    if (!dir) {
      return 'Invalid directory';
    }
    let result = '';
    for (const file in dir) {
      if (typeof(dir[file]) != 'string') {
        continue;
      }
      result += `${file}:\n`;
      result += getFileContent(targetDir + file) + '\n\n';
    }

    return result;
  }, [getFileContent, currentDir, getDirectory]);



  const isTextFile = useCallback((fileName) => {
    if (fileName.endsWith('.txt') || fileName.endsWith('.dnd')) {
      return true;
    }
    return false;
  }, []);

  const isAudioFile = useCallback((fileName) => {
    if (fileName.endsWith('.mp3')) {
      return true;
    }
    return false;
  }, []);



  const removeDescendantsByType = (element, type) => {
    if (!React.isValidElement(element)) {
      return element;
    }

    const filteredChildren = React.Children.map(element.props.children, (child) => {
      return child && (child.type === type || child.type?.displayName === type) ? undefined : removeDescendantsByType(child, type);
    });

    return React.cloneElement(element, { ...element.props, children: filteredChildren });
  }



  const removeComponentTypeFromHistory = (type) => {
    const filteredHistory = history.map((item) => {
      return removeDescendantsByType(item, type);
    }).filter(item => item !== undefined);
    
    setHistory(filteredHistory);
  }


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
    getAllFileContents,
    isTextFile,
    isAudioFile,
    removeDescendantsByType,
    removeComponentTypeFromHistory,
  };
};

export default useTerminal;