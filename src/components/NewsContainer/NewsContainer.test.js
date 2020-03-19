import React from "react";
import NewsContainer from "./NewsContainer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NewsContainer", () => {
  it("Desiplays the correct NewsContainer", () => {
    const articles = [
      {
        id: 1,
        description: "1 Description Test String",
        headline: "1 HeadLine Test String",
        img: "1 img URL",
        url: "1 NewsContainer Link URL"
      },
      {
        id: 2,
        description: "2 Description Test String",
        headline: "2 HeadLine Test String",
        img: "2 img URL",
        url: "2 NewsContainer Link URL"
      },
      {
        id: 3,
        description: "3 Description Test String",
        headline: "3 HeadLine Test String",
        img: "3 img URL",
        url: "3 NewsContainer Link URL"
      }
    ];

    const {
      debug,
      getByPlaceholderText,
      getByText,
      getByRole,
      getByLabelText
    } = render(<NewsContainer articles={articles} />);

    expect(getByText("1 Description Test String")).toBeInTheDocument();
    expect(getByText("2 Description Test String")).toBeInTheDocument();
    expect(getByText("3 Description Test String")).toBeInTheDocument();
    expect(getByLabelText("article-image-1")).toBeInTheDocument();
    expect(getByLabelText("article-image-2")).toBeInTheDocument();
    expect(getByLabelText("article-image-3")).toBeInTheDocument();
    expect(getByText("1 HeadLine Test String")).toBeInTheDocument();
    expect(getByText("2 HeadLine Test String")).toBeInTheDocument();
    expect(getByText("3 HeadLine Test String")).toBeInTheDocument();
  });
});
