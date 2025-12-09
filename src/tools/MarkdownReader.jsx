import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Image } from 'antd';

const MarkdownReader = ({ filePath, className = '' }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then(response => response.text())
      .then(text => {setMarkdown(text)})
  }, [filePath]);

  const Link = ({children, href}) => {
    return (
      <a href={href} target="_blank" rel='noreferrer' className='underline'>
        {children}
      </a>
    );
  };

  const h1 = ({children}) => {
    return (
      <h1 className='text-5xl font-bold py-4'>
        {children}
      </h1>
    );
  };

  const h2 = ({children}) => {
    return (
      <h2 className='text-3xl font-semibold pt-6'>
        {children}
      </h2>
    );
  };

  const h3 = ({children}) => {
    return (
      <h3 className='text-2xl font-semibold pt-6'>
        {children}
      </h3>
    );
  };

  const h4 = ({children}) => {
    return (
      <h4 className='text-xl font-semibold mb-[-18px]'>
        {children}
      </h4>
    );
  };

  const p = ({children}) => {
    console.log(children[0])
    if ( typeof children === 'object' && (children?.key?.startsWith("img") || children[0]?.key?.startsWith("img"))) {
      return <>{children}</>;
    }
    return <p className="md:text-lg text-sm text-justify">{children}</p>;
  };

  const code = ({children}) => {
    return (
      <code className='bg-gray-500 text-white p-1 rounded-sm text-wrap break-normal leading-5'>
        {children}
      </code>
    );
  };

  const blockquote = ({children}) => {
    return (
      <blockquote className='px-6 bg-gray-100 border-l-4 border-gray-400'>
        {children}
      </blockquote>
    );
  };

  const pre = ({children}) => {
    return (
      <pre className='bg-gray-500 p-2 overflow-y-scroll no-scrollbar md:text-lg text-sm'>
        {children}
      </pre>
    );
  };

  const img = ({src, alt, title}) => {
    const widthMatch = title ? title.match(/width=(\d+)/) : null;
    const width = widthMatch ? parseInt(widthMatch[1]) : null;
    const noOutline = title && title?.includes('no-outline') ? true : false;
    let imgClass = "my-2 mx-auto rounded bg-white overflow-hidden [&>.ant-image]:!block";

    // if (width) imgClass += ` w-[${width}%]`;
    if (noOutline) imgClass += " border-0 shadow-none bg-transparent";
    else imgClass += " border border-gray-200 shadow-sm";

    return (
      <div className={imgClass} style={width ? { width: `${width}%` } : {}}>
        <Image
          src={src}
          alt={alt}
          className="!block w-full"
        />
      </div>
    );
  };

  const ol = ({children}) => {
    return (
      <ol className='list-decimal list-inside leading-3'>
        {children}
      </ol>
    );
  }

  const ul = ({children}) => {
    return (
      <ul className='list-decimal list-inside leading-3'>
        {children}
      </ul>
    );
  }

  const li = ({children}) => {
    return (
      <li className='leading-normal md:text-lg text-sm'>
        {children}
      </li>
    );
  }

  return (
    <div className={className + ' whitespace-pre-wrap font-[sans-serif]'}>
      <ReactMarkdown 
        components={{ 
          a: Link, 
          h1: h1, 
          h2: h2, 
          h3: h3, 
          h4: h4, 
          p: p, 
          code: code, 
          blockquote: blockquote, 
          pre: pre, 
          img: img, 
          ol: ol, 
          ul: ul, 
          li: li 
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default React.memo(MarkdownReader);
