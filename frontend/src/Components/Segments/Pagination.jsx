import React, { Component } from 'react';

class Pagination extends Component{


  constructor(props) {

      super(props);
      this.state = { pager: {} };
  }

  componentWillMount() {
      if (this.props.items && this.props.items.length) {
          this.setPage(this.props.initialPage);
      }
  }

  componentDidUpdate(prevProps, prevState) {
      if (this.props.items !== prevProps.items) {
          this.setPage(this.props.initialPage);
      }
  }

  setPage(page) {
      var items = this.props.items;
      var pager = this.state.pager;

      if (page < 1 || page > pager.totalPages) {
          return;
      }

      pager = this.getPager(items.length, page);
      var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      this.setState({ pager: pager });
      this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {

      currentPage = currentPage || 1;
      pageSize = pageSize || 10;
      var totalPages = Math.ceil(totalItems / pageSize);
      var startPage, endPage;

      if (totalPages <= 10) {
          startPage = 1;
          endPage = totalPages;
      } else {
          if (currentPage <= 6) {
              startPage = 1;
              endPage = 10;
          } else if (currentPage + 4 >= totalPages) {
              startPage = totalPages - 9;
              endPage = totalPages;
          } else {
              startPage = currentPage - 5;
              endPage = currentPage + 4;
          }
      }

      var startIndex = (currentPage - 1) * pageSize;
      var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
      var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

      return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
      };
  }

  pageRender(item1, item2){
    if(item1 === item2)
      return item1
    else{
      var toret = ""
      toret = toret + item1 + "-" + item2
      return toret
    }
  }

  render(){
    var pager = this.state.pager;
    if (!pager.pages || pager.pages.length <= 1) {
        // don't display pager if there is only 1 page
        return null;
    }
    return (
      <div className="row pagination-wrap ">
        <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
          <span>Showing {this.pageRender(pager.startIndex + 1,pager.endIndex + 1)} Of {pager.totalItems} Jobs</span>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <div className="custom-pagination ml-auto">
            <a onClick={() => this.setPage(pager.currentPage - 1)}className={pager.currentPage === 1 ? 'disabled' : '' }>Prev</a>
            <div className="d-inline-block">
                {(pager.pages|| []).map((page, index) =>
                    <a onClick={() => this.setPage(page)} key={index} className={pager.currentPage === page ? 'active' : ''}>{page}
                    </a>
                )}
            </div>
            <a onClick={() => this.setPage(pager.currentPage + 1)} className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>Next</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Pagination
