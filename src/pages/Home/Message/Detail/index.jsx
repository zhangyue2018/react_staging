import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    // 接收params参数
    const {id, title, content} = this.props.match.params;
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {content}</li>
      </ul>
    )
  }
}
