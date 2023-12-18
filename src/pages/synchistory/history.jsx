import React from "react";

import { useEffect, useState, useMemo } from "react";
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

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
//Radio Group
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
//checkbox
import Checkbox from "@mui/material/Checkbox";
//datagrid
import { DataGrid, jaJP } from "@mui/x-data-grid";
//
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const History = () => {
  const [history, setHistory] = useState([]);
  const existingTheme = useTheme();

  const theme = useMemo(
    () => createTheme({}, jaJP, existingTheme),
    [existingTheme]
  );
  const [data, setData] = useState({
    type: "",
    date: "",
    content: "",
  });

  //textarea

  const handleChangeTextarea = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  //sync_date
  const handleChangeSyncDate = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  //select
  const handleChangeSelect = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

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

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
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
      field: "sync_time",
      headerName: "同期時刻",
      type: "text",
      width: 150,
    },
    {
      field: "type",
      headerName: "タイプ",
      type: "text",
      width: 150,
    },
    {
      field: "content",
      headerName: "内容",
      type: "text",
      width: 390,
    },
  ];

  // const rows = blog.map((item, index) => ({
  // 	id: index + 1,
  // 	sync_time: item.sync_time,
  // 	type: item.type,
  // 	content: item.content,
  // 	_id: item._id,
  // }));
  const rows = [
    { id: 1, sync_time: "11", type: "形", content: 35 },
    { id: 2, sync_time: "11", type: "形", content: 35 },
    { id: 3, sync_time: "11", type: "形", content: 35 },
    { id: 4, sync_time: "11", type: "形", content: 35 },
    { id: 5, sync_time: "11", type: "形", content: 35 },
  ];

  const handleChange_select = (event) => {
    setAge(event.target.value);
  };
  //

  //select
  const [age, setAge] = useState("");

  return (
    <>
      <div className="container-xl flex justify-center">
        <div className="mt-6 max-w-3xl max-md:w-full max-md:px-4">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography> 同期履歴フィルター</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="px-6 max-md:px-0">
                  <div className="max-md:flex max-md:justify-center">
                    <FormControl component="fieldset" variant="standard">
                      {/* <FormLabel component="legend">
																			Assign responsibility
																		</FormLabel> */}

                      <FormGroup>
                        <div className="flex pt-3 justify-start items-center align-middle pl-12 max-md:justify-center max-md:px-4">
                          <div className="pr-12 max-md:pr-6">
                            <Typography className="whitespace-nowrap">
                              type
                            </Typography>
                          </div>
                          <div>
                            <FormControl className="w-48">
                              <InputLabel
                                id="demo-simple-select-label"
                                className="w-44"
                              >
                                type
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.type}
                                label="type"
                                name="type"
                                onChange={handleChangeSelect}
                                className="w-44"
                              >
                                <MenuItem value={"全て"}>全て</MenuItem>
                                <MenuItem value={"Style"}>Style</MenuItem>
                                <MenuItem value={"Blog"}>Blog</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                        <div className="flex pt-3 justify-start items-center align-middle pl-12 max-md:px-4 max-md:justify-center">
                          <div className="pr-12 max-md:pr-6">
                            <Typography className="whitespace-nowrap">
                              日付
                            </Typography>
                          </div>
                          <div>
                            <input
                              type="date"
                              name="date"
                              value={data.date}
                              onChange={handleChangeSyncDate}
                              className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="flex pt-3 justify-start items-center align-middle pl-12 pb-8 max-md:justify-center max-md:px-4">
                          <div className="pr-12 max-md:pr-6">
                            <Typography className="whitespace-nowrap">
                              内容
                            </Typography>
                          </div>
                          <div className="max-md:mr-6">
                            <TextField
                              id="outlined-basic"
                              name="content"
                              value={data.content}
                              onChange={handleChangeTextarea}
                              label="スタイル名"
                              variant="outlined"
                              className="w-44"
                            />
                          </div>
                        </div>

                        <div className="flex justify-center items-center pb-8">
                          <Button variant="contained" className="px-5 py-2">
                            確認
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
        </div>
      </div>
      <div>
        <div className="px-12 pt-16 max-w-4xl flex justify-center mx-auto max-md:px-4">
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
                rowHeight={60}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
