import { Box } from "@mui/material";
import { useKanban } from "../../hooks/useKanban";
import { List } from "../List";

export function Main() {
  const h = useKanban()
  
  return (
    <Box
      display="flex"
      overflow="auto"
      gap="3rem"
      minHeight="calc(100vh - 86px)"
      padding="2rem"
    >
      {h.lists.map((list) => (
        <List key={list.id} title={list.title} cards={list.cards} />
      ))}
    </Box>
  );
}
