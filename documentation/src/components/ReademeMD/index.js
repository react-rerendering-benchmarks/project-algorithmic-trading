import { memo } from "react";
import React from "react";
import ReadmeMD from '../../../../README.md';
export default memo(function ProjectReadme() {
  return <div className={"container"} style={{
    marginTop: "50px",
    marginBottom: "100px"
  }}>
        <ReadmeMD />
    </div>;
});