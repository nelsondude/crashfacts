import React, { Component } from 'react';
import './App.css';
import Text from "../components/Text/Text";
import Info from "../components/Info/Info";
import Lecture from "../components/Lecture/Lecture";

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ClassIcon from '@material-ui/icons/Class';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: 'green'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    paddingTop: '80px'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class App extends Component {
  state = {
    currentKeyword: 'Keyword Info',
    currentWorkspace: 'My',
    currentUrl: 'https://m.bing.com/',
    keywords: [],
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  keywordsChanged = (keywords) => {
    const arr = [keywords, ...this.state.keywords];
    this.setState({keywords: [].concat(...arr)})
  };

  currentWorkspaceChanged = (workspace) => {
    this.setState({currentWorkspace: workspace});
  }

  currentUrlChanged = (url) => {
    this.setState({currentUrl: url});
  } 

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {this.state.currentWorkspace} Workspace
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Fundamentals of Programming', 'Cognitive Psychology', 'Linguistics', 'Microbiology'].map((text, index) => (
              <ListItem button key={text} onClick={()=>{this.currentWorkspaceChanged(text)}}>
                <ListItemIcon><ClassIcon/></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><AccountCircleIcon/></ListItemIcon>
              <ListItemText primary='Alex Nelson' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><HelpIcon/></ListItemIcon>
              <ListItemText primary='Help' />
            </ListItem>
          </List>
          <Divider />
          {/* <iframe src="/logo.html" height="300">
          </iframe> */}
          <br/>
          <br/>
          <br/>
          <br/>
          <div className={'rotate-360'}>
            <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

              <ellipse cx="120" cy="120" rx="50" ry="100" stroke="red" fill="red" stroke-width="5" />

              <path d="M110 165 Q 110 145 108 145" stroke="" fill="yellow" stroke-width="5" />
              <path d="M108 145 Q 97 132 100 128" stroke="yellow" fill="yellow" stroke-width="5" />
              <path d="M100 128 Q 102 116 118 112" stroke="yellow" fill="yellow" stroke-width="5" />

              <path d="M130 165 Q 130 145 132 145" stroke="yellow" fill="yellow" stroke-width="5" />
              <path d="M132 145 Q 143 132 140 128" stroke="yellow" fill="yellow" stroke-width="5" />
              <path d="M140 128 Q 138 116 118 112" stroke="yellow" fill="yellow" stroke-width="5" />

              <ellipse cx="120" cy="130" rx="22" ry="16" stroke="transparent" fill="yellow" stroke-width="3" />
              <rect x="108" y="145" width="20" height="20" stroke="transparent" fill="yellow" stroke-width="3" />

              <ellipse cx="120" cy="170" rx="15" ry="5" stroke="black" fill="orange" stroke-width="5" />
              <ellipse cx="120" cy="180" rx="15" ry="5" stroke="black" fill="orange" stroke-width="5" />
              <ellipse cx="120" cy="190" rx="15" ry="5" stroke="black" fill="orange" stroke-width="5" />

              <polyline points="80 120 85 135 90 130 95 145 100 140"
                stroke="orange" fill="transparent" stroke-width="5" />
              <polyline points="85 85 90 100 96 93 100 110 105 105"
                stroke="orange" fill="transparent" stroke-width="5" />
              <polyline points="125 105 130 110 134 95 140 105 146 90"
                stroke="orange" fill="transparent" stroke-width="5" />
              <polyline points="145 130 148 140 155 128 158 135 165 128"
                stroke="orange" fill="transparent" stroke-width="5" />
            </svg>

            <img style={{width:'100%'}} src="/CrashFacts.png"/>

          </div>
        </Drawer>

        <div className={classNames(classes.content, {
          [classes.contentShift]: open,
        })}>
          <div className="row">
            <div className="col-7">
              <Text keywordsChanged={this.keywordsChanged}/>
              <Info keywords={this.state.keywords} currentUrlChanged={this.currentUrlChanged}/>
            </div>
            <div className="col-5">
              <Lecture currentKeyword={this.state.currentKeyword} currentUrl={this.state.currentUrl}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);

