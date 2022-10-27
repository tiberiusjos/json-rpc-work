import React from 'react';
import { Label, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class WeighingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }
  
  handleClick(e, index) {
    e.preventDefault();
    if (index < 0)
      this.props.onPageChange(0);
    else
      this.props.onPageChange(index);
  }

  render() {
    const { pageSize, count, currentPage } = this.props;

    this.pageSize = pageSize;
    this.pagesCount = Math.ceil(count / pageSize);

    return (
      <Pagination size="sm" aria-label="Page navigation example">
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink
            onClick={e => this.handleClick(e, currentPage - 1)}
            previous
            href="#"
          />
        </PaginationItem>
        {[...Array(this.pagesCount)].map((page, i) => 
          <PaginationItem active={i === currentPage} key={i}>
            <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
          <PaginationLink
            onClick={e => this.handleClick(e, currentPage + 1)}
            next
            href="#"
          />
        </PaginationItem>
        <PaginationItem>
          <div style={{ paddingLeft: 10 }} >Total Count: {count}</div>
        </PaginationItem>
      </Pagination>
    );
  }
}