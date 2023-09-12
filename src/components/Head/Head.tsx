import React from "react";
import { Helmet } from "react-helmet";

export const Head = ({ ...props }) => {
    return (
      <Helmet>
        <title>{props.title ? props.title + " | " : null} Next Gen</title>
      </Helmet>
    );
  };