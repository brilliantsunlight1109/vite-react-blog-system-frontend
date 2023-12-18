import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import Stylenav from "./Stylenav";
//mui
//bootstrap
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
//table
import { DataGrid } from "@mui/x-data-grid";
//add_template
import StyleTemplate from "./style/StyleTemplate";
import Style from "./style/Style";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [key, setKey] = useState("home");
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem] max-md:px-3">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        label="スタイル"
                        sx={{ fontSize: "1rem" }}
                        value="1"
                      />
                      <Tab
                        label="テンプレート"
                        sx={{ fontSize: "1rem" }}
                        value="2"
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <Style />
                  </TabPanel>
                  <TabPanel value="2">
                    <StyleTemplate />
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

export default Home;

{
  /* <Tabs
  aria-label="basic tabs example"
  activeKey={key}
  onSelect={(k) => setKey(k)}
  className="mb-3"
>
  <Tab eventKey="home" title="スタイル">
    <Style />
  </Tab>
  <Tab eventKey="profile" title="テンプレート">
    <StyleTemplate />
  </Tab>
</Tabs>; */
}
