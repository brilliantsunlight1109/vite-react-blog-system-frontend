import React from "react";
import Stylenav from "../Stylenav";
import Modal from "@mui/material/Modal";
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Notice = () => {
  const [age, setAge] = useState("");
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="container-xl min-h-screen">
        <div>
          <Stylenav />
          <header className="bg-white shadow">
            <div className="mx-4 max-w-full px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 max-md:text-xl">
                お知らせ
              </h1>
            </div>
          </header>
          <main>
            <div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem] max-md:px-4">
              <div>
                <div className="container-xl m-auto">
                  <div className="flex flex-col justify-center items-center w-full">
                    <Box
                      sx={{ flexGrow: 1 }}
                      className="w-full max-w-4xl pt-6 mx-auto"
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
                            2023-11-13
                          </Typography>
                          {/* <Button color="inherit">Login</Button> */}
                        </Toolbar>
                      </AppBar>
                      <Card className="flex justify-start w-full pl-8 max-md:justify-center max-md:px-2">
                        <CardContent className="rounded-tr-none">
                          <div
                            className="w-[55rem] max-md:w-full"
                            onClick={handleOpen}
                          >
                            <div>
                              <div className="pt-6">
                                <div className="pb-2">
                                  <Typography variant="h6">
                                    ありがとうございます。
                                  </Typography>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="pt-2 pl-3">
                                <div className="pb-2">
                                  <Typography
                                    variant="h6"
                                    className="text-cyan-600"
                                  >
                                    Information
                                  </Typography>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            {/* <Button onClick={handleOpen}>Open modal</Button> */}
                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  2023-11-13
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  平素より『Style
                                  Tokyo』をご利用いただきまして誠にありがとうございます。
                                  ご利用のお客様へ、以下のアップデートを実施したことをお知らせいたします。
                                  ・ユーザーID変更機能 ・上記に伴い、UIを変更
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        </CardContent>
                      </Card>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Notice;
