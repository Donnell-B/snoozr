import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function Modal(props: {
  text: {} | null | undefined;
  bodyText: any;
}) {
  const [showModal, setShowModal] = React.useState(false);
  const [fadeIn, setFadeIn] = React.useState(false);

  useEffect(() => {
    if (!showModal) return;
    setTimeout(() => {
      setFadeIn((prev) => !prev);
    }, 200);
  }, [showModal]);

  function fadeOut() {
    setFadeIn(false);
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  }

  return (
    <>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
        className="cursor-pointer text-cyan-400">
        {props.text}
      </a>
      {showModal ? (
        <div
          className={
            fadeIn
              ? "transition-opacity duration-500 opacity-100"
              : "transition-opacity duration-500 opacity-0"
          }>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between px-5 border-b border-solid border-gray-400 rounded-t">
                  <h2 className="text-3xl font-AzeretMono text-gray-500 my-auto">
                    {props.text}
                  </h2>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => fadeOut()}>
                    {/* <span className="bg-transparent text-gray-500 opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    </span> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: 48, height: 48 }}
                      fill="currentColor"
                      viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-20 flex-auto">
                  <p className="my-4 text-gray-500 text-lg leading-relaxed">
                    {props.bodyText}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-5 py-2 border-t border-solid border-gray-200 rounded-b">
                  {/* <button
                    className="bg-rose-600 text-white background-transparent font-bold font-AzeretMono uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button> */}
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black" />
        </div>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  text: PropTypes.string,
  bodyText: PropTypes.any,
};
