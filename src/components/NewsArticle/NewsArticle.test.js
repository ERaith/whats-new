import React from "react";
import NewsArticle from "./NewsArticle";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Article", () => {
  it("Desiplays the correct Article", () => {
    const article = {
      id: 1 ,
      description: "Description Test String",
      headline:"HeadLine Test String",
      img:"img URL",
      url:"Article Link URL"
    }
    const { debug, getByPlaceholderText, getByText, getByRole,getByLabelText } = render(
      <NewsArticle
        article = {article}

      />
    );

    expect(getByLabelText("headline")).toBeInTheDocument();
    expect(getByLabelText("description")).toBeInTheDocument();
    expect(getByLabelText("article-link")).toBeInTheDocument();
    expect(getByLabelText("article-image")).toBeInTheDocument();
  });

});
