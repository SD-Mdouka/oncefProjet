import React from "react";
import { Text } from "../../../../share-component/Text";

export const Label = ({ text, classes }) => {
  return (
    <div className={classes}>
      <Text classStyle="textStyle" text={text} />
    </div>
  );
};
