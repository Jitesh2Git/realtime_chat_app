import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const ANIMALS = ["wolf", "bear", "hawk", "shark"];
const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymous-${word}-${nanoid(5)}`;
};

export const useUsername = () => {
  const [username, setUserName] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUserName(stored);
        return;
      }

      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUserName(generated);
    };

    main();
  }, []);

  return { username };
};
