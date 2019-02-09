import React, { Component } from 'react';
import './Info.css'

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';


const classes = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    display: 'block',
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

class Info extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div className={'Info'}>
        <div className={classes.root}>

        <Typography component="h1" variant="headline" style={{color:'white'}} gutterBottom>
          Keywords
        </Typography>
        <br/>
        <div/>

          {/* <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Keywords
            </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <EditIcon />
                  </Badge>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar> */}

          {this.props.keywords.map((keyword, i) => {
            return (
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <div className={classes.column}>
                    <Typography className={classes.heading}>{keyword.name}</Typography>
                  </div>
                  {/* <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
                  </div> */}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                  <div style={{ display: 'block' }}>
                    <div>
                      <Chip
                        style={{ marginRight: 8 }}
                        avatar={<Avatar>W</Avatar>}
                        label="Wikipedia"
                        // onClick={handleClick}
                        className={classes.chip}
                      />
                      <Chip
                        style={{ marginRight: 8 }}
                        avatar={<Avatar>G</Avatar>}
                        label="Google"
                        // onClick={handleClick}
                        className={classes.chip}
                      />
                      <Chip
                        style={{ marginRight: 8 }}
                        avatar={<Avatar>B</Avatar>}
                        label="Bing"
                        // onClick={handleClick}
                        className={classes.chip}
                      />
                    </div>
                    <div>
                      <Chip
                        style={{ marginTop: 8, marginRight: 8 }}
                        avatar={<Avatar><InsertDriveFileIcon /></Avatar>}
                        label="Lecture Notes - Week 5"
                        // onClick={handleClick}
                        className={classes.chip}
                      />
                    </div>
                    <br />
                    <div>
                      <Typography>{keyword.description}</Typography>
                    </div>
                  </div>

                  {/* <div className={classNames(classes.column, classes.helper)}>
                    <Typography variant="caption">
                      Select your destination of choice
              <br />
                      <a href="#sub-labels-and-columns" className={classes.link}>
                        Learn more
              </a>
                    </Typography>
                  </div> */}
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                  <Button size="small" color="default">
                    Remove
                  </Button>
                </ExpansionPanelActions>
              </ExpansionPanel>

            )
          })}
        </div>
      </div>
    )
  }
}

export default withStyles(classes)(Info);


