import React, { MouseEvent } from "react";

interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
  function handleFormSubmit(e: MouseEvent<HTMLInputElement>) {
    e.preventDefault();
  }

  return (
    <>
      <p className="text-white grow-0 shrink font-RedHat">
        <span className="text-[9vh] underline underline-offset-1">Contact</span>
      </p>
      <div className="bg-gray-600 bg-opacity-40 border-2 border-white min-w-[320px] w-[40vw] h-max">
        <p className="alt_title_text">Message Form</p>
        Someehting somehting osmehtin
      </div>
      <div className="flex flex-col w-full items-center mb-12">
        <div className="bg-gray-600 bg-opacity-40 border-2 border-white min-w-[320px] w-[40vw] h-max">
          <p className="alt_title_text">Message Form</p>
          <form className="flex flex-col w-full gap-4 m-0 px-4 py-2   grow shrink">
            <div className="flex flex-row flex-nowrap  grow shrink items-center">
              <label className="form-label-text pr-1">Topic:</label>
              <input className="form-input-styles w-full h-max" />
            </div>
            <div className="flex flex-row flex-nowrap  grow shrink items-center">
              <label className="form-label-text pr-1 whitespace-nowrap">
                Your Email:
              </label>
              <input
                type={"email"}
                className="form-input-styles w-full h-max"
              />
            </div>
            <div className="flex flex-col grow shrink text-left">
              <label className="form-label-text">Your Message:</label>
              <textarea className="form-input-styles grow min-h-[19vh]" />
            </div>
            <input
              type="submit"
              className="form-submit-button"
              onClick={(e) => handleFormSubmit(e)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
