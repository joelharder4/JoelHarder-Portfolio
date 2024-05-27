import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

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
      <h1 className='text-5xl text-center font-bold py-4'>
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

  const p = ({children}) => {
    return (
      <p className='text-lg'>
        {children}
      </p>
    );
  };

  const code = ({children}) => {
    return (
      <code className='bg-[#262626] p-1'>
        {children}
      </code>
    );
  };

  const blockquote = ({children}) => {
    return (
      <blockquote className='px-6 bg-[#444444] border-l-2'>
        {children}
      </blockquote>
    );
  };

  const pre = ({children}) => {
    return (
      <pre className='bg-[#262626] p-2'>
        {children}
      </pre>
    );
  };

  return <ReactMarkdown components={{ a: Link, h1: h1, h2: h2, h3: h3, p: p, code: code, blockquote: blockquote, pre: pre }} className={className + ' whitespace-pre-wrap font-[sans-serif]'}>{markdown}</ReactMarkdown>;
};

export default MarkdownReader;
