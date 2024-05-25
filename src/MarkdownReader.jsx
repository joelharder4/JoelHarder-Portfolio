import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownReader = ({ filePath, className = '' }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then(response => response.text())
      .then(text => {console.log(text);setMarkdown(text)})
  }, [filePath]);

  return <ReactMarkdown className={className + ' whitespace-pre-wrap font-[sans-serif] [&_h1]:text-5xl [&_h2]:text-3xl [&_h3]:text-2xl [&_p]:text-lg'}>{markdown}</ReactMarkdown>;
};

export default MarkdownReader;
