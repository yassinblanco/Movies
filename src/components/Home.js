import React, { Component } from "react";
import Filters from "./Filters";
import Movies from "./Movies";
import Pagination from "./Pagination";
import { paginate } from "../utils/paginate";

class Home extends Component {
  state = {
    active: "All",
    pageSize: 9,
    currentPage: 1
  };

  filterOnClick = e => {
    this.setState({ active: e.target.value, currentPage: 1 });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const filtered = this.props.movies.movies.filter((movie, i, arr) => {
      if (this.state.active === "All") return arr;
      else return movie.country === this.state.active;
    });
    const movies = paginate(
      filtered,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <main className="mb-5">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-md-2" style={{ paddingTop: "5.3rem" }}>
              <Filters
                filters={this.props.filters}
                active={this.state.active}
                filterOnClick={this.filterOnClick}
              />
            </div>
            <div className="col-md-10 ">
              <Movies
                movies={movies}
                active={this.state.active}
                isLoading={this.props.movies.isLoading}
                errMess={this.props.movies.errMess}
              />
              <Pagination
                currentPage={this.state.currentPage}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
                itemsCount={filtered.length}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
