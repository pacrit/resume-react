import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";

import "./styles.css";

import {
  Header,
  Icon,
  Divider,
  Grid,
  Segment,
  List,
  Accordion,
  Button,
  Portal
} from "semantic-ui-react";

import { Timeline } from "antd";
import FloatButtonComponent from "./components/FloatButtonComponent";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState();

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab icon={<HomeIcon />} label="Home" {...a11yProps(1)} />
          <Tab icon={<CodeIcon />} label="Skills" {...a11yProps(0)} />
          <Tab icon={<PersonIcon />} label="About me" {...a11yProps(2)} />
          <Tab icon={<SchoolIcon />} label="Knowledge" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <Header as="h2" icon textAlign="center">
            <Icon name="user circle outline" circular />
            <Header.Content>
              Patrick W.
              <br />
              <Button content="Contact" disabled={open} onClick={handleOpen} />
              <Portal onClose={handleClose} open={open}>
                <Segment
                  style={{
                    left: "60%",
                    position: "fixed",
                    top: "60%",
                    zIndex: 1000
                  }}
                >
                  <p>Fone: +55(11)96837-9408</p>
                  <p>Email: patrick.carneiro13@gmail.com</p>

                  <Button content="Close" onClick={handleClose} />
                </Segment>
              </Portal>
            </Header.Content>
          </Header>
          <Header as="h4" textAlign="center">
            Just a ambicious, smart and very curious guy loving new tech's.
            <br />
            Learning quickly and keeping updating.
            <br />
            Never forget semicolon. Sometimes works at first. And always giving
            the code clean.
          </Header>
          <Header as="h3" textAlign="center">
            Focus
          </Header>
          <Header as="h4" textAlign="center">
            Standing out in Front-end (Landing page with React.JS), but
            interested to get specialized in Full Stack(React & Node).
          </Header>
        </div>
        <FloatButtonComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Header as="h3" textAlign="center">
                Soft Skills
              </Header>
              <List as="ul">
                <List.Item as="li">I can learn by myself</List.Item>
                <List.Item as="li">PT-BR or EN-US</List.Item>
                <List.Item as="li">
                  Behavioral
                  <List.List as="ul">
                    <List.Item as="li">A little bit shy</List.Item>
                    <List.Item as="li">Respect the hierarchy</List.Item>
                    <List.Item as="li">Cooperative</List.Item>
                  </List.List>
                </List.Item>
                <List.Item as="li">Crucial with dead line</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" textAlign="center">
                Hard Skills
              </Header>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  Front end
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <List as="ul">
                    <List.Item as="li">HTML 5</List.Item>
                    <List.Item as="li">CSS/SCSS</List.Item>
                    <List.Item as="li">JavaScript</List.Item>
                    <List.Item as="li">React.Js</List.Item>
                    <List.Item as="li">
                      CSS Libraries for React
                      <List.List as="ul">
                        <List.Item as="li">Semantic UI</List.Item>
                        <List.Item as="li">MUI</List.Item>
                        <List.Item as="li">ANTD</List.Item>
                        <List.Item as="li">Chakra UI</List.Item>
                        <List.Item as="li">BootStrap</List.Item>
                      </List.List>
                    </List.Item>
                  </List>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  Back End
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <List as="ul">
                    <List.Item as="li">Node.Js</List.Item>
                    <List.Item as="li">Python</List.Item>
                  </List>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  DataBase
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <List as="ul">
                    <List.Item as="li">MySQL</List.Item>
                    <List.Item as="li">SQL Server</List.Item>
                    <List.Item as="li">MongoDB</List.Item>
                  </List>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid>

          <Divider vertical>And</Divider>
        </Segment>
        <FloatButtonComponent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Header as="h4" textAlign="center">
          Since my first touch in a computer, i knew that i'll be good with
          that. I always was a curious boy, learning while making mistakes. The
          Development part get my attention, because i like to know how the
          things works, know how i go to that page just with a click.
          <br />
          The first lenguage i learned was C and C++, for the robotics
          tournament. And i saw a HTML course and buy it. There i found myself
        </Header>
        <FloatButtonComponent />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Timeline
          mode="left"
          items={[
            {
              label: "01/2023 - Now",
              children: "Udemy - Back-End with Node.Js"
            },
            {
              label: "07/2022 - Now",
              children: "Uniube - IOT"
            },

            {
              label: "01/2022 - 06/2022",
              children: "USJT - analysis and systems development (College)"
            },
            {
              label: "01/2022 - 03/2022",
              children: "Udemy - Dev. Web FullStack"
            },
            {
              label: "01/2019 - 12/2021",
              children: "UAM - computer Science (College) *"
            },
            {
              label: "05/2016 - 12/2018",
              children: "Sesi (High School)"
            }
          ]}
        />
        <div id="sub">
          <Header as="h3">Subtitle</Header>
          <p>* Incomplete</p>
        </div>
        <FloatButtonComponent />
      </TabPanel>
    </Box>
  );
}
