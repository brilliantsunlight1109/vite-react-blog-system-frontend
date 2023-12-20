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
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { useSelector } from "react-redux";
import { fabClasses } from "@mui/material";

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

const UpdateCoupon = () => {
  const [show, setShow] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [coupon, setCoupon] = useState([]);
  const [data, setData] = useState({
    type: "",
    coupon_name: "",
    coupon_content: "",
    menu_specification: "yes",
    hair_cut: true,
    hair_color: true,
    hair_perm: true,
    hair_straightening: true,
    hair_extension: true,
    hair_treatment: true,
    hair_set: true,
    hair_head_spa: true,
    hair_dressing: true,
    hair_other_menu: true,
    price: "",
    estimate_time: "",
    nomination_fee: false,
    uploadImage: null,
    visit_date_condition: "no",
    target_stylist: "no",
    not_used_together: false,
    used_together: false,
    only_student: false,
    only_men: false,
    only_women: false,
  });

  //   console.log("data.type: ", data.type);
  //   console.log("data.coupon_name: ", data.coupon_name);
  //   console.log("data.coupon_content: ", data.coupon_content);
  //   console.log("data.menu_specification: ", data.menu_specification);
  //   console.log("data.hair_cut: ", data.hair_cut);
  //   console.log("data.hair_color: ", data.hair_color);
  //   console.log("data.hair_perm: ", data.hair_perm);
  //   console.log("data.hair_straightening: ", data.hair_straightening);
  //   console.log("data.hair_extension: ", data.hair_extension);
  //   console.log("data.hair_treatment: ", data.hair_treatment);
  //   console.log("data.hair_set: ", data.hair_set);
  //   console.log("data.hair_head_spa: ", data.hair_head_spa);
  //   console.log("data.hair_dressing: ", data.hair_dressing);
  //   console.log("data.hair_other_menu: ", data.hair_other_menu);
  //   console.log("data.price: ", data.price);
  //   console.log("data.estimate_time: ", data.estimate_time);
  //   console.log("data.nomination_fee: ", data.nomination_fee);
  //   console.log("data.uploadImage: ", data.uploadImage);
  //   console.log("data.visit_date_condition: ", data.visit_date_condition);
  //   console.log("data.target_stylist: ", data.target_stylist);
  //   console.log("data.not_used_together: ", data.not_used_together);
  //   console.log("data.used_together: ", data.used_together);
  //   console.log("data.only_student: ", data.only_student);
  //   console.log("data.only_men: ", data.only_men);
  //   console.log("data.only_women: ", data.only_women);

  const [errors, setErrors] = useState({
    type: "",
    coupon_name: "",
    coupon_content: "",
    price: "",
    estimate_time: "",
    uploadImage: "",
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
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };
  //sync_date
  const handleChangeSyncDate = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    // setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };
  //select
  const handleChangeSelect = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  const handleChangeRadio = (key) => (e) => {
    setData((data) => ({ ...data, [key]: e.target.value }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  const handleChangeCheckbox = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.checked }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/coupon/${id}`);
        console.log("response.data: ", response.data);
        setCoupon(response.data);
        setData({
          type: response.data.type,
          coupon_name: response.data.coupon_name,
          coupon_content: response.data.coupon_content,
          menu_specification: response.data.menu_specification,
          hair_cut: response.data.hair_cut,
          hair_color: response.data.hair_color,
          hair_perm: response.data.hair_perm,
          hair_straightening: response.data.hair_straightening,
          hair_extension: response.data.hair_extension,
          hair_treatment: response.data.hair_treatment,
          hair_set: response.data.hair_set,
          hair_head_spa: response.data.hair_head_spa,
          hair_dressing: response.data.hair_dressing,
          hair_other_menu: response.data.hair_other_menu,
          price: response.data.price,
          estimate_time: response.data.estimate_time,
          nomination_fee: response.data.nomination_fee,
          uploadImage: response.data.uploadImage,
          visit_date_condition: response.data.visit_date_condition,
          target_stylist: response.data.target_stylist,
          not_used_together: response.data.not_used_together,
          used_together: response.data.used_together,
          only_student: response.data.only_student,
          only_men: response.data.only_men,
          only_women: response.data.only_women,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!data.type) {
      validationErrors.type = "この項目は必須です。";
    }
    if (!data.coupon_name) {
      validationErrors.coupon_name = "この項目は必須です。";
    }
    if (!data.coupon_content) {
      validationErrors.coupon_content = "この項目は必須です。";
    }
    if (!data.price) {
      validationErrors.price = "この項目は必須です。";
    }
    if (!data.estimate_time) {
      validationErrors.estimate_time = "この項目は必須です。";
    }
    if (!data.uploadImage) {
      validationErrors.uploadImage = "この項目は必須です。";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("coupon_name", data.coupon_name);
    formData.append("coupon_content", data.coupon_content);
    formData.append("menu_specification", data.menu_specification);
    formData.append("hair_cut", data.hair_cut);
    formData.append("hair_color", data.hair_color);
    formData.append("hair_perm", data.hair_perm);
    formData.append("hair_straightening", data.hair_straightening);
    formData.append("hair_extension", data.hair_extension);
    formData.append("hair_treatment", data.hair_treatment);
    formData.append("hair_set", data.hair_set);
    formData.append("hair_head_spa", data.hair_head_spa);
    formData.append("hair_dressing", data.hair_dressing);
    formData.append("hair_other_menu", data.hair_other_menu);
    formData.append("price", data.price);
    formData.append("estimate_time", data.estimate_time);
    formData.append("nomination_fee", data.nomination_fee);
    formData.append("uploadImage", data.uploadImage);
    formData.append("visit_date_condition", data.visit_date_condition);
    formData.append("target_stylist", data.target_stylist);
    formData.append("not_used_together", data.not_used_together);
    formData.append("used_together", data.used_together);
    formData.append("only_student", data.only_student);
    formData.append("only_men", data.only_men);
    formData.append("only_women", data.only_women);
    //
    // console.log("formData :", formData);

    axios
      .put(`/api/coupon/${id}`, formData)
      .then((res) => {
        setShow(null);
        setFlag(false);
        navigate("/coupon");
      })
      .catch((err) => {
        console.log("Error couldn't create Style");
        console.log(err.message);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`/api/coupon/${id}`)
      .then((res) => {
        console.log(res.data.message);
        navigate("/coupon");
      })
      .catch((err) => {
        console.log("Error couldn't delete Coupon");
        console.log(err.message);
      });
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
                              <Box>
                                <div className="mt-3 mb-3">
                                  <Typography variant="h7">
                                    種別
                                    <span className="text-red-600 text-xs pl-2">
                                      *必須"
                                    </span>
                                  </Typography>
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
                                {errors.type && (
                                  <span className="text-red-700 text-base">
                                    {errors.type}
                                  </span>
                                )}
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-6 pt-4">
                                <div className="mb-3">
                                  <Typography variant="h7">
                                    クーポン名
                                    <span className="text-red-600 text-xs pl-2">
                                      *必須"
                                    </span>
                                  </Typography>
                                </div>

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
                                <div>
                                  {errors.coupon_name && (
                                    <span className="text-red-700 text-base">
                                      {errors.coupon_name}
                                    </span>
                                  )}
                                </div>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-6 pt-4">
                                <div className="mb-3">
                                  <Typography className="pb-3" variant="h7">
                                    クーポン内容
                                    <span className="text-red-600 text-xs pl-2">
                                      *必須"
                                    </span>
                                  </Typography>
                                </div>
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
                                <div>
                                  {errors.coupon_content && (
                                    <span className="text-red-700 text-base">
                                      {errors.coupon_content}
                                    </span>
                                  )}
                                </div>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-3">
                                <FormControl>
                                  <Typography variant="h7">
                                    メニュー指定
                                    <span className="text-red-600 text-xs pl-2">
                                      *必須"
                                    </span>
                                  </Typography>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="female"

                                    value={data.menu_specification}
                                    onChange={handleChangeRadio(
                                      "menu_specification"
                                    )}
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
                                    <span className="text-red-600 text-xs pl-2">
                                      *必須"
                                    </span>
                                  </Typography>
                                </div>
                                <div className="flex gap-x-12 flex-wrap">
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="hair_cut"
                                      checked={data.hair_cut}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">カット</Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      checked={data.hair_color}
                                      onChange={handleChangeCheckbox}
                                      name="hair_color"
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">カラー</Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="hair_perm"
                                      checked={data.hair_perm}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">パーマ</Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="hair_straightening"
                                      checked={data.hair_straightening}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      縮毛矯正
                                    </Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="hair_extension"
                                      checked={data.hair_extension}
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
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="hair_treatment"
                                      checked={data.hair_treatment}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      トリートメント
                                    </Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      onChange={handleChangeCheckbox}
                                      name="hair_set"
                                      checked={data.hair_set}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      ヘアセット
                                    </Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="hair_head_spa"
                                      checked={data.hair_head_spa}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      ヘッドスパ
                                    </Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="hair_dressing"
                                      checked={data.hair_dressing}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">着付け</Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="hair_other_menu"
                                      checked={data.hair_other_menu}
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
                              <Box sx={{ minWidth: 300 }} className="pb-3 pt-4">
                                <div className="mb-3">
                                  <Typography className="pb-3" variant="h7">
                                    価格（税込）
                                    <span className="text-red-600 text-xs pl-2">
                                      *必須"
                                    </span>
                                  </Typography>
                                </div>
                                <FormControl className="max-md:w-full">
                                  <div className="flex flex-wrap items-center">
                                    <Typography className="text-3xl pr-3">
                                      ¥
                                    </Typography>
                                    <TextField
                                      id="outlined-basic"
                                      label="価格"
                                      variant="outlined"
                                      onChange={handleChangeTextarea}
                                      value={data.price}
                                      name="price"
                                    />
                                    <Typography className="pl-3">
                                      ※クーポン利用時の割引価格を入力してください
                                    </Typography>
                                  </div>
                                </FormControl>
                                <div>
                                  {errors.price && (
                                    <span className="text-red-700 text-base">
                                      {errors.price}
                                    </span>
                                  )}
                                </div>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-3">
                                <div className="mt-3 mb-3">
                                  施術目安時間
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
                                      施術目安時間
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={data.estimate_time}
                                      name="estimate_time"
                                      label="施術目安時間"
                                      onChange={handleChangeSelect}
                                      className="w-56"
                                    >
                                      <MenuItem value={"10分"}>10分</MenuItem>
                                      <MenuItem value={"20分"}>20分</MenuItem>
                                      <MenuItem value={"30分"}>30分</MenuItem>
                                      <MenuItem value={"40分"}>40分</MenuItem>
                                      <MenuItem value={"50分"}>50分</MenuItem>
                                      <MenuItem value={"60分"}>60分</MenuItem>
                                      <MenuItem value={"90分"}>90分</MenuItem>
                                      <MenuItem value={"120分"}>120分</MenuItem>
                                      <MenuItem value={"150分"}>150分</MenuItem>
                                      <MenuItem value={"180分"}>180分</MenuItem>
                                      <MenuItem value={"3時間30分"}>
                                        3時間30分
                                      </MenuItem>
                                      <MenuItem value={"4時間"}>4時間</MenuItem>
                                      <MenuItem value={"4時間30分"}>
                                        4時間30分
                                      </MenuItem>
                                      <MenuItem value={"5時間"}>5時間</MenuItem>
                                      <MenuItem value={"5時間30分"}>
                                        5時間30分
                                      </MenuItem>
                                      <MenuItem value={"6時間"}>6時間</MenuItem>
                                      <MenuItem value={"6時間30分"}>
                                        6時間30分
                                      </MenuItem>
                                      <MenuItem value={"7時間"}>7時間</MenuItem>
                                    </Select>
                                  </FormControl>
                                </div>
                                {errors.estimate_time && (
                                  <span className="text-red-700 text-base">
                                    {errors.estimate_time}
                                  </span>
                                )}
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-3">
                                <div className="mt-3 mb-3">指名料対象</div>
                                <div className="flex justify-start items-center">
                                  <Checkbox
                                    name="nomination_fee"
                                    checked={data.nomination_fee}
                                    onChange={handleChangeCheckbox}
                                    inputProps={{
                                      "aria-label": "controlled",
                                    }}
                                  />
                                  <Typography variant="h7">
                                    指名料対象にする
                                  </Typography>
                                </div>
                                <div className=" pl-3 mt-2">
                                  <Typography className="text-[1rem]">
                                    ※指名料対象クーポンに設定する場合、スタイリスト掲載情報一覧で指名料の設定が必要となります。
                                  </Typography>
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
                              <span className="text-white-600 text-xs pl-2">
                                *必須"
                              </span>
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
                                    <div className="flex justify-center items-center pt-1">
                                      {errors.uploadImage && (
                                        <span className="text-red-700 text-base">
                                          {errors.uploadImage}
                                        </span>
                                      )}
                                    </div>
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
                              利用条件
                            </Typography>
                          </Toolbar>
                        </AppBar>
                        <Card className="flex justify-start w-full">
                          <CardContent className="rounded-tr-none">
                            <div className="flex justify-start pl-20 pb-3 pt-3 w-full flex-col max-md:px-0 max-md:justify-center">
                              <Box sx={{ minWidth: 300 }} className="pb-3 mt-5">
                                <FormControl>
                                  <Typography variant="h7">
                                    来店日条件
                                  </Typography>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="female"

                                    value={data.visit_date_condition}
                                    onChange={handleChangeRadio(
                                      "visit_date_condition"
                                    )}
                                    className="mt-3"
                                  >
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="設定しない"
                                    />
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="設定する"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-3 mt-5">
                                <FormControl>
                                  <Typography variant="h7">
                                    対象スタイリスト
                                  </Typography>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="female"

                                    value={data.target_stylist}
                                    onChange={handleChangeRadio(
                                      "target_stylist"
                                    )}
                                    className="mt-3"
                                  >
                                    <FormControlLabel
                                      value="no"
                                      control={<Radio />}
                                      label="設定しない"
                                    />
                                    <FormControlLabel
                                      value="yes"
                                      control={<Radio />}
                                      label="設定する"
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Box>
                              <Box sx={{ minWidth: 300 }} className="pb-3">
                                <div className="mb-3 mt-3">
                                  <Typography
                                    variant="h7"
                                    className="font-medium"
                                  >
                                    その他条件
                                  </Typography>
                                </div>
                                <div className="flex gap-x-12 flex-wrap">
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="not_used_together"
                                      checked={data.not_used_together}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      併用不可
                                    </Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      checked={data.used_together}
                                      onChange={handleChangeCheckbox}
                                      name="used_together"
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">併用可</Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="only_student"
                                      checked={data.only_student}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      学生限定
                                    </Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="only_men"
                                      checked={data.only_men}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      男性限定
                                    </Typography>
                                  </div>
                                  <div className="flex justify-start items-center w-[12rem]">
                                    <Checkbox
                                      name="only_women"
                                      checked={data.only_women}
                                      onChange={handleChangeCheckbox}
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                    <Typography variant="h7">
                                      女性限定
                                    </Typography>
                                  </div>
                                </div>
                              </Box>
                            </div>
                          </CardContent>
                        </Card>
                      </Box>
                    </div>
                  </div>
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
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UpdateCoupon;
