import { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
//mui
//bootstrap
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
//table
import { DataGrid, jaJP } from "@mui/x-data-grid";
//
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
//add_template

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Style = () => {
  const navigate = useNavigate();
  const [style, setStyle] = useState([]);

  // useEffect(() => {
  // 	axios
  // 		.get("http://localhost:4000/api/style")
  // 		.then((res) => {
  // 			// console.log(res.data);
  // 			setStyle(res.data);
  // 		})
  // 		.catch((err) => {
  // 			console.log(err);
  // 		});
  // }, []);
  // // console.log(style);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/style");
        // console.log(response.data);
        setStyle(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const existingTheme = useTheme();

  const theme = useMemo(
    () => createTheme({}, jaJP, existingTheme),
    [existingTheme]
  );

  //switch
  const [state, setState] = useState({
    gilad: false,
    jason: false,
    antoine: false,
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
  });
  const add_style = () => {
    navigate("/add-style");
  };
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  //

  //select
  const [age, setAge] = useState("");

  const handleChange_select = (event) => {
    setAge(event.target.value);
  };
  const columns = [
    {
      field: "id",
      headerName: "番号",
      type: "number",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "image",
      headerName: "写真",
      width: 160,
      renderCell: (params) => (
        <img
          src={params.row.image}
          alt=""
          width={params.row.imageWidth}
          height={params.row.imageHeight}
        />
      ),
    },
    {
      field: "style_name",
      headerName: "スタイル名",
      type: "text",
      width: 160,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "stylist",
      headerName: "スタイリスト",
      type: "text",
      width: 120,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "coupon",
      headerName: "クーポン",
      type: "text",
      width: 500,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "Sync_start_date",
      headerName: "同期開始日",
      type: "text",
      width: 140,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "Sync_end_date",
      headerName: "同期停止日",
      type: "text",
      width: 140,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },

    {
      field: "Sync_start_time",
      headerName: "同期開始時間",
      type: "text",
      width: 120,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "Sync_interval",
      headerName: "同期間隔",
      type: "text",
      width: 100,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "situation",
      headerName: "状態",
      type: "text",
      width: 100,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "Mode",
      headerName: "Mode",
      type: "text",
      width: 100,
      renderCell: (params) => (
        <Link to={`/update-style?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
  ];

  // const rows = [
  // 	{
  // 		id: 1,
  // 		image:
  // 			"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format",
  // 		style_name: "Jon",
  // 		stylist: "asd",
  // 		coupon: "asd",
  // 		original_ID: "asd",
  // 		copy_ID: "ds",
  // 		Sync_start_date: "sd",
  // 		Sync_end_date: "df",
  // 		Sync_start_time: "asdf",
  // 		Sync_interval: "sdf",
  // 		situation: "da",
  // 		Mode: "del",
  // 		imageWidth: 100,
  // 		imageHeight: 100,
  // 	},
  // ];
  const rows = style.map((item, index) => ({
    id: index + 1,
    image: item.selectedImage1,
    style_name: item.style_name,
    stylist: item.stylist_name,
    coupon: item.coupon,
    Sync_start_date: item.sync_date_start,
    Sync_end_date: item.sync_date_end,
    Sync_start_time: item.sync_start_time,
    Sync_interval: item.sync_interval,
    situation: "in operation",
    Mode: item.post_mode,
    imageWidth: 100,
    imageHeight: 100,
    _id: item._id,
  }));
  return (
    <>
      <div>
        <div className="container-xl flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="mt-8">
              <Button variant="contained" onClick={add_style}>
                スタイル追加
              </Button>
            </div>
            <div className="mt-6 w-12/12 max-md:w-[20rem] ">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography> 選択行の一括更新</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="px-6">
                      <div>
                        <FormControl component="fieldset" variant="standard">
                          {/* <FormLabel component="legend">
																			Assign responsibility
																		</FormLabel> */}

                          <FormGroup>
                            <div>
                              <FormControlLabel
                                control={
                                  <Switch
                                    checked={state.gilad}
                                    onChange={handleChange}
                                    name="gilad"
                                  />
                                }
                                label="更新停止"
                                className="pr-10"
                              />
                              <FormControlLabel
                                control={
                                  <Switch
                                    checked={state.jason}
                                    onChange={handleChange}
                                    name="jason"
                                  />
                                }
                                label="削除"
                              />
                            </div>
                            <div>
                              <FormControlLabel
                                control={
                                  <Switch
                                    checked={state.antoine}
                                    onChange={handleChange}
                                    name="antoine"
                                  />
                                }
                                label="同期期間"
                              />
                            </div>
                            <div className="flex flex-row pl-12 pb-2 max-md:block max-md:pl-6">
                              <input
                                type="date"
                                className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 max-md:mb-4"
                              />
                              <input
                                type="date"
                                className="block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                              />
                            </div>
                            <div className="flex pt-2 max-md:block">
                              <FormControlLabel
                                control={
                                  <Switch
                                    checked={state.a}
                                    onChange={handleChange}
                                    name="a"
                                  />
                                }
                                label="同期開始時間"
                                className="mr-0 mb-0"
                              />
                              <input
                                type="time"
                                className="ml-6 block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 max-md:mt-3"
                              />
                            </div>
                            <div className="flex pt-3 align-middle max-md:block">
                              <div className="flex align-middle">
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={state.b}
                                      onChange={handleChange}
                                      name="b"
                                    />
                                  }
                                  label="同期間隔"
                                  className="pr-14 mr-0 mb-0"
                                />
                              </div>
                              <div className="flex align-middle max-md:mt-2 max-md:ml-6">
                                <FormControl className="w-48">
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
                            </div>
                            <div className="flex pt-3 align-middle max-md:block">
                              <div className="flex align-middle">
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={state.c}
                                      onChange={handleChange}
                                      name="c"
                                    />
                                  }
                                  label="スタイリスト"
                                  className="pr-6 mr-0 mb-0"
                                />
                              </div>
                              <div className="flex align-middle max-md:mt-2 max-md:ml-6">
                                <FormControl className="w-48">
                                  <InputLabel
                                    id="demo-simple-select-label"
                                    className="w-44"
                                  >
                                    スタイリスト
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="スタイリスト"
                                    onChange={handleChange_select}
                                    className="w-44"
                                  >
                                    <MenuItem value={10}>指定なし</MenuItem>
                                    <MenuItem value={20}>TATSUYA</MenuItem>
                                    <MenuItem value={30}>TAKUMI</MenuItem>
                                    <MenuItem value={30}>GOTA</MenuItem>
                                    <MenuItem value={30}>NAOKI</MenuItem>
                                    <MenuItem value={30}>GO 立川</MenuItem>
                                  </Select>
                                </FormControl>
                              </div>
                            </div>
                            <div className="flex pt-3 align-middle max-md:block">
                              <div className="flex align-middle">
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={state.d}
                                      onChange={handleChange}
                                      name="d"
                                    />
                                  }
                                  label="スタイル名"
                                  className="pr-10 mr-0 mb-0"
                                />
                              </div>
                              <div className="flex align-middle max-md:mt-3 max-md:ml-6">
                                <TextField
                                  id="outlined-basic"
                                  label="スタイル名"
                                  variant="outlined"
                                  className="w-44"
                                />
                              </div>
                            </div>
                            <div className="flex pt-3 align-middle max-md:block">
                              <div className="flex align-middle">
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked={state.e}
                                      onChange={handleChange}
                                      name="e"
                                    />
                                  }
                                  label="MODE"
                                  className="pr-16 mr-0 mb-0"
                                />
                              </div>
                              <div className="flex align-middle max-md:mt-3 max-md:ml-4">
                                <FormControl className="w-48 ml-2">
                                  <InputLabel
                                    id="demo-simple-select-label"
                                    className="w-44"
                                  >
                                    MODE
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="MODE"
                                    onChange={handleChange_select}
                                    className="w-44"
                                  >
                                    <MenuItem value={10}>ADD</MenuItem>
                                    <MenuItem value={20}>DEL</MenuItem>
                                  </Select>
                                </FormControl>
                              </div>
                            </div>
                            <div className="flex justify-center items-center pt-8 pb-8">
                              <Button variant="contained" className="px-5 py">
                                更新
                              </Button>
                            </div>
                          </FormGroup>
                          {/* <FormHelperText>Be careful</FormHelperText> */}
                        </FormControl>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography> フィルター</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="px-6">
                      <div className="flex max-md:block">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.f}
                              onChange={handleChange}
                              name="f"
                            />
                          }
                          label="スタイル名"
                          className="pr-16 mr-0 mb-0"
                        />
                        <div className="mt-2 ml-6">
                          <TextField
                            id="outlined-basic"
                            label="スタイル名"
                            variant="outlined"
                            className="w-44"
                          />
                        </div>
                      </div>
                      <div className="flex pt-3 align-middle max-md:block">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.g}
                              onChange={handleChange}
                              name="g"
                            />
                          }
                          label="スタイリスト"
                          className="pr-12 mr-0 mb-0"
                        />
                        <div className="mt-2 ml-6">
                          <FormControl className="w-48">
                            <InputLabel
                              id="demo-simple-select-label"
                              className="w-44"
                            >
                              スタイリスト
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="スタイリスト"
                              onChange={handleChange_select}
                              className="w-44"
                            >
                              <MenuItem value={10}>TATSUYA</MenuItem>
                              <MenuItem value={20}>TAKUMI</MenuItem>
                              <MenuItem value={30}>GOTA</MenuItem>
                              <MenuItem value={40}>TATSUYA</MenuItem>
                              <MenuItem value={50}>NAOKI</MenuItem>
                              <MenuItem value={60}>GO 立川</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div className="flex pt-3 align-middle max-md:block">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.h}
                              onChange={handleChange}
                              name="h"
                            />
                          }
                          label="クーポン"
                          className="pr-20 mr-0 mb-0"
                        />
                        <div className="mt-2 ml-6">
                          <FormControl className="w-48">
                            <InputLabel
                              id="demo-simple-select-label"
                              className="w-44"
                            >
                              クーポン
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="クーポン"
                              onChange={handleChange_select}
                              className="w-44"
                            >
                              <MenuItem value={10}>なし</MenuItem>
                              <MenuItem value={20}>あり</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div className="flex pt-3 max-md:block">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.i}
                              onChange={handleChange}
                              name="i"
                            />
                          }
                          label="オリジナルID/コピーID"
                          className="pr-6 mr-0 mb-0"
                        />
                        <div className="mt-2 ml-6">
                          <TextField
                            id="outlined-basic"
                            label="オリジナルID/コピーID"
                            variant="outlined"
                            className="w-44"
                          />
                        </div>
                      </div>
                      <div className="pt-3">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.j}
                              onChange={handleChange}
                              name="j"
                            />
                          }
                          label="同期期間"
                        />
                      </div>
                      <div className="flex flex-row pl-12 pb-2 max-md:block max-md:pl-6">
                        <input
                          type="date"
                          className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 max-md:mb-3"
                        />
                        <input
                          type="date"
                          className="block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="pt-3">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.k}
                              onChange={handleChange}
                              name="k"
                            />
                          }
                          label="同期開始時間"
                        />
                      </div>
                      <div className="flex flex-row pl-12 pb-2 max-md:block max-md:pl-6">
                        <input
                          type="time"
                          className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 max-md:mb-3"
                        />
                        <input
                          type="time"
                          className="block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="flex pt-3 align-middle max-md:block">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.l}
                              onChange={handleChange}
                              name="l"
                            />
                          }
                          label="同期間隔"
                          className="pr-12 mr-0 mb-0"
                        />
                        <div className="mt-2 ml-6">
                          <FormControl className="w-48">
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
                              <MenuItem value={10}>3時間</MenuItem>
                              <MenuItem value={20}>4時間</MenuItem>
                              <MenuItem value={30}>6時間</MenuItem>
                              <MenuItem value={30}>8時間</MenuItem>
                              <MenuItem value={10}>12時間</MenuItem>
                              <MenuItem value={20}>1日</MenuItem>
                              <MenuItem value={30}>1週間</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div className="flex pt-3 align-middle max-md:block">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.m}
                              onChange={handleChange}
                              name="m"
                            />
                          }
                          label="状態"
                          className="pr-20 mr-0 mb-0"
                        />
                        <div className="mt-2 ml-6">
                          <FormControl className="w-48">
                            <InputLabel
                              id="demo-simple-select-label"
                              className="w-44"
                            >
                              状態
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="状態"
                              onChange={handleChange_select}
                              className="w-44"
                            >
                              <MenuItem value={10}>稼働中</MenuItem>
                              <MenuItem value={20}>停止中</MenuItem>
                              <MenuItem value={30}>未完成</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div className="flex pt-3 align-middle max-md:block">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={state.n}
                              onChange={handleChange}
                              name="n"
                            />
                          }
                          label="MODE"
                          className="pr-16 mr-0 mb-0"
                        />
                        <div className="mt-2 ml-6">
                          <FormControl className="w-48 mt-2 ml-6">
                            <InputLabel
                              id="demo-simple-select-label"
                              className="w-44"
                            >
                              MODE
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="MODE"
                              onChange={handleChange_select}
                              className="w-44"
                            >
                              <MenuItem value={10}>ADD</MenuItem>
                              <MenuItem value={20}>DELL</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                      <div className="flex justify-center items-center pt-8 pb-8">
                        <Button variant="contained" className="px-5 py">
                          フィルター実行
                        </Button>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="px-12 pt-16 max-md:px-1">
          <div style={{ height: "100%", width: "100%" }}>
            <ThemeProvider theme={theme}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                }}
                pageSizeOptions={[5, 10, 20, 30]}
                checkboxSelection
                rowHeight={120}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style;
