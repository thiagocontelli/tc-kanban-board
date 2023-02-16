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
  deleteList(id: string): void;
  addCard(title: string, listId: string): void;
  clearList(listId: string): void;
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

  function deleteList(id: string) {
    const listsCopy = [...lists]
    const newLists = listsCopy.filter(list => list.id !== id)
    setLists(newLists)
  }

  function addCard(title: string, listId: string) {
    const listsCopy = [...lists]
    const newLists = listsCopy.map(list => {
      if (list.id === listId) {
        return { ...list, cards: [ ...list.cards, { id: uuidv4(), title } ] }
      }
      return list
    })
    setLists(newLists)
  }

  function clearList(listId: string) {
    const listsCopy = [...lists]
    const newLists = listsCopy.map(list => {
      if (list.id === listId) {
        return { ...list, cards: [] }
      }
      return list
    })
    setLists(newLists)
  }
  
  return (
    <KanbanContext.Provider 
      value={{
        lists,
        addList,
        deleteList,
        addCard,
        clearList
      }}
    >
      {children}
    </KanbanContext.Provider>
  )
}

export function useKanban() {
  return useContext(KanbanContext)
}