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

const UpdateBlog = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState("");
  const [flag, setFlag] = useState(true);
  const [key, setKey] = useState("post");
  const location = useLocation();
  //redux
  // const username = useSelector((state) => state.username);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [blog, setBlog] = useState([]);
  const [data, setData] = useState({
    post_date: "",
    contributor: "",
    contributor_user: [],
    category: "",
    title_character: "",
    coupon: "",
    signature: "",
    uploadImage: "",
    post_text: "",
  });

  const [errors, setErrors] = useState({
    post_date: "",
    contributor: "",
    category: "",
    title_character: "",
    post_text: "",
    coupon: "",
    uploadImage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(`/api/blog/${id}`);
        // const response2 = await axios.get("/api/user");
        // const stylename = response2.data.filter(
        //   (item) => item.permission === "user"
        // );
        // const contributor_user = stylename.map((item) => item.username);
        const response2 = await axios.get("/api/stylist");
        const contributor_user = response2.data.map((item) => item.name);
        setBlog(response1.data);
        setData({
          post_date: response1.data.post_date,
          contributor: response1.data.contributor,
          category: response1.data.category,
          title_character: response1.data.title_character,
          coupon: response1.data.coupon,
          signature: response1.data.signature,
          uploadImage: response1.data.uploadImage,
          post_text: response1.data.post_text,
          contributor_user: contributor_user,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  console.log("data.contributor :", data.contributor);

  console.log("data.contributor_user: ", data.contributor_user);

  //ImageUpload
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

  // const handleFileChange = (key) => (event) => {
  // 	const file = event.target.files[0];

  // 	if (file) {
  // 		const reader = new FileReader();
  // 		reader.onload = () => {
  // 			const image = reader.result;

  // 			setData((data) => ({
  // 				...data,
  // 				[key]: image,
  // 			}));
  // 		};
  // 		reader.readAsDataURL(file);
  // 	}
  // };

  const handleFileChange = (key) => (e) => {
    setData((data) => ({
      ...data,
      [key]: e.target.files[0],
    }));
    setShow(URL.createObjectURL(e.target.files[0]));
    setFlag(false);
  };
  // console.log("show:", show);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const validationErrors = {};
    if (!data.post_date) {
      validationErrors.post_date = "この項目は必須です。";
    }
    if (!data.contributor) {
      validationErrors.contributor = "この項目は必須です。";
    }

    if (!data.category) {
      validationErrors.category = "この項目は必須です。";
    }

    if (!data.title_character) {
      validationErrors.title_character = "この項目は必須です。";
    }

    if (!data.post_text) {
      validationErrors.post_text = "この項目は必須です。";
    }
    if (!data.coupon) {
      validationErrors.coupon = "この項目は必須です。";
    }
    if (!data.uploadImage) {
      validationErrors.uploadImage = "この項目は必須です。";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    formData.append("post_date", data.post_date);
    formData.append("contributor", data.contributor);
    formData.append("category", data.category);
    formData.append("title_character", data.title_character);
    formData.append("coupon", data.coupon);
    formData.append("signature", data.signature);
    formData.append("uploadImage", data.uploadImage);
    formData.append("post_text", data.post_text);
    console.log("data.uplodaImage: ", data.uploadImage);
    console.log("formData: ", formData);
    console.log("show: ", show);
    axios
      .put(`/api/blog/${id}`, formData)
      .then((res) => {
        // setData({
        // 	post_date: "",
        // 	contributor: "",
        // 	category: "",
        // 	title_character: "",
        // 	coupon: "",
        // 	signature: "",
        // 	uploadImage: null,
        // 	post_text: "",
        // });
        console.log(res.data.message);
        navigate("/blog");
      })
      .catch((err) => {
        console.log("Error couldn't update blog");
        console.log(err.message);
      });
  };
  const handleDelete = () => {
    axios
      .delete(`/api/blog/${id}`)
      .then((res) => {
        console.log(res.data.message);
        navigate("/blog");
      })
      .catch((err) => {
        console.log("Error couldn't delete Blog");
        console.log(err.message);
      });
  };
  // console.log(data.post_date);
  // console.log(data.contributor);
  // console.log(data.category);
  // console.log(data.title_character);
  // console.log(data.coupon);
  // console.log(data.signature);
  // console.log(data.uploadImage);
  // console.log(data.post_text);

  //textarea

  const handleChangeTextarea = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  //sync_date
  const handleChangeSyncDate = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  //select
  const handleChangeSelect = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setErrors((data) => ({ ...data, [e.target.name]: "" }));
  };

  return (
    <>
      <div className="container-xl min-h-screen">
        <div className="min-h-full">
          <Stylenav />
          <header className="bg-white shadow">
            <div className="mx-4 max-w-full px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 max-md:text-xl">
                ブログ
              </h1>
            </div>
          </header>
          <main>
            <div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem] max-md:px-4">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="container-xl m-auto">
                    {/* <div className="flex flex-col justify-center items-center w-full">
										<Box
											sx={{ flexGrow: 1 }}
											className="w-full max-w-5xl pt-6 mx-auto"
										>
											<AppBar position="static" className="rounded-t-lg">
												<Toolbar>
													
													<Typography
														variant="h6"
														component="div"
														sx={{ flexGrow: 1 }}
													>
														AI生成
													</Typography>
												
												</Toolbar>
											</AppBar>
											<Card className="flex justify-center w-full">
												<CardContent className="rounded-tr-none">
													<div>
														<div className="pt-6">
															<div className="pb-2">
																<Typography variant="h7">
																	今月の生成数 19/100
																</Typography>
															</div>
															<div className="pl-2">
																<Typography
																	variant="body2"
																	className="text-slate-500"
																>
																	※月の生成数はブログと口コミで共通です
																</Typography>
															</div>
														</div>
														<div className="flex justify-center items-center gap-x-16 pb-3 pt-4">
															<Box sx={{ minWidth: 300 }}>
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
																		<MenuItem value={10}>未選択</MenuItem>
																	</Select>
																</FormControl>
															</Box>
															<Box
																sx={{ minWidth: 300 }}
																className="flex justify-center items-center"
															>
																<Button
																	variant="contained"
																	className="py-3 w-full"
																>
																	テンプレートを反映
																</Button>
															</Box>
														</div>
													</div>
												</CardContent>
											</Card>
										</Box>
									</div> */}
                    {/* <div className="mt-24 flex justify-center gap-x-14">
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
                              基本設定
                            </Typography>
                            {/* <Button color="inherit">Login</Button> */}
                          </Toolbar>
                        </AppBar>
                        <Card className="flex justify-start w-full">
                          <CardContent className="rounded-tr-none">
                            <div className="flex justify-start pl-20 pb-3 pt-3 w-full flex-col max-md:px-0 max-md:justify-center">
                              <Box>
                                <div className="mt-3 mb-3">
                                  投稿日時
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </div>
                                <div className="flex flex-row pb-2">
                                  <input
                                    type="date"
                                    name="post_date"
                                    onChange={handleChangeSyncDate}
                                    value={data.post_date}
                                    className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                                  />
                                </div>
                                {errors.post_date && (
                                  <span className="text-red-700 text-base">
                                    {errors.post_date}
                                  </span>
                                )}
                              </Box>
                              <Box>
                                <div className="mt-3 mb-3">
                                  投稿者
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
                                      選択してください
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={data.contributor}
                                      name="contributor"
                                      label="選択してください"
                                      onChange={handleChangeSelect}
                                      className="w-56"
                                    >
                                      {Array.isArray(data.contributor_user) &&
                                        data.contributor_user.map((name) => (
                                          <MenuItem key={name} value={name}>
                                            {name}
                                          </MenuItem>
                                        ))}
                                    </Select>
                                  </FormControl>
                                </div>
                                {errors.contributor && (
                                  <span className="text-red-700 text-base">
                                    {errors.contributor}
                                  </span>
                                )}
                              </Box>
                              {/* <Box sx={{ minWidth: 300 }} className="pb-6 pt-4">
                                <Typography className="pb-3">
                                  投稿者
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-full">
                                  <TextField
                                    id="outlined-basic"
                                    label="投稿者"
                                    variant="outlined"
                                    // onChange={handleChangeTextarea}
                                    value={username}
                                    name="contributor"
                                  />
                                </FormControl>
                              </Box> */}
                              <Box>
                                <div className="mt-3 mb-3">
                                  カテゴリ
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
                                      選択してください
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={data.category}
                                      name="category"
                                      label="選択してください"
                                      onChange={handleChangeSelect}
                                      className="w-56"
                                    >
                                      <MenuItem value={"おすすめスタイル"}>
                                        おすすめスタイル
                                      </MenuItem>
                                      <MenuItem value={"サロンのNEWS"}>
                                        サロンのNEWS
                                      </MenuItem>
                                      <MenuItem value={"おすすめメニュー"}>
                                        おすすめメニュー
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </div>
                                {errors.category && (
                                  <span className="text-red-700 text-base">
                                    {errors.category}
                                  </span>
                                )}
                              </Box>
                              <Box
                                sx={{ minWidth: 300 }}
                                className="pb-6 pt-4 max-md:w-[17rem]"
                              >
                                <Typography className="pb-3">
                                  タイトル ※25文字
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-full">
                                  <TextField
                                    id="outlined-basic"
                                    label="タイトル ※25文字"
                                    variant="outlined"
                                    onChange={handleChangeTextarea}
                                    value={data.title_character}
                                    name="title_character"
                                  />
                                </FormControl>
                                {errors.title_character && (
                                  <span className="text-red-700 text-base">
                                    {errors.title_character}
                                  </span>
                                )}
                              </Box>
                              <Box
                                sx={{ minWidth: 300 }}
                                className="pb-6 max-md:w-[16rem]"
                              >
                                <Typography className="pb-3">
                                  クーポン
                                  <span className="text-red-600 text-xs pl-2">
                                    *必須"
                                  </span>
                                </Typography>
                                <FormControl className="w-full">
                                  <InputLabel id="demo-simple-select-label">
                                    なし
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="coupon"
                                    value={data.coupon}
                                    label="なし"
                                    onChange={handleChangeSelect}
                                  >
                                    <MenuItem value={"なし"}>なし</MenuItem>
                                    <MenuItem
                                      value={
                                        "平日限定【メンズ】カット¥4000[メンズカット/メンズ/フェード/立川]"
                                      }
                                    >
                                      平日限定【メンズ】カット¥4000[メンズカット/メンズ/フェード/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="平日限定【メンズ】カット+クイックスパ¥5000
																				[メンズカット/立川/眉毛]"
                                    >
                                      平日限定【メンズ】カット+クイックスパ¥5000
                                      [メンズカット/立川/眉毛]
                                    </MenuItem>
                                    <MenuItem value="平日限定【メンズ】カット+ニュアンスパーマ¥10000[メンズ/フェード/立川]">
                                      平日限定【メンズ】カット+ニュアンスパーマ¥10000[メンズ/フェード/立川]
                                    </MenuItem>
                                    <MenuItem value="平日限定【メンズ】カット+ツイストスパイラルパーマ¥11500[メンズ/立川]">
                                      平日限定【メンズ】カット+ツイストスパイラルパーマ¥11500[メンズ/立川]
                                    </MenuItem>
                                    <MenuItem value="平日限定【メンズ】カット+波巻きスパイラルパーマ¥12500[メンズ/眉毛/立川]">
                                      平日限定【メンズ】カット+波巻きスパイラルパーマ¥12500[メンズ/眉毛/立川]
                                    </MenuItem>
                                    <MenuItem value="平日限定【メンズ】カット+カラー¥10000[メンズカット/フェード/立川/眉毛]">
                                      平日限定【メンズ】カット+カラー¥10000[メンズカット/フェード/立川/眉毛]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット¥4500[メンズカット/センターパート/立川]">
                                      【メンズ】カット¥4500[メンズカット/センターパート/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】刈り上げメンテナンスカット¥2500【メンズ/立川】">
                                      【メンズ】刈り上げメンテナンスカット¥2500【メンズ/立川】
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+眉毛カット¥5500[メンズカット//立川/眉毛]">
                                      【メンズ】カット+眉毛カット¥5500[メンズカット//立川/眉毛]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+ニュアンスパーマ¥10500[メンズパーマ/フェード/立川]">
                                      【メンズ】カット+ニュアンスパーマ¥10500[メンズパーマ/フェード/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+ツイストスパイラルパーマ¥12500[メンズ/ツイストパーマ]">
                                      【メンズ】カット+ツイストスパイラルパーマ¥12500[メンズ/ツイストパーマ]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+波巻きスパイラルパーマ¥13500[メンズ/メンズパーマ/立川]">
                                      【メンズ】カット+波巻きスパイラルパーマ¥13500[メンズ/メンズパーマ/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="期間限定 学割U24【メンズ】
																				カット+眉毛カット¥3800[メンズ/立川]"
                                    >
                                      期間限定 学割U24【メンズ】
                                      カット+眉毛カット¥3800[メンズ/立川]
                                    </MenuItem>
                                    <MenuItem value="学割U24【メンズ】カット¥3800[メンズカット/メンズ/フェード/立川]">
                                      学割U24【メンズ】カット¥3800[メンズカット/メンズ/フェード/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+炭酸ヘッドスパ¥6000[メンズカット/センターパート/立川]">
                                      【メンズ】カット+炭酸ヘッドスパ¥6000[メンズカット/センターパート/立川]
                                    </MenuItem>
                                    <MenuItem value="学割U24【メンズ】カット+ニュアンスパーマ¥9500[メンズカット/フェード]">
                                      学割U24【メンズ】カット+ニュアンスパーマ¥9500[メンズカット/フェード]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+ポイントパーマ¥9500[メンズパーマ/センターパート/立川]">
                                      【メンズ】カット+ポイントパーマ¥9500[メンズパーマ/センターパート/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value={
                                        "【メンズ】カット+ニュアンスパーマ+トリートメント¥12000[メンズ/立川]"
                                      }
                                    >
                                      【メンズ】カット+ニュアンスパーマ+トリートメント¥12000[メンズ/立川]
                                    </MenuItem>
                                    <MenuItem value="【TAKUMI指名】U24カット+ツイストスパイラルパーマor波巻パーマ+眉カット">
                                      【TAKUMI指名】U24カット+ツイストスパイラルパーマor波巻パーマ+眉カット
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+ツイストスパイラル+トリートメント¥14000[メンズ/立川]">
                                      【メンズ】カット+ツイストスパイラル+トリートメント¥14000[メンズ/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+波巻きスパイラルパーマ+トリートメント¥15000[立川/眉毛]">
                                      【メンズ】カット+波巻きスパイラルパーマ+トリートメント¥15000[立川/眉毛]
                                    </MenuItem>
                                    <MenuItem
                                      value="【GOTA指名】カット+ケアパーマ
																				¥1,2000(立川/ケアパーマ/ブリーチパーマ)"
                                    >
                                      【GOTA指名】カット+ケアパーマ
                                      ¥1,2000(立川/ケアパーマ/ブリーチパーマ)
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+ダウンパーマ¥10500[メンズパーマ/センターパート/立川]">
                                      【メンズ】カット+ダウンパーマ¥10500[メンズパーマ/センターパート/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+縮毛ストレート+トリートメント¥17300[メンズ/立川/眉毛]">
                                      【メンズ】カット+縮毛ストレート+トリートメント¥17300[メンズ/立川/眉毛]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】ワンカラー¥6000[メンズパーマ/ツイストスパイラルパーマ/立川]">
                                      【メンズ】ワンカラー¥6000[メンズパーマ/ツイストスパイラルパーマ/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】ダブルカラー¥13000[メンズパーマ/ツイストスパイラルパーマ/立川]">
                                      【メンズ】ダブルカラー¥13000[メンズパーマ/ツイストスパイラルパーマ/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】ダブルカラー+トリートメント¥15500[メンズパーマ/フェード/立川]">
                                      【メンズ】ダブルカラー+トリートメント¥15500[メンズパーマ/フェード/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】メッシュキャップハイライト¥13000~[メンズカット/フェード/立川]">
                                      【メンズ】メッシュキャップハイライト¥13000~[メンズカット/フェード/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+カラー¥10500[メンズカット/ツイストパーマ/フェード/立川]">
                                      【メンズ】カット+カラー¥10500[メンズカット/ツイストパーマ/フェード/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="学割U24
																				【メンズ】カット+カラー¥9500[メンズカット/フェード/立川/眉毛]"
                                    >
                                      学割U24
                                      【メンズ】カット+カラー¥9500[メンズカット/フェード/立川/眉毛]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+カラー+パーマ¥16000[メンズカット/立川/眉毛]">
                                      【メンズ】カット+カラー+パーマ¥16000[メンズカット/立川/眉毛]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+ダブルカラー+トリートメント¥18300[メンズカット/立川]">
                                      【メンズ】カット+ダブルカラー+トリートメント¥18300[メンズカット/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】カット+メッシュキャップ+トリートメント¥17800[メンズ/眉毛/立川]">
                                      【メンズ】カット+メッシュキャップ+トリートメント¥17800[メンズ/眉毛/立川]
                                    </MenuItem>
                                    <MenuItem value="【メンズ】トリートメント¥2500~[メンズ/メンズパーマ/センターパート/立川]">
                                      【メンズ】トリートメント¥2500~[メンズ/メンズパーマ/センターパート/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="【2回目限定】平日限定カット￥4000
																				[メンズパーマ/センターパート/立川]"
                                    >
                                      【2回目限定】平日限定カット￥4000
                                      [メンズパーマ/センターパート/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="【2回目の方限定】カット+眉毛カット5500
																				/メンズパーマ/眉毛/立川】"
                                    >
                                      【2回目の方限定】カット+眉毛カット5500
                                      /メンズパーマ/眉毛/立川】
                                    </MenuItem>
                                    <MenuItem
                                      value="【2回目の方限定】カット￥4500
																				[メンズサロン/メンズパーマ/立川]"
                                    >
                                      【2回目の方限定】カット￥4500
                                      [メンズサロン/メンズパーマ/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="【TAKUMI】U24
																				2回目カット+ツイストスパイラルor波巻パーマ+眉カット"
                                    >
                                      【TAKUMI】U24
                                      2回目カット+ツイストスパイラルor波巻パーマ+眉カット
                                    </MenuItem>
                                    <MenuItem
                                      value="【2回目の方限定】カット+ヘッドスパ￥6000
																				[メンズパーマ/眉毛/立川]"
                                    >
                                      【2回目の方限定】カット+ヘッドスパ￥6000
                                      [メンズパーマ/眉毛/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="【2回目の方限定】カット+ニュアンスパーマ￥10500
																				[メンズカット/立川]"
                                    >
                                      【2回目の方限定】カット+ニュアンスパーマ￥10500
                                      [メンズカット/立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="2回目の方限定】カット+ツイストスパイラルパーマ￥12500
																				[立川]"
                                    >
                                      2回目の方限定】カット+ツイストスパイラルパーマ￥12500
                                      [立川]
                                    </MenuItem>
                                    <MenuItem value="【2回目の方限定】カット+波巻きスパイラルパーマ￥13500[立川]">
                                      【2回目の方限定】カット+波巻きスパイラルパーマ￥13500[立川]
                                    </MenuItem>
                                    <MenuItem
                                      value="【GOTA指名】2回目
																				カット+ケアパーマ(立川/ケアパーマ/ブリーチパーマ)"
                                    >
                                      【GOTA指名】2回目
                                      カット+ケアパーマ(立川/ケアパーマ/ブリーチパーマ)
                                    </MenuItem>
                                    <MenuItem
                                      value="【2回目の方限定】カット+カラー￥10500
																				[立川/眉毛/メンズカット]"
                                    >
                                      【2回目の方限定】カット+カラー￥10500
                                      [立川/眉毛/メンズカット]
                                    </MenuItem>
                                    <MenuItem value="【2回目の方限定】カット+ダブルカラー+トリートメント￥18,300[立川]">
                                      【2回目の方限定】カット+ダブルカラー+トリートメント￥18,300[立川]
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                                {errors.coupon && (
                                  <span className="text-red-700 text-base">
                                    {errors.coupon}
                                  </span>
                                )}
                              </Box>
                              <Box
                                sx={{ minWidth: 300 }}
                                className="pb-6 max-md:w-[16rem]"
                              >
                                <Typography className="pb-3">署名</Typography>
                                <FormControl className="w-full">
                                  <InputLabel id="demo-simple-select-label">
                                    なし
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data.signature}
                                    name="signature"
                                    label="なし"
                                    onChange={handleChangeSelect}
                                  >
                                    <MenuItem value={"なし"}>なし</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                              <Box>
                                <Typography
                                  variant="body2"
                                  className="ml-3 mb-3 text-slate-500 "
                                >
                                  ※前回の同期で追加したスタイルを削除してから追加を行うモードです
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
                              本文
                              <span className="text-white-600 text-xs pl-2">
                                *必須"
                              </span>
                            </Typography>
                            {/* <Button color="inherit">Login</Button> */}
                          </Toolbar>
                        </AppBar>
                        <Card className="flex justify-start w-full max-md:justify-center">
                          <CardContent className="rounded-tr-none">
                            <div className="w-full">
                              <div className="pl-24 max-md:pl-0">
                                {/* <Button
																component="label"
																variant="contained"
																startIcon={<CloudUploadIcon />}
																className="py-2 px-8"
															>
																画像をアップロード
																<VisuallyHiddenInput type="file" />
															</Button> */}
                                <div className="flex justify-between flex-col">
                                  <div className="flex justify-center items-center pt-5 pb-5">
                                    <img
                                      src={flag ? data.uploadImage : show}
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
                              <div className="pl-24 pt-8 pb-4 max-md:pl-0">
                                <TextField
                                  className="w-[50rem] max-md:w-[17rem]"
                                  id="outlined-multiline-static"
                                  onChange={handleChangeTextarea}
                                  multiline
                                  rows={15}
                                  defaultValue="Default Value"
                                  name="post_text"
                                  value={data.post_text}
                                />
                                {errors.post_text && (
                                  <span className="text-red-700 text-base">
                                    {errors.post_text}
                                  </span>
                                )}
                              </div>
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

export default UpdateBlog;
