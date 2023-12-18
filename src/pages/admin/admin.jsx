import React from "react";
import Stylenav from "../Stylenav";

import { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import { DataGrid, jaJP } from "@mui/x-data-grid";
//
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const Admin = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user");
        // console.log(response.data);
        setUserList(response.data);
        console.log("userlist: ", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Create rtl cache
  //   const cacheRtl = createCache({
  //     key: "data-grid-rtl-demo",
  //     stylisPlugins: [prefixer, rtlPlugin],
  //   });
  const existingTheme = useTheme();

  const theme = useMemo(
    () => createTheme({}, jaJP, existingTheme),
    [existingTheme]
  );

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
      field: "store_name",
      headerName: "店舗名",
      type: "text",
      width: 200,
      renderCell: (params) => (
        <Link to={`/update-admin?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "store_address",
      headerName: "店舗住所",
      type: "text",
      width: 200,
      renderCell: (params) => (
        <Link to={`/update-admin?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "password",
      headerName: "パスワード",
      type: "text",
      width: 200,
      renderCell: (params) => (
        <Link to={`/update-admin?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "style_tokyo_id",
      headerName: "Style-Tokyo-Id",
      type: "text",
      width: 200,
      renderCell: (params) => (
        <Link to={`/update-admin?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "salon_id",
      headerName: "Salon-Id",
      type: "text",
      width: 200,
      renderCell: (params) => (
        <Link to={`/update-admin?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "salon_password",
      headerName: "Salon Board Password",
      type: "text",
      width: 200,
      renderCell: (params) => (
        <Link to={`/update-admin?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "permission",
      headerName: "権限",
      type: "text",
      width: 200,
      renderCell: (params) => (
        <Link to={`/update-admin?id=${params.row._id}`}>{params.value}</Link>
      ),
    },
  ];

  const rows = userList.map((item, index) => ({
    id: index + 1,
    store_name: item.store_name,
    store_address: item.store_address,
    password: item.password,
    style_tokyo_id: item.style_tokyo_id,
    salon_id: item.salon_id,
    salon_password: item.salon_password,
    permission: item.permission,
    _id: item._id,
  }));

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
            <div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem] max-md:px-4 flex justify-center">
              <div className="px-12 pt-16 max-md:px-0 max-w-[100rem] max-xl:max-w-[60rem] max-lg:max-w-[50rem] max-md:max-w-full">
                <div blog={{ height: "100%", width: "100%" }}>
                  {/* <CacheProvider value={cacheRtl}> */}
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
                  {/* </CacheProvider> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
