import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import MovieDetail from "./MovieDetail";
import { fetchFilters, fetchMovies } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    filters: state.filters,
    movies: state.movies
  };
};

const mapDispatchToProps = dispatch => ({
  fetchFilters: () => {
    dispatch(fetchFilters());
  },
  fetchMovies: () => {
    dispatch(fetchMovies());
  }
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchFilters();
    this.props.fetchMovies();
  }
  render() {
    const MovieWithId = ({ match }) => {
      return (
        <MovieDetail
          movie={
            this.props.movies.movies.filter(
              movie => movie.id === parseInt(match.params.mId)
            )[0]
          }
          isLoading={this.props.movies.isLoading}
          errMess={this.props.movies.errMess}
        />
      );
    };

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <Home filters={this.props.filters} movies={this.props.movies} />
            )}
          />
          <Route path="/home/:mId" component={MovieWithId} />
          <Route path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
