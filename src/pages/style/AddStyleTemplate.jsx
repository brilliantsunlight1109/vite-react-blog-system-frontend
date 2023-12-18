import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Stylenav from "../Stylenav";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
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
//checkbox-select
import Style from "./Style";

const AddStyleTemplate = () => {
  const [key, setKey] = useState("home");
  const [value, setValue] = useState("2");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    if (newValue === "1") {
      navigate("/home");
    }
  };
  const navigate = useNavigate();
  const [state, setState] = useState({
    gilad: false,
    jason: false,
    antoine: true,
  });

  const [data, setData] = useState({
    selectedImage1: null,
    selectedImage2: null,
    selectedImage3: null,
  });

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChange_select = (event) => {
    setAge(event.target.value);
  };

  const handleChange_checked = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  //upload
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
  //checked
  const [checked, setChecked] = useState(true);

  const handleChange_checked1 = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange_checked2 = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange_checked3 = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div className="container-xl min-h-screen">
        <div className="min-h-full">
          <Stylenav />
          <header className="bg-white shadow">
            <div className="mx-4 max-w-full px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 max-md:text-xl">
                スタイル
              </h1>
            </div>
          </header>
          <main>
            <div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem] max-md:px-4">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChangeTab}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        label="スタイル"
                        value="1"
                        sx={{ fontSize: "1rem" }}
                      />
                      <Tab
                        label="テンプレート"
                        value="2"
                        sx={{ fontSize: "1rem" }}
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <Style />
                  </TabPanel>
                  <TabPanel value="2">
                    <div className="container-xl m-auto">
                      {/* <div className="mt-24 flex justify-center gap-x-14 flex-wrap max-md:gap-y-6">
                        <Box
                          sx={{ minWidth: 300 }}
                          className="flex justify-center items-center"
                        >
                          <Button
                            variant="contained"
                            className="py-3 w-72 text-4xl"
                          >
                            一覧へ戻る
                          </Button>
                        </Box>
                        <Box
                          sx={{ minWidth: 300 }}
                          className="flex justify-center items-center"
                        >
                          <Button variant="contained" className="py-3 w-72">
                            追加
                          </Button>
                        </Box>
                      </div> */}
                      <div className="flex flex-col justify-center items-center w-full">
                        <Box
                          sx={{ flexGrow: 1 }}
                          className="w-full max-w-5xl mx-auto pt-12"
                        >
                          <AppBar position="static" className="rounded-t-lg">
                            <Toolbar>
                              {/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
                              {/* <MenuIcon className="mr-6" /> */}
                              {/* </IconButton> */}
                              <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                              >
                                テンプレート名・同期設定
                              </Typography>
                              {/* <Button color="inherit">Login</Button> */}
                            </Toolbar>
                          </AppBar>
                          <Card className="flex justify-start w-full">
                            <CardContent className="rounded-tr-none">
                              <div className="flex justify-start pl-20 pb-3 pt-3 w-full flex-col max-md:justify-center max-md:px-0">
                                <Box sx={{ minWidth: 250 }} className="pb-6">
                                  <Typography className="pb-3">
                                    テンプレート名
                                  </Typography>
                                  <FormControl className="w-full">
                                    <TextField
                                      id="outlined-basic"
                                      label="テンプレート名"
                                      variant="outlined"
                                    />
                                  </FormControl>
                                </Box>
                                <Box>
                                  <FormControl
                                    component="fieldset"
                                    variant="standard"
                                  >
                                    {/* <FormLabel component="legend">
																		Assign responsibility
																	</FormLabel> */}
                                    <FormGroup>
                                      <FormControlLabel
                                        control={
                                          <Switch
                                            checked={state.gilad}
                                            onChange={handleChange_checked}
                                            name="gilad"
                                          />
                                        }
                                        label="更新停止"
                                      />
                                    </FormGroup>

                                    {/* <FormHelperText>Be careful</FormHelperText> */}
                                  </FormControl>
                                </Box>
                                <Box>
                                  <div className="mb-2 mt-1">内部メモ</div>
                                  <TextField
                                    className="w-[40rem] max-md:w-full"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={3}
                                  />
                                </Box>
                                <Box>
                                  <div className="mt-3 mb-3">同期期間</div>
                                  <div className="flex flex-row pb-2 flex-wrap max-md:gap-y-4">
                                    <input
                                      type="date"
                                      className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                                    />
                                    <input
                                      type="date"
                                      className="block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </Box>
                                <Box>
                                  <div className="mt-3 mb-3">同期開始時間</div>
                                  <div>
                                    <input
                                      type="time"
                                      className=" block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </Box>
                                <Box>
                                  <div className="mt-3 mb-3">同期間隔</div>
                                  <div>
                                    <FormControl className="w-ull">
                                      <InputLabel
                                        id="demo-simple-select-label"
                                        className="w-44"
                                      >
                                        同期間隔
                                      </InputLabel>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="同期間隔"
                                        onChange={handleChange_select}
                                        className="w-44"
                                      >
                                        <MenuItem value={10}>1回のみ</MenuItem>
                                        <MenuItem value={20}>1時間</MenuItem>
                                        <MenuItem value={30}>2時間</MenuItem>
                                        <MenuItem value={40}>3時間</MenuItem>
                                        <MenuItem value={50}>4時間</MenuItem>
                                        <MenuItem value={60}>6時間</MenuItem>
                                        <MenuItem value={80}>8時間</MenuItem>
                                        <MenuItem value={80}>12時間</MenuItem>
                                        <MenuItem value={90}>1日</MenuItem>
                                        <MenuItem value={100}>1週間</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </div>
                                </Box>
                                <Box>
                                  <div className="mt-3 mb-3">投稿モード</div>
                                  <div>
                                    <FormControl className="w-48">
                                      <InputLabel
                                        id="demo-simple-select-label"
                                        className="w-44"
                                      >
                                        投稿モード
                                      </InputLabel>
                                      <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="投稿モード"
                                        onChange={handleChange_select}
                                        className="w-44"
                                      >
                                        <MenuItem value={10}>ADD</MenuItem>
                                        <MenuItem value={20}>DEL</MenuItem>
                                      </Select>
                                    </FormControl>
                                  </div>
                                </Box>
                                <Box>
                                  <Typography
                                    level="body-sm"
                                    className="ml-3 mt-3 mb-3 text-slate-400"
                                  >
                                    前回の同期で追加したスタイルを削除してから追加を行うモードです
                                  </Typography>
                                </Box>
                              </div>
                            </CardContent>
                          </Card>
                        </Box>
                      </div>
                      <div className="flex flex-col justify-center items-center w-full">
                        <Box
                          sx={{ flexGrow: 1 }}
                          className="w-full max-w-5xl pt-12 mx-auto"
                        >
                          <AppBar position="static" className="rounded-t-lg">
                            <Toolbar>
                              {/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
                              {/* <MenuIcon className="mr-6" /> */}
                              {/* </IconButton> */}
                              <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                              >
                                スタイル画像
                              </Typography>
                              {/* <Button color="inherit">Login</Button> */}
                            </Toolbar>
                          </AppBar>
                          <Card className="flex justify-center w-full">
                            <CardContent className="rounded-tr-none">
                              <div className="flex justify-center items-center gap-x-32 pb-3 pt-4 max-lg:flex-col max-lg:gap-y-6">
                                <Box sx={{ minWidth: 200 }}>
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                      未選択
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="未選択"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>Front</MenuItem>
                                    </Select>
                                  </FormControl>
                                  <div className="flex justify-center items-center pt-5 pb-5">
                                    <img
                                      src={data.selectedImage1}
                                      className="w-40 h-40"
                                    />
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Button
                                      component="label"
                                      variant="contained"
                                      startIcon={<CloudUploadIcon />}
                                    >
                                      アップロード
                                      <VisuallyHiddenInput type="file" />
                                    </Button>
                                  </div>
                                </Box>
                                <Box sx={{ minWidth: 200 }}>
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                      指定なし
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="指定なし"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>指定なし</MenuItem>
                                      <MenuItem value={20}>FRONT</MenuItem>
                                      <MenuItem value={10}>SIDE</MenuItem>
                                      <MenuItem value={20}>BACK</MenuItem>
                                      <MenuItem value={10}>ARRANGE</MenuItem>
                                      <MenuItem value={20}>BEFORE</MenuItem>
                                      <MenuItem value={20}>FASHION</MenuItem>
                                    </Select>
                                  </FormControl>
                                  <div className="flex justify-center items-center pt-5 pb-5">
                                    <img
                                      src={data.selectedImage2}
                                      className="w-40 h-40"
                                    />
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Button
                                      component="label"
                                      variant="contained"
                                      startIcon={<CloudUploadIcon />}
                                    >
                                      アップロード
                                      <VisuallyHiddenInput type="file" />
                                    </Button>
                                  </div>
                                </Box>
                                <Box sx={{ minWidth: 200 }}>
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                      指定なし
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="指定なし"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>指定なし</MenuItem>
                                      <MenuItem value={20}>FRONT</MenuItem>
                                      <MenuItem value={10}>SIDE</MenuItem>
                                      <MenuItem value={20}>BACK</MenuItem>
                                      <MenuItem value={10}>ARRANGE</MenuItem>
                                      <MenuItem value={20}>BEFORE</MenuItem>
                                      <MenuItem value={20}>FASHION</MenuItem>
                                    </Select>
                                  </FormControl>
                                  <div className="flex justify-center items-center pt-5 pb-5">
                                    <img
                                      src={data.selectedImage3}
                                      className="w-40 h-40"
                                    />
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Button
                                      component="label"
                                      variant="contained"
                                      startIcon={<CloudUploadIcon />}
                                    >
                                      アップロード
                                      <VisuallyHiddenInput type="file" />
                                    </Button>
                                  </div>
                                </Box>
                              </div>
                            </CardContent>
                          </Card>
                        </Box>
                      </div>
                      <div className="flex flex-col justify-center items-center w-full">
                        <Box
                          sx={{ flexGrow: 1 }}
                          className="w-full max-w-5xl pt-12 mx-auto"
                        >
                          <AppBar position="static" className="rounded-t-lg">
                            <Toolbar>
                              {/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
                              {/* <MenuIcon className="mr-6" /> */}
                              {/* </IconButton> */}
                              <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                              >
                                スタイリストコメント
                              </Typography>
                              {/* <Button color="inherit">Login</Button> */}
                            </Toolbar>
                          </AppBar>
                          <Card className="flex justify-start pl-12 w-full max-md:justify-center max-md:px-4">
                            <CardContent className="rounded-tr-none">
                              <div className="gap-x-16 pb-3 pt-4">
                                <Box sx={{ minWidth: 300 }} className="pb-6">
                                  <Typography className="pb-3">
                                    スタイリスト名
                                  </Typography>
                                  <FormControl className="w-full">
                                    <InputLabel id="demo-simple-select-label">
                                      指定なし
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="指定なし"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>TATSUYA</MenuItem>
                                      <MenuItem value={20}>TAKUMI</MenuItem>
                                      <MenuItem value={30}>GOTA</MenuItem>
                                      <MenuItem value={40}>NAOKI</MenuItem>
                                      <MenuItem value={50}>GO 立川</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                                <Box>
                                  <div className="mb-2 mt-1">
                                    コメント 0/120文字
                                  </div>
                                  <TextField
                                    className="w-[40rem] max-md:w-full"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={3}
                                  />
                                </Box>
                              </div>
                            </CardContent>
                          </Card>
                        </Box>
                      </div>
                      <div className="flex flex-col justify-center items-center w-full">
                        <Box
                          sx={{ flexGrow: 1 }}
                          className="w-full max-w-5xl pt-12 mx-auto"
                        >
                          <AppBar position="static" className="rounded-t-lg">
                            <Toolbar>
                              {/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
                              {/* <MenuIcon className="mr-6" /> */}
                              {/* </IconButton> */}
                              <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                              >
                                スタイリストコメント
                              </Typography>
                              {/* <Button color="inherit">Login</Button> */}
                            </Toolbar>
                          </AppBar>
                          <Card className="flex justify-start pl-12 w-full max-md:justify-center max-md:px-4">
                            <CardContent className="rounded-tr-none">
                              <div className="gap-x-16 pb-3 pt-4">
                                <Box sx={{ minWidth: 300 }} className="pb-6">
                                  <Typography className="pb-3">
                                    スタイル名 0/30文字
                                  </Typography>
                                  <FormControl className="w-full">
                                    <TextField
                                      id="outlined-basic"
                                      label="スタイル名"
                                      variant="outlined"
                                    />
                                  </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 300 }} className="pb-3">
                                  {/* <Typography className="pb-3">
																	カテゴリ
																</Typography> */}
                                  <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">
                                      カテゴリ
                                    </FormLabel>
                                    <RadioGroup
                                      aria-labelledby="demo-radio-buttons-group-label"
                                      defaultValue="female"
                                      name="radio-buttons-group"
                                    >
                                      <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="レディース"
                                      />
                                      <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="メンズ"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 300 }} className="pb-6">
                                  <Typography className="pb-3">長さ</Typography>
                                  <FormControl className="w-full">
                                    <InputLabel id="demo-simple-select-label">
                                      選択してください
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="選択してください"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>
                                        ベリーショート
                                      </MenuItem>
                                      <MenuItem value={20}>ショート</MenuItem>
                                      <MenuItem value={30}>ミディアム</MenuItem>
                                      <MenuItem value={40}>セミロング</MenuItem>
                                      <MenuItem value={50}>ロング</MenuItem>
                                      <MenuItem value={60}>ヘアセット</MenuItem>
                                      <MenuItem value={70}>ミセス</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 300 }} className="pb-6">
                                  <Typography className="pb-3">
                                    カラー
                                  </Typography>
                                  <FormControl className="w-full">
                                    <InputLabel id="demo-simple-select-label">
                                      選択してください
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="選択してください"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>
                                        ブラウン・ベージュ系
                                      </MenuItem>
                                      <MenuItem value={20}>
                                        イエロー・オレンジ系
                                      </MenuItem>
                                      <MenuItem value={30}>
                                        レッド・ピンク系
                                      </MenuItem>
                                      <MenuItem value={40}>
                                        アッシュ・ブラック系
                                      </MenuItem>
                                      <MenuItem value={50}>
                                        その他カラー
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 300 }} className="pb-6">
                                  <Typography className="pb-3">
                                    イメージ
                                  </Typography>
                                  <FormControl className="w-full">
                                    <InputLabel id="demo-simple-select-label">
                                      選択してください
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="選択してください"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>ナチュラル</MenuItem>
                                      <MenuItem value={20}>
                                        オフィス・コンサバ
                                      </MenuItem>
                                      <MenuItem value={30}>
                                        モテ・愛され
                                      </MenuItem>
                                      <MenuItem value={40}>ギャル</MenuItem>
                                      <MenuItem value={50}>
                                        カジュアル・ストリート
                                      </MenuItem>
                                      <MenuItem value={60}>
                                        ティーンズ・ガーリー
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                                <Box sx={{ minWidth: 300 }} className="pb-6">
                                  <Typography className="pb-3">
                                    メニュー内容0/50文字
                                  </Typography>
                                  <FormGroup>
                                    <FormControlLabel
                                      required
                                      control={<Checkbox />}
                                      label="パーマ"
                                    />
                                    <FormControlLabel
                                      required
                                      control={<Checkbox />}
                                      label="ストレートパーマ・縮毛矯正"
                                    />
                                    <FormControlLabel
                                      required
                                      control={<Checkbox />}
                                      label="エクステ"
                                    />
                                  </FormGroup>
                                </Box>
                                <Box>
                                  <TextField
                                    className="w-[40rem] max-md:w-full"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={3}
                                  />
                                </Box>
                                <Box sx={{ minWidth: 300 }} className="pb-6">
                                  <Typography className="pb-3 pt-6">
                                    クーポン
                                  </Typography>
                                  <FormControl className="w-full">
                                    <InputLabel id="demo-simple-select-label">
                                      なし
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={age}
                                      label="なし"
                                      onChange={handleChange}
                                    >
                                      <MenuItem value={10}>なし</MenuItem>
                                      <MenuItem value={20}>
                                        平日限定【メンズ】カット¥4000[メンズカット/メンズ/フェード/立川]
                                      </MenuItem>
                                      <MenuItem value={30}>
                                        平日限定【メンズ】カット+クイックスパ¥5000
                                        [メンズカット/立川/眉毛]
                                      </MenuItem>
                                      <MenuItem value={40}>
                                        平日限定【メンズ】カット+ニュアンスパーマ¥10000[メンズ/フェード/立川]
                                      </MenuItem>
                                      <MenuItem value={50}>
                                        平日限定【メンズ】カット+ツイストスパイラルパーマ¥11500[メンズ/立川]
                                      </MenuItem>
                                      <MenuItem value={60}>
                                        平日限定【メンズ】カット+波巻きスパイラルパーマ¥12500[メンズ/眉毛/立川]
                                      </MenuItem>
                                      <MenuItem value={70}>
                                        平日限定【メンズ】カット+カラー¥10000[メンズカット/フェード/立川/眉毛]
                                      </MenuItem>
                                      <MenuItem value={80}>
                                        【メンズ】カット¥4500[メンズカット/センターパート/立川]
                                      </MenuItem>
                                      <MenuItem value={90}>
                                        【メンズ】刈り上げメンテナンスカット¥2500【メンズ/立川】
                                      </MenuItem>
                                      <MenuItem value={100}>
                                        【メンズ】カット+眉毛カット¥5500[メンズカット//立川/眉毛]
                                      </MenuItem>
                                      <MenuItem value={110}>
                                        【メンズ】カット+ニュアンスパーマ¥10500[メンズパーマ/フェード/立川]
                                      </MenuItem>
                                      <MenuItem value={120}>
                                        【メンズ】カット+ツイストスパイラルパーマ¥12500[メンズ/ツイストパーマ]
                                      </MenuItem>
                                      <MenuItem value={130}>
                                        【メンズ】カット+波巻きスパイラルパーマ¥13500[メンズ/メンズパーマ/立川]
                                      </MenuItem>
                                      <MenuItem value={140}>
                                        期間限定 学割U24【メンズ】
                                        カット+眉毛カット¥3800[メンズ/立川]
                                      </MenuItem>
                                      <MenuItem value={150}>
                                        学割U24【メンズ】カット¥3800[メンズカット/メンズ/フェード/立川]
                                      </MenuItem>
                                      <MenuItem value={160}>
                                        【メンズ】カット+炭酸ヘッドスパ¥6000[メンズカット/センターパート/立川]
                                      </MenuItem>
                                      <MenuItem value={170}>
                                        学割U24【メンズ】カット+ニュアンスパーマ¥9500[メンズカット/フェード]
                                      </MenuItem>
                                      <MenuItem value={180}>
                                        【メンズ】カット+ポイントパーマ¥9500[メンズパーマ/センターパート/立川]
                                      </MenuItem>
                                      <MenuItem value={190}>
                                        【メンズ】カット+ニュアンスパーマ+トリートメント¥12000[メンズ/立川]
                                      </MenuItem>
                                      <MenuItem value={200}>
                                        【TAKUMI指名】U24カット+ツイストスパイラルパーマor波巻パーマ+眉カット
                                      </MenuItem>
                                      <MenuItem value={210}>
                                        【メンズ】カット+ツイストスパイラル+トリートメント¥14000[メンズ/立川]
                                      </MenuItem>
                                      <MenuItem value={220}>
                                        【メンズ】カット+波巻きスパイラルパーマ+トリートメント¥15000[立川/眉毛]
                                      </MenuItem>
                                      <MenuItem value={230}>
                                        【GOTA指名】カット+ケアパーマ
                                        ¥1,2000(立川/ケアパーマ/ブリーチパーマ)
                                      </MenuItem>
                                      <MenuItem value={240}>
                                        【メンズ】カット+ダウンパーマ¥10500[メンズパーマ/センターパート/立川]
                                      </MenuItem>
                                      <MenuItem value={250}>
                                        【メンズ】カット+縮毛ストレート+トリートメント¥17300[メンズ/立川/眉毛]
                                      </MenuItem>
                                      <MenuItem value={260}>
                                        【メンズ】ワンカラー¥6000[メンズパーマ/ツイストスパイラルパーマ/立川]
                                      </MenuItem>
                                      <MenuItem value={270}>
                                        【メンズ】ダブルカラー¥13000[メンズパーマ/ツイストスパイラルパーマ/立川]
                                      </MenuItem>
                                      <MenuItem value={280}>
                                        【メンズ】ダブルカラー+トリートメント¥15500[メンズパーマ/フェード/立川]
                                      </MenuItem>
                                      <MenuItem value={290}>
                                        【メンズ】メッシュキャップハイライト¥13000~[メンズカット/フェード/立川]
                                      </MenuItem>
                                      <MenuItem value={300}>
                                        【メンズ】カット+カラー¥10500[メンズカット/ツイストパーマ/フェード/立川]
                                      </MenuItem>
                                      <MenuItem value={310}>
                                        学割U24
                                        【メンズ】カット+カラー¥9500[メンズカット/フェード/立川/眉毛]
                                      </MenuItem>
                                      <MenuItem value={320}>
                                        【メンズ】カット+カラー+パーマ¥16000[メンズカット/立川/眉毛]
                                      </MenuItem>
                                      <MenuItem value={330}>
                                        【メンズ】カット+ダブルカラー+トリートメント¥18300[メンズカット/立川]
                                      </MenuItem>
                                      <MenuItem value={340}>
                                        【メンズ】カット+メッシュキャップ+トリートメント¥17800[メンズ/眉毛/立川]
                                      </MenuItem>
                                      <MenuItem value={350}>
                                        【メンズ】トリートメント¥2500~[メンズ/メンズパーマ/センターパート/立川]
                                      </MenuItem>
                                      <MenuItem value={360}>
                                        【2回目限定】平日限定カット￥4000
                                        [メンズパーマ/センターパート/立川]
                                      </MenuItem>
                                      <MenuItem value={370}>
                                        【2回目の方限定】カット+眉毛カット5500
                                        /メンズパーマ/眉毛/立川]
                                      </MenuItem>
                                      <MenuItem value={380}>
                                        【2回目の方限定】カット￥4500
                                        [メンズサロン/メンズパーマ/立川]
                                      </MenuItem>
                                      <MenuItem value={390}>
                                        【TAKUMI】U24
                                        2回目カット+ツイストスパイラルor波巻パーマ+眉カット
                                      </MenuItem>
                                      <MenuItem value={400}>
                                        【2回目の方限定】カット+ヘッドスパ￥6000
                                        [メンズパーマ/眉毛/立川]
                                      </MenuItem>
                                      <MenuItem value={410}>
                                        【2回目の方限定】カット+ニュアンスパーマ￥10500
                                        [メンズカット/立川]
                                      </MenuItem>
                                      <MenuItem value={420}>
                                        2回目の方限定】カット+ツイストスパイラルパーマ￥12500
                                        [立川]
                                      </MenuItem>
                                      <MenuItem value={430}>
                                        【2回目の方限定】カット+波巻きスパイラルパーマ￥13500[立川]
                                      </MenuItem>
                                      <MenuItem value={440}>
                                        【GOTA指名】2回目
                                        カット+ケアパーマ(立川/ケアパーマ/ブリーチパーマ)
                                      </MenuItem>
                                      <MenuItem value={450}>
                                        【2回目の方限定】カット+カラー￥10500
                                        [立川/眉毛/メンズカット]
                                      </MenuItem>
                                      <MenuItem value={460}>
                                        【2回目の方限定】カット+ダブルカラー+トリートメント￥18,300[立川]
                                      </MenuItem>
                                    </Select>
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
                          className="w-full max-w-5xl pt-12 mx-auto"
                        >
                          <AppBar position="static" className="rounded-t-lg">
                            <Toolbar>
                              {/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
                              {/* <MenuIcon className="mr-6" /> */}
                              {/* </IconButton> */}
                              <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                              >
                                おすすめタイプ
                              </Typography>
                              {/* <Button color="inherit">Login</Button> */}
                            </Toolbar>
                          </AppBar>
                          <Card className="flex justify-start pl-12 w-full max-md:justify-center max-md:px-0">
                            <CardContent className="rounded-tr-none">
                              <div className="gap-x-16 pb-3 pt-4 flex-wrap">
                                <Box>
                                  <div>
                                    <div className="pl-2 pt-4 pb-2">
                                      <Typography
                                        variant="h7"
                                        className="font-medium"
                                      >
                                        髪量
                                      </Typography>
                                    </div>
                                    <div className="flex gap-x-12 flex-wrap">
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked1}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          少ない
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked2}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          普通
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked3}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          多い
                                        </Typography>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="pl-2 pt-4 pb-2">
                                      <Typography
                                        variant="h7"
                                        className="font-medium"
                                      >
                                        髪質
                                      </Typography>
                                    </div>
                                    <div className="flex flex-wrap">
                                      <div className="flex justify-center items-center pr-8">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked1}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          柔らかい
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center pr-12">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked2}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          普通
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked3}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          硬い
                                        </Typography>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="pl-2 pt-4 pb-2">
                                      <Typography
                                        variant="h7"
                                        className="font-medium"
                                      >
                                        太さ
                                      </Typography>
                                    </div>
                                    <div className="flex gap-x-12 flex-wrap">
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked1}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          細い
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked2}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          普通
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked3}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          太い
                                        </Typography>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="pl-2 pt-4 pb-2">
                                      <Typography
                                        variant="h7"
                                        className="font-medium"
                                      >
                                        クセ
                                      </Typography>
                                    </div>
                                    <div className="flex gap-x-12 flex-wrap">
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked1}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          なし
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked2}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          少し
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked3}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          強い
                                        </Typography>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="pl-2 pt-4 pb-2">
                                      <Typography
                                        variant="h7"
                                        className="font-medium"
                                      >
                                        顔型
                                      </Typography>
                                    </div>
                                    <div className="flex gap-x-12 flex-wrap">
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked1}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          丸型
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked2}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          逆三角
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked3}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          卵型
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked3}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          ベース
                                        </Typography>
                                      </div>
                                      <div className="flex justify-center items-center">
                                        <Checkbox
                                          checked={checked}
                                          onChange={handleChange_checked3}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                        <Typography variant="h7">
                                          四角
                                        </Typography>
                                      </div>
                                    </div>
                                  </div>
                                </Box>
                              </div>
                            </CardContent>
                          </Card>
                        </Box>
                      </div>
                      <div className="flex flex-col justify-center items-center w-full pb-8">
                        <Box
                          sx={{ flexGrow: 1 }}
                          className="w-full max-w-5xl pt-12 mx-auto"
                        >
                          <AppBar position="static" className="rounded-t-lg">
                            <Toolbar>
                              {/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
                              {/* <MenuIcon className="mr-6" /> */}
                              {/* </IconButton> */}
                              <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                              >
                                スタイリング・アレンジポイント
                              </Typography>
                              {/* <Button color="inherit">Login</Button> */}
                            </Toolbar>
                          </AppBar>
                          <Card className="flex justify-start pl-12 w-full max-md:justify-center max-md:px-4">
                            <CardContent className="rounded-tr-none">
                              <div className="gap-x-16 pb-3 pt-4">
                                <Box minWidth={300}>
                                  <div className="mb-2 mt-1">
                                    ポイント 0/120文字
                                  </div>
                                  <TextField
                                    className="w-[40rem] max-md:w-full"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={3}
                                  />
                                </Box>
                              </div>
                            </CardContent>
                          </Card>
                        </Box>
                      </div>
                      <div className="flex justify-center mt-6 mb-24">
                        <Box>
                          <Button
                            variant="contained"
                            className="w-96 py-2 max-md:w-[15rem]"
                          >
                            追加
                          </Button>
                        </Box>
                      </div>
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddStyleTemplate;
