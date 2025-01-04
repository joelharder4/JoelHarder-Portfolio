import React, { useState, useEffect, useMemo } from 'react';
import Terminal from '../components/emulator/Terminal.jsx';
import useTerminal from '../tools/useTerminal.jsx';
import ViewFileModal from '../components/ViewFileModal.jsx';
import FullScreenGif from '../components/FullscreenGif.jsx';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton, Dialog, DialogActions, Button, DialogTitle, DialogContentText, DialogContent } from '@mui/material';


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
  const [popupName, setPopupName] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  const [gifSrc, setGifSrc] = useState(null);
  const [helpOpen, setHelpOpen] = useState(false);

  const terminalCommands = useMemo(() => ({
    'help': async (args) => {
      const commandDescriptions = (
        args[0] === '--secret' || args[0] === '-s'
      ) ? {
        'yippee': 'Yippee!!!',
        'obama': 'Grilled Cheese Obama Sandwich Singalong!',
        'explode': '💥 BOOM! 💥',
      } : {
        'help [--secret]': 'Shows a list of all supported commands.',
        'clear': 'Clears all previous commands in the terminal.',
        'ls': 'Lists all folders and files in the current directory.',
        'cd [dir]': 'Changes the current directory to [dir] if it exists. Parent directory is `..`',
        'pwd': 'Prints the current directory path.',
        'cat [file]': 'Prints the content of any text file [file]. Multiple files can be specified.',
        'catdir': 'Prints the content of all files in the current directory.',
        'view [file]': 'View the content of a file [file] in a new window. Supports image and text files.',
        '8ball [question]': 'Ask the magic 8-ball a question. [question] can be anything.',
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
      if (content.length === 0 || content === `File '${currentDir + args[0]}' not found.`) {
        pushToHistory(
          <div>{content}</div>
        );
        return;
      }
      setPopupName(args[0]);
      setPopupContent(content);
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
    'explode': () => {
      setGifSrc('/img/explosion.gif');
      pushToHistory(
        <div>💥💥💥</div>
      );
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



  return (<>
    <FullScreenGif src={gifSrc} onFinish={() => {setGifSrc(null)}}/>
    <ViewFileModal
      open={Boolean(popupContent)}
      onClose={() => setPopupContent(null)}
      title={popupName}
      fileContent={popupContent}
    />
    <div className="w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-row mx-auto justify-end items-center pt-28 xl:pt-16">
      <p>How does this work?</p>
      <IconButton onClick={() => {setHelpOpen(true)}}>
        <HelpIcon />
      </IconButton>
    </div>
    <div className='text-primary'>
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

    {/* help menu */}
    <Dialog
      fullWidth={true}
      maxWidth='md'
      open={helpOpen}
      onClose={() => setHelpOpen(false)}
    >
      <DialogTitle style={{fontSize: '2rem'}}>Frequently Asked Questions</DialogTitle>
      <DialogContent dividers>
        <h2 className="text-xl mb-4">What is the Command Terminal?</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>The command terminal is an interactive interface where you can type commands to perform specific actions, like navigating directories or viewing files. Whether you&apos;re on desktop or mobile, it is an interactive feature on this site that lets you explore and learn more about me in a creative way. To use the terminal, simply type any of the supported commands and press Enter.</DialogContentText>
        <DialogContentText>To see a list of supported commands, use the `<span className="font-bold">help</span>` command.</DialogContentText>

        
        <h2 className="text-xl mb-4 mt-8">How do I &quot;use&quot; a command?</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>Using a command is simple! Firstly, In the terminal, type the name of the command you want to use. Next, press Enter; this executes the command. Watch out for typos! Any extra letters or symbols before or after the command will make it so the terminal does not recognize the command.</DialogContentText>
        <DialogContentText style={{marginBottom: '0.4rem'}}>Some commands require additional information, called arguments. Arguments are extra pieces of information that tell the command what to work on. For example: `<span className="font-bold">cd foldername</span>` includes the argument &quot;<span className="font-bold">foldername</span>&quot;, which tells the `<span className="font-bold">cd</span>` command which folder to open. Some commands also have optional arguments. For instance, `<span className="font-bold">help</span>` can be run as is, or with the optional argument `<span className="font-bold">--secret</span>` to reveal hidden commands. When arguments start with one or two dashes (`-`), they are called &quot;flags&quot;. No matter what, the command name always comes first before any arguments or flags.</DialogContentText>
        <DialogContentText>If you&apos;re unsure about the arguments a command needs, try it without any, and the terminal may guide you with an error or default behavior.</DialogContentText>

        <h2 className="text-xl mb-4 mt-8">Basics of Navigating Folders</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>Folders are sometimes called Directories. To navigate through them:</DialogContentText>
        <ol className="list-decimal pl-4">
          <li><DialogContentText>List the available options: Start by using the `<span className="font-bold">ls</span>` command (a short form of the word `list`) to see all files and folders in your current location. Simply type `<span className="font-bold">ls</span>` in the terminal and press enter.</DialogContentText></li>
          <li><DialogContentText>Enter a folder: Use the cd command (which stands for `change directory`) followed by the folder name separated by a space (e.g., `<span className="font-bold">cd foldername</span>`) and press enter.</DialogContentText></li>
          <li><DialogContentText>Track your location: If you get lost, type `<span className="font-bold">pwd</span>` (which stands for `print working directory`) and press enter to display your current path.</DialogContentText></li>
        </ol>

        <h2 className="text-xl mb-4 mt-8">How do I Go Back to the Previous Folder?</h2>
        <DialogContentText>If you want to return to the folder you were in before, use the exact command `<span className="font-bold">cd ..</span>` to go up one level in the folder structure. Do not replace the `..` with a folder name, it must be exactly two periods. For example, if you&apos;re inside the folder called &quot;work/&quot; and type <span className="font-bold">cd ..</span>, you&apos;ll go back to the parent directory which is &quot;experience/&quot;. If you&apos;re unsure of your location, type `<span className="font-bold">pwd</span>` and press enter to check.</DialogContentText>

        <h2 className="text-xl mb-4 mt-8">How do I open files?</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>There are three ways to open files, depending on your goal and the type of file:</DialogContentText>
        <ol className="list-decimal pl-4">
          <li><DialogContentText><span className="font-bold">cat [file]</span>: Use this command to print the content of a single text file in the terminal. It only works for text-based files.</DialogContentText></li>
          <li><DialogContentText><span className="font-bold">catdir</span>: This prints the contents of all text files in the current directory at once. This is a good choice if there are lots of small text files in a folder, or if text file names are long and slow to type out.</DialogContentText></li>
          <li><DialogContentText><span className="font-bold">view [file]</span>: Opens the file in a new window. Works for all file types. Use this command for files that require a more detailed or visual view.</DialogContentText></li>
        </ol>

        <h2 className="text-xl mb-4 mt-8">How Do I Undo?</h2>
        <DialogContentText style={{marginBottom: '0.4rem'}}>Unlike some apps, terminals don&apos;t have an &quot;undo&quot; button to reverse commands. However, don&apos;t worry! None of the commands here modify or delete anything, so there&apos;s no risk of breaking something.</DialogContentText>
        <DialogContentText>If you feel lost or want to return to the starting point, just use the `pwd` command to see where you are, and use `<span className="font-bold">cd</span>` commands to navigate back. It&apos;s always possible to retrace your steps.</DialogContentText>

        </DialogContent>

        <DialogActions>
          <Button onClick={() => {setHelpOpen(false)}}>Close</Button>
        </DialogActions>
    </Dialog>
  </>);
};

export default About;