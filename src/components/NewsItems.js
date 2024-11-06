import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NewsItems extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageurl: PropTypes.string,
    newsurl: PropTypes.string,
    date: PropTypes.string
  };

  render() {
    let { title, description, imageurl, newsurl, date } = this.props;
    return (
      <div className='my-4'>
        <div className="card">
          <img src={imageurl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">On {date}</small></p> 
            <a href={newsurl} target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;