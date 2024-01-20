import { createContext, useContext } from "react";

interface categoryProps {
  id: number;
  name: string;
  text_color: string;
  background_color: string;
}

interface dataProps {
  large: string;
  id: number;
  image: string;
  author: string;
  month: string;
  title: string;
  paragraph: string;
  email: string;
  category?: categoryProps[];
}

interface ContextInt {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
  save: boolean;
  setSave: (save: boolean) => void;
  done: boolean;
  setDone: (done: boolean) => void;
  email: boolean;
  setEmail: (email: boolean) => void;
  button: boolean;
  setButton: (button: boolean) => void;
  data: dataProps[];
  setData: (data: dataProps[]) => void;
}

export const Mycontext = createContext<ContextInt | null>(null);

export function Context() {
  const context = useContext(Mycontext);

  if (context === undefined) {
    throw new Error("useUserContext must be used with a MyContext");
  }

  return context;
}
