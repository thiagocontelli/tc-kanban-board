import { createContext, ReactNode, useContext, useState } from "react";
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

interface IKanbanContext {
  lists: IList[];
  addList(title: string): void;
}

interface KanbanContextProviderProps {
  children: ReactNode;
}

const KanbanContext = createContext({} as IKanbanContext)

export function KanbanContextProvider({ children }: KanbanContextProviderProps) {
  const [lists, setLists] = useState<IList[]>([
    {
      id: uuidv4(),
      title: 'To Do',
      cards: []
    }
  ])

  function addList(title: string) {
    const newList = {
      id: uuidv4(),
      title,
      cards: []
    }
    setLists(state => [...state, newList])
  }
  
  return (
    <KanbanContext.Provider 
      value={{
        lists,
        addList
      }}
    >
      {children}
    </KanbanContext.Provider>
  )
}

export function useKanban() {
  return useContext(KanbanContext)
}