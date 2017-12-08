import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import './App.css';

class Story extends Component {

  urlFormater = (url) => {
    let newString;
    newString = url.split('/');

    // if it begins http
    if(url.includes('://')){
      if(newString[2].includes('www')){
        return newString[2].slice(4);
      } else {
        return newString[2];
      }
      // if it begins www
    } else if(newString[0].includes('www')) {
      return newString[0].slice(4);
      // if there is neither
    } else {
      return newString[0]
    }
  }

  render() {
    return(
      <div>
        <List>
          <a href={this.props.story.url} style={{textDecoration: 'none'}}>
            <ListItem
              primaryText={`${this.props.story.title}`}
              secondaryText={`${this.props.story.by} // ${this.urlFormater(this.props.story.url)}`}
              style={{color: '#565656'}}
            >
            </ListItem>
          </a>
        </List>
        <Divider />
      </div>
    );
  }
}

export default Story;
