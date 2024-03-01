import { GitHub } from "@mui/icons-material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import {
  ButtonBase,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { evaluate } from "mathjs";
import { useState } from "react";

function App() {
  const [input, setInput] = useState<string>("");

  const handleInput = (value: string) => {
    if (input === "0" && "0,1,2,3,4,5,6,7,8,9".includes(value)) {
      setInput(input.slice(0, -1) + value);
      return;
    }
    if (/\.{2,}/.test(input + value) || /(\d+\.\d+\.)/.test(input + value)) {
      return;
    }
    if (
      /^0{2,}/.test(input + value) ||
      /[\+\-\*\/\s]0{2,}/.test(input + value)
    ) {
      return;
    }
    if (
      /\+{2,}/.test(input + value) ||
      /\-{2,}/.test(input + value) ||
      /\*{2,}/.test(input + value) ||
      /\/{2,}/.test(input + value) ||
      /[\*\/][\*\/\+\-]{2,}/.test(input + value) ||
      /[\+\-][\*\/]{1,}/.test(input + value)
    ) {
      return;
    }
    if (value === "C") {
      setInput("");
      return;
    }
    if (value === "Backspace") {
      setInput(input.slice(0, -1));
      return;
    }
    if (value === "=") {
      setInput(evaluate(input).toString());
      return;
    }
    setInput(input + value);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        placeItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container columns={{ xs: 1 }} direction={"row"}>
        <Grid item xs={1} height={"3.5em"} overflow={"hidden"}>
          <Typography
            fontSize={"2em"}
            textAlign={"right"}
            sx={{ float: "right" }}
          >
            {input.replace(/\*/g, "×").replace(/\//g, "÷")}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        columns={{ xs: 4 }}
        direction={"row"}
        textAlign={"center"}
      >
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("C")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>C</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("Backspace")}
            sx={{ width: "80px", height: "80px" }}
          >
            <BackspaceIcon />
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("%")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>%</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("/")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>÷</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("7")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>7</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("8")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>8</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("9")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>9</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("*")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>×</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("4")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>4</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("5")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>5</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("6")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>6</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("-")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>-</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("1")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>1</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("2")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>2</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("3")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>3</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("+")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>+</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1} sx={{ width: "80px", height: "80px" }}>
          <ButtonBase
            sx={{ width: "80px", height: "80px" }}
            href="https://github.com/Vjumpkung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography fontSize={"2em"}>
              <GitHub />
            </Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("0")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>0</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput(".")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>.</Typography>
          </ButtonBase>
        </Grid>
        <Grid item xs={1}>
          <ButtonBase
            onClick={() => handleInput("=")}
            sx={{ width: "80px", height: "80px" }}
          >
            <Typography fontSize={"2em"}>=</Typography>
          </ButtonBase>
        </Grid>
      </Grid>
      <Typography fontSize={"0.8em"} textAlign={"center"}>
        created by vjumpkung
      </Typography>
    </Container>
  );
}

export default App;
