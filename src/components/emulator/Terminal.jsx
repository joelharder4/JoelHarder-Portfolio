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
    
    useEffect(() => {
        inputRef.current?.focus();
    });

    const focusInput = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    const handleInputChange = useCallback(
        (e) => {
            setInputValue(e.target.value);
        },
        []
    );

    const handleInputKeyDown = useCallback(
      (e) => {
        if (e.key === 'Enter') {
            pushToHistory(prompt + input);
            if (!input) return;

            const commandToExecute = commands?.[input.split(' ')[0].toLowerCase()];
            if (commandToExecute) {
                const args = input.split(' ').slice(1);
                commandToExecute?.(args);
            } else {
                commands?.['nocommand']?.();
            }
            setInputValue('');
        }
      },
      [commands, input, prompt, pushToHistory]
    );

    return (
        // the background image is 16:9 aspect ratio
        <div  onClick={focusInput} className="w-[1080px] h-[608px] bg-bash-terminal bg-no-repeat bg-cover font-ibm-mono overflow-y-hidden">
            <div className='text-white ml-10 my-[6px] text-sm'>
                <h2 className='select-none'>MINGW64:/c/Users/Joel</h2>
            </div>
            <div className='overflow-y-hidden max-h-[90%] mt-4 ml-4' ref={ref}>
                <div className='text-green-400 flex flex-col'>
                    {history.map((line, index) => (
                        <div key={`terminal-line-${index}-${line}`}>
                            {line}
                        </div>
                    ))}
                    <div className='flex'>
                        <p className='min-w-max'>{prompt}</p>
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
    );
});

export default Terminal;