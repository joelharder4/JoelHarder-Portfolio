/* eslint-disable react/display-name */
import {forwardRef, useCallback, useEffect, useRef} from 'react';

const Terminal = forwardRef(
  (props, ref) => {
    const {
      history = [],
      promptLabel = '$',
    } = props;

    /**
     * Focus on the input whenever we render the terminal or click in the terminal
     */
    const inputRef = useRef();
    useEffect(() => {
      inputRef.current?.focus();
    });

    const focusInput = useCallback(() => {
      inputRef.current?.focus();
    }, []);

    return (
        // the background image is 16:9 aspect ratio
        <div ref={ref} onClick={focusInput} className="w-[1080px] h-[608px] bg-bash-terminal bg-no-repeat bg-cover font-ibm-mono">
            <div className='text-white ml-10 mt-[5px] text-sm'>
                <h2>MINGW64:/c/Users/Joel</h2>
            </div>
            <div className='text-green-400 mt-4 ml-4 flex flex-col'>
                {history.map((line, index) => (
                    <div key={`terminal-line-${index}-${line}`}>
                        {line}
                    </div>
                ))}
                <div className='flex'>
                    <p className='min-w-max'>Users/Joel/ {promptLabel}</p>
                    <div className="text-white flex items-center pl-[1rem] pr-12 w-full">
                        <input
                            className='flex bg-transparent border-none w-full focus:outline-none'
                            type="text"
                            ref={inputRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Terminal;