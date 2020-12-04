import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "github-markdown-css";
import apiMd from "@/docs/api.md";

const GuiMd = () => {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        className="markdown-body"
        plugins={[gfm]}
        source={apiMd}
        escapeHtml={false}
      ></ReactMarkdown>
    </div>
  );
};

export { GuiMd };
