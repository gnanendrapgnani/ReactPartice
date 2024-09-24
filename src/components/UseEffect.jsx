import { useEffect, useState } from "react";

const UseEffect = () => {
  // const [render, setRender] = useState("post");
  // const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerHeight);

  const handeleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handeleResize);
  });

  // console.log("notRender");

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${render}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  //   // console.log("Reder form useffect");
  // });

  return (
    <>
      <h1>First Example</h1>
      <p>to see uncommit in code</p>
      {/* <button
        onClick={() => {
          setRender("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          setRender("comments");
        }}
      >
        comments
      </button>
      <button
        onClick={() => {
          setRender("users");
        }}
      >
        users
      </button>
      <p>{render}</p>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })} */}

      <h1>Second Example</h1>
      <h3>{windowWidth}</h3>
    </>
  );
};

export default UseEffect;
