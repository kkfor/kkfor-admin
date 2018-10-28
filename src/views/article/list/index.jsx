import React, { Component } from 'react'
import { Table } from 'antd'

class ArticleList extends Component {
  render() {
    const columns = [
      {title: 'name'}
    ]
    return (
      <div>
        <Table columns={columns}></Table>
      </div>
    )
  }
}

export default ArticleList