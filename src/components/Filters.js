import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Loading } from "./FiltersLoading";

//Filters
const Filters = props => {
  if (props.filters.isLoading) {
    return <Loading />;
  } else if (props.filters.errMess) {
    return <h4 className="text-danger">{props.filters.errMess}</h4>;
  } else {
    return (
      <ListGroup className="text-center">
        {props.filters.filters.map(f => {
          if (f.filter === props.active) {
            return (
              <ListGroupItem
                key={f.id}
                active
                tag="button"
                action
                value={f.filter}
                onClick={props.filterOnClick}
              >
                {f.filter}
              </ListGroupItem>
            );
          }
          return (
            <ListGroupItem
              key={f.id}
              tag="button"
              action
              value={f.filter}
              onClick={props.filterOnClick}
            >
              {f.filter}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
};

export default Filters;
