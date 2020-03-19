import React from "react";
import SearchForm from "./SearchForm";
import { render, fireEvent } from "@testing-library/react";

describe("Search Form", () => {
  it("sends the correct data up to app via search", () => {
    const mockSearch = jest.fn();
    const { debug, getByPlaceholderText, getByText } = render(
      <SearchForm search={mockSearch} />
    );

    fireEvent.change(getByPlaceholderText("search-input"), {
      target: { value: "Search Text" }
    });

    fireEvent.click(getByText("Search"));

    expect(getByPlaceholderText("search-input").value).toEqual("Search Text")

    expect(mockSearch).toHaveBeenCalledWith("Search Text");
    
  });
});
