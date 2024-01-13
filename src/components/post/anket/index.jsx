import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Anket({ poll: pollData }) {
  const [poll, setPoll] = useState(pollData);
  return (
    <div className="mt-3 grid ">
      {!poll.voted &&
        poll.answers.map((answer, index) => (
          <button
            onClick={() => {
              setPoll({
                ...poll,
                voted: true,
                votes: poll.votes + 1,
                answers: poll.answers.map((a) => {
                  if (a.id === answer.id) {
                    return {
                      ...a,
                      votes: a.votes + 1,
                      voted: true,
                    };
                  }
                  return a;
                }),
              });
            }}
            key={index}
            className=" gap-1 h-8 border border-[color:var(--color-primary)] text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-alpha)] transition-colors rounded-full text-[0.938rem] "
          >
            {answer.text}
          </button>
        ))}
      {poll.voted && (
        <div className="grid gap-1">
          {poll.answers.map((answer, index) => (
            <div
              key={index}
              className="h-8  flex items-center justify-between relative overflow-hidden rounded-md z-1"
            >
              <div
                className="absolute inset-0 -z-1 top-0 left-0 h-full  opacity-50 bg-[color:var(--color-base-secondary)]"
                style={{ width: (answer.votes / poll.votes) * 100 + "%" }}
              ></div>
              <span className="ml-2 relative flex items-center  gap-0.5">
                {answer.text}
                {answer.voted && (
                  <svg
                    viewBox="0 0 24 24"
                    className="text-[color:var(--color-base)]"
                    width={18.75}
                    height={18.75}
                    fill="currentColor"
                  >
                      <path d="M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z"/>
                  </svg>
                )}
              </span>
              <span className="relative">
                {((answer.votes / poll.votes) * 100).toFixed(1) + "%"}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="text-[color:var(--color-base-secondary)] mt-3 ">
        {poll.votes} oy 6 gün kaldı
      </div>
    </div>
  );
}
