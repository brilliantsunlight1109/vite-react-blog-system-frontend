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

const AddCoupon = () => {
  const [show, setShow] = useState("");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({
    type: "",
    coupon_name: "",
    coupon_content: "",
    uploadImage: null,
    select_menu: "",
    category: "",
    price: "",
    estimate_time: "",
    nomination_fee: "",
    visit_date_condition: "",
    target_stylist: "",
    other_condition: "",
  });
  //img
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

  const handleChangeCheckbox = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.checked }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  return (
    <>
      <div className="container-xl min-h-full">
        <div className="min-h-full">
          <Stylenav />
          <header className="bg-white shadow">
            <div className="mx-4 max-w-full px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 max-md:text-xl">
                クーポン
              </h1>
            </div>
          </header>
          <main>
            <div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem] max-md:px-4">
              <div>
                <form>
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
                              <Box>
                                <div className="mt-3 mb-3">
                                  種別
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
                                      種別
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={data.type}
                                      name="type"
                                      label="種別"
                                      onChange={handleChangeSelect}
                                      className="w-56"
                                    >
                                      <MenuItem value={"全員"}>全員</MenuItem>
                                      <MenuItem value={"新規"}>新規</MenuItem>
                                      <MenuItem value={"再来"}>再来</MenuItem>
                                    </Select>
                                  </FormControl>
                                </div>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-6 pt-4">
                                <Typography className="pb-3">
                                  クーポン名
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-[30rem] max-md:w-full">
                                  <TextField
                                    id="outlined-basic"
                                    label="クーポン名"
                                    variant="outlined"
                                    onChange={handleChangeTextarea}
                                    value={data.coupon_name}
                                    name="coupon_name"
                                  />
                                </FormControl>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-6 pt-4">
                                <Typography className="pb-3">
                                  クーポン内容
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-[30rem] max-md:w-full">
                                  <TextField
                                    id="outlined-basic"
                                    label="クーポン内容"
                                    variant="outlined"
                                    multiline
                                    rows={3}
                                    onChange={handleChangeTextarea}
                                    value={data.coupon_content}
                                    name="coupon_content"
                                  />
                                </FormControl>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-3">
                                <FormControl>
                                  <FormLabel id="demo-radio-buttons-group-label">
                                    メニュー指定
                                    <span className="text-red-600 text-xs pl-2">
                                      *必須"
                                    </span>
                                  </FormLabel>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="female"

                                    value={data.select_menu}
                                    onChange={handleChangeRadio("select_menu")}
                                    className="mt-3"
                                  >
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="あり"
                                    />
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="なし"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-3">
                                <div className="mb-3 mt-3">
                                  <Typography
                                    variant="h6"
                                    className="font-medium"
                                  >
                                    カテゴリ
                                  </Typography>
                                </div>
                                <div className="flex gap-x-12 flex-wrap">
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      name="hair_amount_few"
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">カット</Typography>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      onChange={handleChangeCheckbox}
                                      name="hair_amount_usually"
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">カラー</Typography>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      name="hair_amount_many"
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">パーマ</Typography>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      name="hair_amount_many"
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      縮毛矯正
                                    </Typography>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      name="hair_amount_many"
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      エクステンション
                                    </Typography>
                                  </div>
                                </div>
                                <div className="flex gap-x-12 flex-wrap mt-4">
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      name="hair_amount_few"
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      トリートメント
                                    </Typography>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      onChange={handleChangeCheckbox}
                                      name="hair_amount_usually"
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      ヘアセット
                                    </Typography>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      name="hair_amount_many"
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      ヘッドスパ
                                    </Typography>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      name="hair_amount_many"
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">着付け</Typography>
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <Checkbox
                                      name="hair_amount_many"
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      その他メニュー
                                    </Typography>
                                  </div>
                                </div>
                              </Box>
                            </div>
                          </CardContent>
                        </Card>
                      </Box>
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
                              クーポン画像
                            </Typography>
                          </Toolbar>
                        </AppBar>
                        <Card className="flex justify-center w-full">
                          <CardContent className="rounded-tr-none">
                            <div className="flex justify-center pb-3 pt-3 w-full flex-col max-md:px-0 max-md:justify-center">
                              <Box>
                                <div className="max-md:px-4 w-full">
                                  <div className="flex justify-between flex-col h-[20rem]">
                                    <div className="flex justify-center items-center pt-5 pb-5">
                                      <img
                                        src={flag ? show : data.uploadImage}
                                        // src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
                                        className="w-auto h-40"
                                      />
                                    </div>
                                    <div className="flex justify-center items-center">
                                      <Button
                                        component="label"
                                        variant="contained"
                                        startIcon={<CloudUploadIcon />}
                                      >
                                        アップロード
                                        <VisuallyHiddenInput
                                          type="file"
                                          accept=".png, .jpg, .jpeg"
                                          onChange={handleFileChange(
                                            "uploadImage"
                                          )}
                                        />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </Box>
                            </div>
                          </CardContent>
                        </Card>
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

export default AddCoupon;
