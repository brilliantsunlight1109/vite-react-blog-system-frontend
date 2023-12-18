import React from "react";

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
//datagrid
import { DataGrid } from "@mui/x-data-grid";
//redux
import { useSelector } from "react-redux";

const General = () => {
  const [data, setData] = useState({
    salon_password: "",
    salon_confirm_password: "",
    style_tokyo_id: "",
    password: "",
    confirm_password: "",
  });

  //redux
  const style_tokyo_id = useSelector((state) => state.style_tokyo_id);
  const userSalonId = useSelector((state) => state.userSalonId);
  const Id = useSelector((state) => state.Id);
  const store_name = useSelector((state) => state.store_name);
  const store_address = useSelector((state) => state.store_address);

  console.log("redux-style_tokyo_id: ", style_tokyo_id);
  console.log("redux-userSalonId: ", userSalonId);
  console.log("redux-Id: ", Id);
  console.log("redux-store_name: ", store_name);
  console.log("redux-store_address: ", store_address);
  const id = Id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/${id}`);
        console.log("response.data: ", response.data);
        setData({
          style_tokyo_id: response.data.style_tokyo_id,
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const [state, setState] = useState({
    gilad: false,
    jason: false,
    antoine: true,
  });
  const [age, setAge] = useState("");
  const handleChange_select = (event) => {
    setAge(event.target.value);
  };

  //textarea

  const handleChangeTextarea = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleChange_checked = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  //redux

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = {};
    if (data.salon_password && data.salon_password.trim() !== "") {
      updateData.salon_password = data.salon_password;
    }
    if (
      data.salon_confirm_password &&
      data.salon_confirm_password.trim() !== ""
    ) {
      updateData.salon_confirm_password = data.salon_confirm_password;
    }
    if (data.style_tokyo_id && data.style_tokyo_id.trim() !== "") {
      updateData.style_tokyo_id = data.style_tokyo_id;
    }
    if (data.password && data.password.trim() !== "") {
      updateData.password = data.password;
    }
    if (data.confirm_password && data.confirm_password.trim() !== "") {
      updateData.confirm_password = data.confirm_password;
    }
    if (Object.keys(updateData).length === 0) {
      console.log("No fields to update");
      return;
    }
    console.log("updateData: ", updateData);
    axios
      .put(`/api/user/${id}`, updateData)
      .then((res) => {
        console.log(res.data.message);
        setData({
          salon_password: "",
          salon_confirm_password: "",
          password: "",
          confirm_password: "",
        });
      })
      .catch((err) => {
        console.log("Error couldn't update User Information Setting");
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="container-xl min-h-full">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center mt-12">
            <div className="flex flex-col justify-center items-center w-full">
              <Box sx={{ flexGrow: 1 }} className="w-full max-w-5xl mx-auto">
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
                      設定
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                  </Toolbar>
                </AppBar>
                <Card className="flex justify-start w-full">
                  <CardContent className="rounded-tr-none w-full">
                    <div className="flex justify-start pl-20 pb-3 pt-3 w-full flex-col max-md:justify-center max-md:px-4">
                      <Box>
                        <FormControl component="fieldset" variant="standard">
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
                              label="スタイル更新停止"
                            />
                          </FormGroup>

                          {/* <FormHelperText>Be careful</FormHelperText> */}
                        </FormControl>
                      </Box>
                    </div>
                    <div className="flex justify-center">
                      <Button variant="contained" className="py-3 w-64">
                        テンプレートを反映
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12">
            <div className="flex flex-col justify-center items-center w-full">
              <Box sx={{ flexGrow: 1 }} className="w-full max-w-5xl mx-auto">
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
                      サロンボードログイン情報
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                  </Toolbar>
                </AppBar>
                <Card className="flex justify-start w-full">
                  <CardContent className="rounded-tr-none w-full">
                    <div className="flex justify-start pl-20 pr-20 pb-3 pt-8 w-full flex-col max-md:justify-center max-md:px-4">
                      <Box>
                        <div className="pb-2">
                          <Typography variant="h6">サロンボードID</Typography>
                        </div>
                        <div className="pb-2">
                          <Typography variant="h6">{userSalonId}</Typography>
                        </div>
                      </Box>
                      <Box sx={{ minWidth: 270 }} className="pb-6 pt-6">
                        <Typography className="pb-3">パスワード</Typography>
                        <FormControl className="w-full">
                          <TextField
                            id="outlined-basic"
                            label="※変更時のみ入力"
                            variant="outlined"
                            onChange={handleChangeTextarea}
                            name="salon_password"
                            value={data.salon_password}
                          />
                        </FormControl>
                      </Box>
                      <Box sx={{ minWidth: 270 }} className="pb-6 pt-6">
                        <Typography className="pb-3">パスワード確認</Typography>
                        <FormControl className="w-full">
                          <TextField
                            id="outlined-basic"
                            label="※変更時のみ入力"
                            variant="outlined"
                            onChange={handleChangeTextarea}
                            name="salon_confirm_password"
                            value={data.salon_confirm_password}
                          />
                        </FormControl>
                      </Box>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12">
            <div className="flex flex-col justify-center items-center w-full">
              <Box sx={{ flexGrow: 1 }} className="w-full max-w-5xl mx-auto">
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
                      StyleTokyoユーザ情報
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                  </Toolbar>
                </AppBar>
                <Card className="flex justify-start w-full">
                  <CardContent className="rounded-tr-none w-full">
                    <div className="flex justify-start pl-20 pr-20 pb-3 pt-8 w-full flex-col max-md:justify-center max-md:px-4">
                      <Box>
                        <div className="pb-2">
                          <Typography variant="h6">店舗名</Typography>
                        </div>
                        <div className="pb-2">
                          <Typography variant="h6">{store_name}</Typography>
                        </div>
                      </Box>
                      <Box>
                        <div className="pb-2">
                          <Typography variant="h6">店舗住所</Typography>
                        </div>
                        <div className="pb-2">
                          <Typography variant="h6">{store_address}</Typography>
                        </div>
                      </Box>
                      <Box sx={{ minWidth: 270 }} className="pb-6 pt-6">
                        <Typography className="pb-3">Style Tokyo ID</Typography>
                        <FormControl className="w-full">
                          <TextField
                            id="outlined-basic"
                            // label="※変更時のみ入力"
                            variant="outlined"
                            onChange={handleChangeTextarea}
                            name="style_tokyo_id"
                            value={data.style_tokyo_id}
                          />
                        </FormControl>
                      </Box>
                      <Box sx={{ minWidth: 270 }} className="pb-6 pt-6">
                        <Typography className="pb-3">パスワード</Typography>
                        <FormControl className="w-full">
                          <TextField
                            id="outlined-basic"
                            label="※変更時のみ入力"
                            variant="outlined"
                            onChange={handleChangeTextarea}
                            name="password"
                            value={data.password}
                          />
                        </FormControl>
                      </Box>
                      <Box sx={{ minWidth: 270 }} className="pb-6 pt-6">
                        <Typography className="pb-3">パスワード確認</Typography>
                        <FormControl className="w-full">
                          <TextField
                            id="outlined-basic"
                            label="※変更時のみ入力"
                            variant="outlined"
                            onChange={handleChangeTextarea}
                            name="confirm_password"
                            value={data.confirm_password}
                          />
                        </FormControl>
                      </Box>
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 mb-12">
            <Button variant="contained" className="py-3 w-64" type="submit">
              更新
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default General;
