import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export interface ICard {
  id: string,
  title: string
}

export interface IList {
  id: string;
  title: string;
  cards: ICard[]
}

export function useKanban() {
  const [lists, setLists] = useState<IList[]>([
    {
      id: uuidv4(),
      title: 'To Do',
      cards: []
    }
  ])
  
  return {
    lists
  }
}