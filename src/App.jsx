import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    console.log(text, " ", data);

    // add the new note
    const copytask = [...task];
    copytask.push({ text, data });

    // update state
    setTask(copytask);
    setText("");
    setData("");

    console.log(copytask);
  };

  return (
    <>
      <div className="min-h-screen bg-black flex flex-col items-center justify-start p-10">
        {/* ---------- Form Section ---------- */}
        <form
          onSubmit={submithandler}
          className="flex flex-col sm:flex-row gap-4 bg-yellow-50 shadow-md rounded-xl p-2 w-full max-w-2xl mb-10"
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Notes Heading"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <input
            value={data}
            onChange={(e) => setData(e.target.value)}
            type="text"
            placeholder="Write Details"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            type="submit"
            className="bg-green-500 scale-95 active:bg-red-800 hover:bg-amber-500 text-white font-semibold rounded-full px-6 py-2 transition-all duration-200"
          >
            Add Notes
          </button>
        </form>

        {/* ---------- Notes Section ---------- */}
        <div className="flex flex-wrap justify-center gap-6">
          {task.map((item, index) => (
            <div
              key={index}
              className="h-40 w-40 bg-gray-300 rounded-2xl p-4 shadow-md hover:scale-105 transition-all duration-200"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.text || "Untitled"}
              </h3>
              <p className="text-gray-700 text-sm">{item.data || "No details"}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
