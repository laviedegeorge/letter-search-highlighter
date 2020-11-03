import React from "react";
import "./styles.css";

const txt =
  "Moment.js has been successfully used in millions projects, and we are happy to have contributed to making date and time better on the web. As of September 2020, Moment gets over 12 million downloads per week! However, Moment was built for the previous era of the JavaScript ecosystem. The modern web looks much different these days. Moment has evolved somewhat over the years, but it has essentially the same design as it did when it was created in 2011. Given how many projects depend on it, we choose to prioritize stability over new features.";

const highLightText = (value, text) => {
  let query = new RegExp(`(${value})`, "gmi");
  let newtext = text.replace(/(<span>|<\/span>)/gim, "");
  let highLightedText = newtext.replace(
    query,
    `<span class="coloured">$1</span>`
  );
  return highLightedText;
};

export default function App() {
  const [value, setValue] = React.useState("");
  const [text, setText] = React.useState(txt);

  React.useEffect(() => {
    const newText = highLightText(value, txt);
    setText(newText);
  }, [value]);

  return (
    <div className="App h-screen bg-gray-800 text-white font-mono flex flex-col items-center">
      <h1 className="w-full text-center font-bold text-2xl border-b py-4">
        Letter Search highlighter
      </h1>
      <div className="sm:w-screen lg:w-1/2 flex flex-col items-center mt-3 p-4">
        <input
          type="text"
          placeholder="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="text-gray-800 px-2 py-2 rounded mb-3"
        />
        <p 
          dangerouslySetInnerHTML={{ __html: text }} 
          className="text-justify"
        ></p>
      </div>
    </div>
  );
}
