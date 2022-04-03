import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-white grow-0 shrink font-RedHat">
          <span className="text-[9vh] underline underline-offset-1">About</span>
        </p>
        <div className="flex flex-col grow h-full shrink min-w-[320px] w-[70vw] text-white font-OpenSans border-2 border-white gap-5 p-4 bg-gray-600 bg-opacity-40">
          <p>
            A few years ago I found out about sleep cycles & how waking up at
            the right time can have you feeling less tired and groggy.
            Calculating and planning the best times to fall asleep & wake up can
            have a big effect on how you feel. I've used other calculators to
            figure out times but they were't as user-friendly or useful so I
            though I'd make my own!
          </p>
          <p>
            I wanted to make sure this websitew was mobile friendly & available
            offline, which it is! So feel free to install it. I've also added
            some basic options that you can change and may expand on this in the
            future.
          </p>
          <p>
            This website was a small project I put together to test my skills in
            JavaScript & React. I may work to improve & expand it and add more
            features in the future. Reporting feedback & any bug reports would
            greatly be appreciated! You can do so via the{" "}
            <Link to="/contact" className="underline text-cyan-600">
              Contact Page.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
