import React, { useState } from "react";
import StyledComponents from "./components/StyledComponents/StyledComponents";
import TodoList from "./components/TodoList/TodoList";
import MUI from "./components/MaterialUI/MUI";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/MaterialUI/theme";

function App(props) {
  return (
    <div>
      {/* <TodoList /> */}
      {/* <StyledComponents /> */}
      <ThemeProvider theme={theme}>
        <MUI />
      </ThemeProvider>
    </div>
  );
}

export default App;
