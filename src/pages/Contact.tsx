import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";

interface ContactProps {}

declare global {
  interface Window {
    Pageclip?: any;
  }
  interface Object {
    data?: string;
  }
}

const Contact: React.FunctionComponent<ContactProps> = () => {
  function handleFormSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (topic === "") {
      window.alert("Please enter a valid Topic!");
      return;
    }
    if (email === "") {
      window.alert("Please enter a valid e-mail address!");
      return;
    }
    if (message === "") {
      window.alert("Please enter a message!");
      return;
    }

    //Submit stuff
    submitForm();
    clearForm();
    setSubmit(true);
  }

  const [topic, setTopic] = useState("feedback");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(true);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const [userOffline, setUserOffline] = useState(false);
  const [formDisabled, setFormDisabled] = useState(false);

  const [pageClip, setPageClip] = useState<any>(null);

  function updateTopicState(e: ChangeEvent<HTMLSelectElement>) {
    setTopic(e.target.value);
  }
  function updateEmailState(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function updateMessageState(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }

  function clearForm() {
    setEmail("");
    setMessage("");
    // setTopic("");
  }

  function showSuccessMsgOnTimeout() {
    setShowSuccessMsg(true);
    setTimeout(() => {
      setShowSuccessMsg(false);
    }, 5000);
  }

  function submitForm() {
    const data = { topic: topic, email: email, message: message };
    if (pageClip === null || pageClip === undefined) return;

    pageClip.send(
      "PsXzs3vQ9Q9PDTiASWDdnvg3xWqSEi5q",
      "contact-form",
      data,
      function (error: Error, response: Object) {
        if (error !== null) console.log(error.message);
        error !== null ? setShowErrorMsg(true) : setShowErrorMsg(false);
        response["data"] === "ok"
          ? showSuccessMsgOnTimeout()
          : setShowErrorMsg(true);
        setSubmit(false);
      }
    );
  }

  function scriptLoaded() {
    const PageClip = window["Pageclip"];
    setPageClip(PageClip);
    setSubmit(false);
  }

  useEffect(() => {
    var online = navigator.onLine;
    if (!online) {
      //do some shit
      setUserOffline(true);
      setFormDisabled(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://s.pageclip.co/v1/pageclip.js";
    script.async = true;
    script.onload = () => scriptLoaded();
    document.body.appendChild(script);

    function remove(script: HTMLScriptElement) {
      document.body.removeChild(script);
    }

    return remove(script);
  }, []);

  return (
    <>
      <p className="text-white grow-0 shrink font-RedHat">
        <span className="text-[9vh] underline underline-offset-1">Contact</span>
      </p>

      {userOffline && (
        <div className="bg-red-600 border-2 border-white min-w-[320px] w-[40vw] h-max">
          <p className="contact_desc_text">
            You are offline! This form won't work until you're back online.
          </p>
        </div>
      )}
      <div className="bg-gray-600 bg-opacity-40 border-2 border-white min-w-[320px] w-[40vw] h-max">
        <p className="contact_desc_text">
          If you would like to contact me regarding this app to provide
          feedback, report a bug, or to just say hi please do with the form
          below!
        </p>
      </div>
      <div className="flex flex-col w-full items-center mb-12">
        <div className="bg-gray-600 bg-opacity-40 border-2 border-white min-w-[320px] w-[40vw] h-max">
          <p className="alt_title_text">Message Form</p>
          <form className="flex flex-col w-full gap-4 m-0 px-4 py-2   grow shrink">
            <div className="flex flex-row flex-nowrap  grow shrink items-center">
              <label className="form-label-text pr-1">Topic:</label>
              <select
                id="cars"
                name="cars"
                className="form-input-styles w-full h-max"
                onChange={(e) => updateTopicState(e)}
                value={topic}
                disabled={formDisabled}>
                <option value="feedback">Feedback</option>
                <option value="bugReport">Bug Report</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-row flex-nowrap  grow shrink items-center">
              <label className="form-label-text pr-1 whitespace-nowrap">
                Your Email:
              </label>
              <input
                type={"email"}
                className="form-input-styles w-full h-max"
                value={email}
                onChange={(e) => updateEmailState(e)}
                required
                disabled={formDisabled}
              />
            </div>
            <div className="flex flex-col grow shrink text-left">
              <label className="form-label-text">Your Message:</label>
              <textarea
                className="form-input-styles grow min-h-[19vh] p-1"
                value={message}
                onChange={(e) => updateMessageState(e)}
                disabled={formDisabled}
                required
              />
            </div>
            <button
              type="submit"
              className="form-submit-button h-fit "
              onClick={(e) => handleFormSubmit(e)}
              disabled={submit}>
              Submit
            </button>
            {showSuccessMsg ? (
              <div className="flex flex-col grow shrink text-center bg-green-500 rounded-lg">
                Sent!
              </div>
            ) : (
              ""
            )}

            {showErrorMsg ? (
              <div className="flex flex-col grow shrink text-center bg-red-500 rounded-lg">
                Error!
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
