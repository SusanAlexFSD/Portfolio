import { useEffect, useState } from "react";

const words = ["Full Stack Developer", "React Enthusiast", "Open Source Contributor"];

export default function ChangingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return <span>{words[index]}</span>;
}
