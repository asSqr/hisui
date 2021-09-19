import React, { useState, createContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SelectContest from "./select_contestlist";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { ipcRendererManager } from "../../ipc";
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export const TextContext = createContext(["", () => {}]);

export default function DefaltContest() {
  const [open, setOpen] = useState(false);
  const [text, setText]: any = useState("");
  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const handleClickOpen = () => {
      getdefaltdata();
      setOpen(true);
      set_messageerror("");
      set_formerror(false);
      // console.log("test1111");
    };
    window.api.dafaltContestOpen(handleClickOpen);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const [open_snack, setOpen_snack] = React.useState(false);
  const [status_snack, setStatus_snack] = React.useState("");

  const getdefaltdata = async () => {
<<<<<<< HEAD
    const data = await ipcRendererManager.invoke("GET_SET_CONTESTID");
    setText(data);
=======
    ipcRendererManager.invoke("GET_SET_CONTESTID").then((result: any) => {
      setText(result);
    });
>>>>>>> da5d3ba35fc19a8beb984fe1a75bfbbb0b3a5155
  };
  const handleClose_snack = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen_snack(false);
  };
  const [formerror, set_formerror] = React.useState(false);
  const [messageerror, set_messageerror] = React.useState("");
<<<<<<< HEAD
  const set_contestID = async () => {
    const check = await ipcRendererManager.invoke("SET_CONTESTID", text);
    if (check) {
      setStatus_snack(`${text}に設定しました`);
      setOpen_snack(true);
      handleClose();
    } else {
      set_messageerror("存在しないコンテストまたは認証が必要です");
      set_formerror(true);
    }
=======
  const set_contestID = () => {
    ipcRendererManager.invoke("SET_CONTESTID", text).then((result: boolean) => {
      if (result) {
        setStatus_snack(`${text}に設定しました`);
        setOpen_snack(true);
        handleClose();
      } else {
        set_messageerror("存在しないコンテストまたは認証が必要です");
        set_formerror(true);
      }
    });
>>>>>>> da5d3ba35fc19a8beb984fe1a75bfbbb0b3a5155
  };
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Snackbar
        open={open_snack}
        autoHideDuration={6000}
        onClose={handleClose_snack}
      >
        <Alert onClose={handleClose_snack} severity="success">
          {status_snack}
        </Alert>
      </Snackbar>
      <TextContext.Provider value={[text, setText]}>
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">コンテストを選択</DialogTitle>
          <DialogContent>
            <DialogContentText>
              参加するコンテストを選択してください
              （表示されてないときは直接入力してください）
            </DialogContentText>
            <TextField
              error={formerror}
              autoFocus
              value={text}
              margin="dense"
              id="contest_name"
              label="URLの後ろについている名前を入力　例:abc191"
              type="string"
              fullWidth
              onChange={handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  set_contestID();
                }
              }}
              helperText={messageerror}
            />
            <SelectContest select={true} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              戻る
            </Button>
            <Button onClick={set_contestID} color="primary">
              決定
            </Button>
          </DialogActions>
        </Dialog>
      </TextContext.Provider>
    </div>
  );
}
