/* eslint-disable react/display-name */
import {forwardRef, useCallback, useEffect, useRef, useState} from 'react';

const Terminal = forwardRef(
  (props, ref) => {
    const {
        history = [],
        commands = {},
        prompt = '~/  $ ',
        pushToHistory,
    } = props;

    const inputRef = useRef();
    const [input, setInputValue] = useState('');
    const [running, setRunning] = useState(false);
    const [cmdHistory, setCmdHistory] = useState([]);
    const [cmdHistoryIndex, setCmdHistoryIndex] = useState(-1);
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);
    const [autocompleteIndex, setAutocompleteIndex] = useState(0);
    
    useEffect(() => {
        inputRef.current?.focus();
    });

    useEffect(() => {
        inputRef.current?.setSelectionRange(
            inputRef.current?.value?.length,
            inputRef.current?.value?.length
        );
    }, [cmdHistoryIndex]);

    const focusInput = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    const handleInputChange = useCallback(
        (e) => {
            if (running) return;
            const newInput = e.target.value;
            setInputValue(newInput);

            const options = Object.keys(commands).filter((cmd) => {return cmd.startsWith(newInput)});
            setAutocompleteOptions(options);
            setAutocompleteIndex(0);
        },
        [running, commands]
    );

    // This needs to get broken down into smaller useCallback functions
    const handleInputKeyDown = useCallback(
      async (e) => {
        if (running) return;
        if (e.key === 'Enter') {

            e.preventDefault();
            pushToHistory(prompt + input);
            if (!input) return;

            const commandToExecute = commands?.[input.split(' ')[0].toLowerCase()];
            setRunning(true);
            setInputValue('');
            if (commandToExecute) {
                const args = input.split(' ').slice(1);
                await commandToExecute?.(args);
            } else {
                commands?.['nocommand']?.();
            }
            setCmdHistory((old) => {return [input, ...old]});
            setCmdHistoryIndex(-1);
            setRunning(false);

        } else if (e.key === 'ArrowUp') {

            e.preventDefault();
            if (cmdHistory.length <= 0) return;
            if (cmdHistoryIndex + 1 >= cmdHistory.length) return;

            setInputValue(cmdHistory[cmdHistoryIndex + 1]);
            setCmdHistoryIndex((old) => {return old + 1});

        } else if (e.key === 'ArrowDown') {

            e.preventDefault();
            if (cmdHistory.length <= 0) return;
            if (cmdHistoryIndex <= 0) {
                setInputValue('');
                setCmdHistoryIndex(-1);
                return;
            }

            setInputValue(cmdHistory[cmdHistoryIndex - 1]);
            setCmdHistoryIndex((old) => {return old - 1});

        } else if (e.key === 'Tab') {

            e.preventDefault();
            if (!input) return;
            if (autocompleteOptions.length === 0) return;
            
            setInputValue(autocompleteOptions[autocompleteIndex]);
            setAutocompleteIndex((old) => {return (old + 1) % autocompleteOptions.length});
        }
      },
      [commands, input, prompt, pushToHistory, running, cmdHistory, cmdHistoryIndex, autocompleteOptions, autocompleteIndex]
    );

    return (<>
        {/* the background image is 16:9 aspect ratio*/}
        <div onClick={focusInput} className="w-full h-[100vh] md:w-[768px] md:h-[432px] lg:w-[1024px] lg:h-[576px] xl:w-[1280px] xl:h-[720px] bg-black md:bg-bash-terminal md:bg-no-repeat md:bg-cover font-ibm-mono overflow-y-hidden mt-[-4rem] md:mt-0  text-xs lg:text-sm">
            <div className='hidden md:block text-white md:ml-6 lg:ml-10 xl:ml-12  md:my-[4px] lg:my-[6px] xl:my-[8px]'>
                <h2 className='select-none'>MINGW64:/c/Users/Joel</h2>
            </div>
            <div className='overflow-y-scroll no-scrollbar max-h-[90%] max-w-[95%] mt-4 ml-4' ref={ref}>
                <div className='text-green-400 flex flex-col'>
                    {history.map((line, index) => (
                        <div key={`terminal-line-${index}-${line}`}>
                            {line}
                        </div>
                    ))}
                    <div className='flex'>
                        <p className='min-w-max'>{running ? '' : prompt}</p>
                        <div className="text-white flex items-center pl-[0.65rem] pr-12 w-full">
                            <input
                                className='flex bg-transparent border-none w-full focus:outline-none'
                                type='text'
                                label='Command Line'
                                value={input}
                                ref={inputRef}
                                onKeyDown={handleInputKeyDown}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
});

export default Terminal;