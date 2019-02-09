import React, { Component } from 'react';
import './Lecture.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class Lecture extends Component {
  state = {
    file: null,
    page: 1
  };

  constructor(props) {
    super(props);
    this.file = React.createRef();
  }

  handleChange = (event) => {
    console.log(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    this.setState({file: url});
  };


  render() {
    return (
      <div className={'Lecture'} style={{height:'85vh'}}>
        <Typography component="h1" variant="headline" style={{color:'white'}} gutterBottom>
            {this.props.currentKeyword}
        </Typography>
        {/* <input onChange={this.handleChange} type="file" ref={this.file}/>
        {this.state.file ?
          <object data={this.state.file + `#view=FitH&page=` + this.state.page} type="application/pdf">
          <embed src={this.state.file + `#view=FitH&page=` + this.state.page} type="application/pdf" />
        </object> : null} */}

        <Card style={{height:'100%'}} raised> 
          <CardMedia
            component="iframe"
            style={{height:'100%'}}
            src={this.props.currentUrl}
          />
        </Card>
      </div>
    )
  }
}

export default Lecture;