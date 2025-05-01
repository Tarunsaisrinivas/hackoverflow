import { useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

export default function Timer() {
  const [timerState, setTimerState] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const storedTimerState = localStorage.getItem("timerState");
    const storedStartTime = localStorage.getItem("startTime");
    const storedTimeLeft = localStorage.getItem("timeLeft");

    if (storedTimerState && storedStartTime && storedTimeLeft) {
      const currentTime = Math.floor(Date.now() / 1000);
      const elapsedTime = currentTime - parseInt(storedStartTime);

      if (
        storedTimerState === "running" &&
        elapsedTime < parseInt(storedTimeLeft)
      ) {
        setTimerState("running");
        setTimeLeft(parseInt(storedTimeLeft) - elapsedTime);
      } else if (elapsedTime >= parseInt(storedTimeLeft)) {
        setTimerState("completed");
        setTimeLeft(0);
      }
    }

    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    let interval;

    if (timerState === "running" && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timerState === "running" && timeLeft === 0) {
      setTimerState("completed");
      localStorage.removeItem("timerState");
      localStorage.removeItem("startTime");
      localStorage.removeItem("timeLeft");
    }

    return () => clearInterval(interval);
  }, [timerState, timeLeft]);

  const startTimer = () => {
    setTimerState("running");
    setShowConfetti(true);

    const startTime = Math.floor(Date.now() / 1000);
    localStorage.setItem("startTime", startTime.toString());
    localStorage.setItem("timeLeft", (24 * 60 * 60).toString());
    localStorage.setItem("timerState", "running");

    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-5 py-10 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Info Section */}
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <div className="flex items-center gap-5 mb-6">
          <a href="/" className="flex items-center">
            <img
              src="/logo1.png"
              width={95}
              height={95}
              className="rounded-lg filter brightness-125 drop-shadow-lg"
              alt="Logo"
            />
          </a>
          <div className="ml-4 text-white">
            <p className="text-5xl font-extrabold tracking-wider">
              S.R.K.R Coding Club
            </p>
          </div>
        </div>
        <h1 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
          HACKOVERFLOW~2K24
        </h1>
      </div>

      {/* Timer Section */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="p-8 text-center bg-gray-800 border-2 border-gray-500 shadow-2xl rounded-3xl">
          {timerState === "idle" && (
            <>
              <h1 className="mb-6 text-4xl font-extrabold text-white">
                24 Hour Timer
              </h1>
              <button
                onClick={startTimer}
                className="px-12 py-4 font-bold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:scale-105">
                Start Timer
              </button>
            </>
          )}
          {timerState === "running" && (
            <div className="flex flex-col items-center justify-center space-y-6 font-bold md:flex-row md:space-y-0 md:space-x-8">
              {/* Hours */}
              <div className="flex flex-col items-center w-40 py-6 text-center bg-gray-700 shadow-lg rounded-xl">
                <span className="text-5xl text-cyan-400">
                  {Math.floor(timeLeft / 3600)}
                </span>
                <span className="text-lg text-gray-200">Hours</span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center w-40 py-6 text-center bg-gray-700 shadow-lg rounded-xl">
                <span className="text-5xl text-pink-600">
                  {Math.floor((timeLeft % 3600) / 60)}
                </span>
                <span className="text-lg text-gray-200">Minutes</span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center w-40 py-6 text-center bg-gray-700 shadow-lg rounded-xl">
                <span className="text-5xl text-orange-600">
                  {timeLeft % 60}
                </span>
                <span className="text-lg text-gray-200">Seconds</span>
              </div>
            </div>
          )}
          {timerState === "completed" && (
            <div className="text-4xl font-extrabold text-red-400 animate-pulse">
              Time Completed!
            </div>
          )}
        </div>
        {showConfetti && (
          <ReactConfetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            recycle={false}
            numberOfPieces={400}
            gravity={0.4}
          />
        )}
      </div>
    </div>
  );
}
