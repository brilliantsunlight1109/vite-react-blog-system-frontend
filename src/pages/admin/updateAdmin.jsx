import React from "react";
import Stylenav from "../Stylenav";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

const UpdateAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [userList, setUserList] = useState([]);
  const [data, setData] = useState({
    store_name: "",
    store_address: "",
    password: "",
    style_tokyo_id: "",
    salon_id: "",
    salon_password: "",
    permission: "",
  });
  const [errors, setErrors] = useState({
    store_name: "",
    store_address: "",
    password: "",
    style_tokyo_id: "",
    salon_id: "",
    salon_password: "",
    permission: "",
  });

  const handleChangeTextarea = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  //select
  const handleChangeSelect = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/${id}`);
        setUserList(response.data);
        setData({
          store_name: response.data.store_name,
          store_address: response.data.store_address,
          password: response.data.password,
          style_tokyo_id: response.data.style_tokyo_id,
          salon_id: response.data.salon_id,
          salon_password: response.data.salon_password,
          permission: response.data.permission,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const validationErrors = {};
    if (!data.store_name) {
      validationErrors.store_name = "この項目は必須です。";
    }
    if (!data.store_address) {
      validationErrors.store_address = "この項目は必須です。";
    }
    if (!data.password) {
      validationErrors.password = "この項目は必須です。";
    }
    if (!data.style_tokyo_id) {
      validationErrors.style_tokyo_id = "この項目は必須です。";
    }

    if (!data.salon_id) {
      validationErrors.salon_id = "この項目は必須です。";
    }

    if (!data.salon_password) {
      validationErrors.salon_password = "この項目は必須です。";
    }

    if (!data.permission) {
      validationErrors.permission = "この項目は必須です。";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("admin-data", data);
    axios
      .put(`/api/user/${id}`, data)
      .then((res) => {
        console.log(res.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("Error couldn't update blog");
        console.log(err.message);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`/api/user/${id}`)
      .then((res) => {
        console.log(res.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("Error couldn't delete Blog");
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
                管理者ページ
              </h1>
            </div>
          </header>
          <main>
            <div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem] max-md:px-4">
              <div className="flex flex-col justify-center items-center w-full">
                <Box
                  sx={{ flexGrow: 1 }}
                  className="w-full max-w-3xl mx-auto pt-12"
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
                        ユーザー権限設定
                      </Typography>
                      {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                  </AppBar>
                  <form onSubmit={handleSubmit}>
                    <Card className="flex justify-center w-full">
                      <CardContent className="rounded-tr-none">
                        <div className="flex justify-content pb-3 pt-3 w-full max-md:w-[17rem] flex-col max-md:px-0">
                          <Box>
                            <div className="mt-3 mb-3">
                              店舗名
                              <span className="text-red-600 text-xs pl-2">
                                *必須"
                              </span>
                            </div>
                            <div className="flex flex-row pb-2">
                              <input
                                type="text"
                                name="store_name"
                                onChange={handleChangeTextarea}
                                value={data.store_name}
                                className="block mr-6 w-96 max-md:w-full rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                              />
                            </div>
                            {errors.store_name && (
                              <span className="text-red-700 text-base">
                                {errors.store_name}
                              </span>
                            )}
                          </Box>
                          <Box>
                            <div className="mt-3 mb-3">
                              店舗住所
                              <span className="text-red-600 text-xs pl-2">
                                *必須"
                              </span>
                            </div>
                            <div className="flex flex-row pb-2">
                              <input
                                type="text"
                                name="store_address"
                                onChange={handleChangeTextarea}
                                value={data.store_address}
                                className="block mr-6 w-96 max-md:w-full rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                              />
                            </div>
                            {errors.store_address && (
                              <span className="text-red-700 text-base">
                                {errors.store_address}
                              </span>
                            )}
                          </Box>
                          <Box>
                            <div className="mt-3 mb-3">
                              パスワード
                              <span className="text-red-600 text-xs pl-2">
                                *必須"
                              </span>
                            </div>
                            <div className="flex flex-row pb-2">
                              <input
                                type="text"
                                name="password"
                                onChange={handleChangeTextarea}
                                value={data.password}
                                className="block mr-6 w-96 max-md:w-full rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                              />
                            </div>
                            {errors.password && (
                              <span className="text-red-700 text-base">
                                {errors.password}
                              </span>
                            )}
                          </Box>
                          <Box>
                            <div className="mt-3 mb-3">
                              STYLE TOKYO ID
                              <span className="text-red-600 text-xs pl-2">
                                *必須"
                              </span>
                            </div>
                            <div className="flex flex-row pb-2">
                              <input
                                type="text"
                                name="style_tokyo_id"
                                onChange={handleChangeTextarea}
                                value={data.style_tokyo_id}
                                className="block mr-6 w-96 max-md:w-full rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                              />
                            </div>
                            {errors.style_tokyo_id && (
                              <span className="text-red-700 text-base">
                                {errors.style_tokyo_id}
                              </span>
                            )}
                          </Box>
                          <Box>
                            <div className="mt-3 mb-3">
                              Salon ID
                              <span className="text-red-600 text-xs pl-2">
                                *必須"
                              </span>
                            </div>
                            <div className="flex flex-row pb-2">
                              <input
                                type="text"
                                name="salon_id"
                                onChange={handleChangeTextarea}
                                value={data.salon_id}
                                className="block mr-6 w-96 max-md:w-full rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                              />
                            </div>
                            {errors.salon_id && (
                              <span className="text-red-700 text-base">
                                {errors.salon_id}
                              </span>
                            )}
                          </Box>
                          <Box>
                            <div className="mt-3 mb-3">
                              Salon Board Password
                              <span className="text-red-600 text-xs pl-2">
                                *必須"
                              </span>
                            </div>
                            <div className="flex flex-row pb-2">
                              <input
                                type="text"
                                name="salon_password"
                                onChange={handleChangeTextarea}
                                value={data.salon_password}
                                className="block mr-6 w-96 max-md:w-full rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                              />
                            </div>
                            {errors.salon_password && (
                              <span className="text-red-700 text-base">
                                {errors.salon_password}
                              </span>
                            )}
                          </Box>
                          <Box className="pb-6 mt-4 w-[24rem] max-md:w-[17rem]">
                            <Typography className="pb-3">権限</Typography>
                            <FormControl className="w-full">
                              <InputLabel id="demo-simple-select-label">
                                権限
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.permission}
                                name="permission"
                                label="なし"
                                onChange={handleChangeSelect}
                              >
                                <MenuItem value={"manager"}>管理者</MenuItem>
                                <MenuItem value={"user"}>ユーザー</MenuItem>
                                <MenuItem value={"not"}>権限なし</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="mt-8 mb-8 flex justify-center gap-x-14 max-md:flex-wrap-reverse max-md:gap-y-6">
                      <Box
                        sx={{ minWidth: 300 }}
                        className="flex justify-center items-center"
                      >
                        <Button
                          variant="contained"
                          className="py-3 w-72 text-4xl"
                          style={{ backgroundColor: "#ef4444" }}
                          onClick={handleDelete}
                        >
                          削除
                        </Button>
                      </Box>
                      <Box
                        sx={{ minWidth: 300 }}
                        className="flex justify-center items-center"
                      >
                        <Button
                          variant="contained"
                          className="py-3 w-72"
                          type="submit"
                        >
                          更新
                        </Button>
                      </Box>
                    </div>
                  </form>
                </Box>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UpdateAdmin;
