import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class PaginationBar extends Component {
  render() {
    const pages = [];

    for (let i = 1; i < Math.round(this.props.count / 8); i++) {
      pages.push(
        <Pagination.Item key={i} onClick={this.props.updatePage}>
          {i}
        </Pagination.Item>
      );
    }

    return <Pagination className="pagination">{pages}</Pagination>;
  }
}

export default PaginationBar;