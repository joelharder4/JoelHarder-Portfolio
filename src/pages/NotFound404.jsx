import React from "react";

const NotFound404 = () => {
  return (
    <div className="font-['Lalezar'] text-primary-text bg-white h-[70vh] flex flex-col items-center justify-center">
        <img
            src="/img/bluemoji/disappearing.png"
            alt="Disappearing emoji"
            className="w-64 h-64 mb-6"
        />
        <h1 className="text-6xl font-extrabold mb-6">This is not the page you're looking for04.</h1>
        <p className="text-l text-center max-w-xl mb-6">
            Oh, you're cooked. Joel either ate this page, deleted it, or didn't have the advanced intellect that you do and never thought of making a page for this!
        </p>
    </div>
  );
};

export default NotFound404;