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
    
    useEffect(() => {
        inputRef.current?.focus();
    });

    const focusInput = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    const handleInputChange = useCallback(
        (e) => {
            if (running) return;
            setInputValue(e.target.value);
        },
        [running]
    );

    const handleInputKeyDown = useCallback(
      async (e) => {
        if (running) return;
        if (e.key === 'Enter') {
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
            setRunning(false);
        }
      },
      [commands, input, prompt, pushToHistory, running, setRunning]
    );

    return (<>
        {/* the background image is 16:9 aspect ratio*/}
        <div onClick={focusInput} className="w-full h-[100vh] md:w-[768px] md:h-[432px] lg:w-[1024px] lg:h-[576px] xl:w-[1280px] xl:h-[720px] bg-black md:bg-bash-terminal bg-no-repeat bg-cover font-ibm-mono overflow-y-hidden mt-[-4rem] md:mt-0  text-xs lg:text-sm">
            <div className='hidden md:block text-white ml-10 my-[6px] text-sm'>
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
                                type="text"
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