import React from "react";
import Stylenav from "../Stylenav";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
//button
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//switch
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
//select
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
//textfield
import TextField from "@mui/material/TextField";
//App Bar
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
//card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Fullscreen, WidthFull } from "@mui/icons-material";
//bootstrap textarea
import Form from "react-bootstrap/Form";
//upload
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
//Radio Group
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
//checkbox
import Checkbox from "@mui/material/Checkbox";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { useSelector } from "react-redux";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddStylist = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState("");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({
    name: "",
    furigana: "",
    stylist_assistant: "",
    sex: "",
    catch: "",
    self_introduction: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    furigana: "",
    stylist_assistant: "",
    sex: "",
    catch: "",
    self_introduction: "",
  });

  const handleFileChange = (key) => (e) => {
    setData((data) => ({
      ...data,
      [key]: e.target.files[0],
    }));
    setShow(URL.createObjectURL(e.target.files[0]));
    setFlag(true);
  };
  //textarea
  const handleChangeTextarea = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    // setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };
  //sync_date
  const handleChangeSyncDate = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    // setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };
  //select
  const handleChangeSelect = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    // setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  const handleChangeRadio = (key) => (e) => {
    setData((data) => ({ ...data, [key]: e.target.value }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };
  console.log("data.name: ", data.name);
  console.log("data.furigana: ", data.furigana);
  console.log("data.stylist_assistant: ", data.stylist_assistant);
  console.log("data.sex: ", data.sex);
  console.log("data.catch: ", data.catch);
  console.log("data.self_introduction: ", data.self_introduction);
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!data.name) {
      validationErrors.name = "この項目は必須です。";
    }
    if (!data.furigana) {
      validationErrors.furigana = "この項目は必須です。";
    }
    if (!data.stylist_assistant) {
      validationErrors.stylist_assistant = "この項目は必須です。";
    }
    if (!data.sex) {
      validationErrors.sex = "この項目は必須です。";
    }
    if (!data.catch) {
      validationErrors.catch = "この項目は必須です。";
    }
    if (!data.self_introduction) {
      validationErrors.self_introduction = "この項目は必須です。";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    axios
      .post("/api/stylist", data)
      .then((res) => {
        setData({
          name: "",
          furigana: "",
          stylist_assistant: "",
          sex: "",
          catch: "",
          self_introduction: "",
        });
        console.log(res.data.message);
        navigate("/stylist");
      })
      .catch((err) => {
        console.log("Error couldn't create Stylist");
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="container-xl min-h-screen">
        <div className="min-h-full">
          <Stylenav />
          <header className="bg-white shadow">
            <div className="mx-4 max-w-full px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 max-md:text-xl">
                スタイリスト
              </h1>
            </div>
          </header>
          <main>
            <div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem] max-md:px-4">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="container-xl m-auto">
                    <div className="flex flex-col justify-center items-center w-full">
                      <Box
                        sx={{ flexGrow: 1 }}
                        className="w-full max-w-5xl mx-auto pt-12"
                      >
                        <AppBar position="static" className="rounded-t-lg">
                          <Toolbar>
                            <Typography
                              variant="h6"
                              component="div"
                              sx={{ flexGrow: 1 }}
                            >
                              基本情報
                            </Typography>
                          </Toolbar>
                        </AppBar>
                        <Card className="flex justify-start w-full">
                          <CardContent className="rounded-tr-none">
                            <div className="flex justify-start pl-20 pb-3 pt-3 w-full flex-col max-md:px-0 max-md:justify-center">
                              <Box sx={{ minWidth: 300 }} className="pb-1 pt-4">
                                <Typography className="pb-3">
                                  名前
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-[30rem] max-md:w-full">
                                  <TextField
                                    id="outlined-basic"
                                    label="名前"
                                    variant="outlined"
                                    onChange={handleChangeTextarea}
                                    value={data.name}
                                    name="name"
                                  />
                                </FormControl>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-1 pt-4">
                                <Typography className="pb-3">
                                  フリガナ
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-[30rem] max-md:w-full">
                                  <TextField
                                    id="outlined-basic"
                                    label="フリガナ"
                                    variant="outlined"
                                    onChange={handleChangeTextarea}
                                    value={data.furigana}
                                    name="furigana"
                                  />
                                </FormControl>
                              </Box>
                              <Box sx={{ minWidth: 300 }}>
                                <div className="mt-3 mb-3">
                                  スタイリスト/ アシスタント
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </div>
                                <div>
                                  <FormControl className="w-ull">
                                    <InputLabel
                                      id="demo-simple-select-label"
                                      className="w-72"
                                    >
                                      スタイリスト
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={data.stylist_assistant}
                                      name="stylist_assistant"
                                      label="スタイリスト"
                                      onChange={handleChangeSelect}
                                      className="w-96 max-md:w-56"
                                    >
                                      <MenuItem value={"スタイリスト"}>
                                        スタイリスト
                                      </MenuItem>
                                      <MenuItem value={"アシスタント"}>
                                        アシスタント
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </div>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pt-5 pb-5">
                                <FormControl>
                                  <FormLabel id="demo-radio-buttons-group-label">
                                    性別
                                    <span className="text-red-600 text-xs pl-2">
                                      *必須"
                                    </span>
                                  </FormLabel>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="female"

                                    value={data.sex}
                                    onChange={handleChangeRadio("sex")}
                                    className="mt-3"
                                  >
                                    <FormControlLabel
                                      value="male"
                                      control={<Radio />}
                                      label="男性"
                                    />
                                    <FormControlLabel
                                      value="female"
                                      control={<Radio />}
                                      label="女性"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Box>
                            </div>
                          </CardContent>
                        </Card>
                      </Box>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full">
                      <Box
                        sx={{ flexGrow: 1 }}
                        className="w-full max-w-5xl mx-auto pt-12"
                      >
                        <AppBar position="static" className="rounded-t-lg">
                          <Toolbar>
                            <Typography
                              variant="h6"
                              component="div"
                              sx={{ flexGrow: 1 }}
                            >
                              自己紹介
                            </Typography>
                          </Toolbar>
                        </AppBar>
                        <Card className="flex justify-start w-full">
                          <CardContent className="rounded-tr-none">
                            <div className="flex justify-start pl-20 pb-3 pt-3 w-full flex-col max-md:px-0 max-md:justify-center">
                              <Box sx={{ minWidth: 300 }} className="pb-1 pt-4">
                                <Typography className="pb-3">
                                  キャッチ
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-[30rem] max-md:w-full">
                                  <TextField
                                    id="outlined-basic"
                                    label="キャッチ"
                                    variant="outlined"
                                    onChange={handleChangeTextarea}
                                    value={data.catch}
                                    name="catch"
                                  />
                                </FormControl>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-1 pt-4">
                                <Typography className="pb-3">
                                  自己紹介（スタイリストのみ）
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-[30rem] max-md:w-full">
                                  <TextField
                                    id="outlined-basic"
                                    label="自己紹介"
                                    variant="outlined"
                                    onChange={handleChangeTextarea}
                                    value={data.self_introduction}
                                    name="self_introduction"
                                    multiline
                                    rows={4}
                                  />
                                </FormControl>
                              </Box>
                            </div>
                          </CardContent>
                        </Card>
                      </Box>
                    </div>
                    <div className="flex justify-center items-center mt-8 mb-12">
                      <Box>
                        <Button
                          variant="contained"
                          className="pt-3 pb-3 w-72 max-md:w-48"
                          type="submit"
                        >
                          追加
                        </Button>
                      </Box>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddStylist;
