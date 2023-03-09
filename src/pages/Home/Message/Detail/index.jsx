import React, { Component } from 'react';
import qs from 'query-string';

export default class Detail extends Component {
  render() {
    // 接收params参数
    // const {id, title, content} = this.props.match.params;
    const search = this.props.location.search;
    const obj = qs.parse(search.slice(1));
    const {id, title, content} = obj;
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {content}</li>
      </ul>
    )
  }
}
