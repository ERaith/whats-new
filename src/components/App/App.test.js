import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  it("renders the data from fetch", async () => {
    const fakeData = {
      local: [
        {
        id: 1,
        headline: "Spider-Man Will Remain in the Marvel Cinematic Universe",
        img: "https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp",
        description: "The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.",
        url: "https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"
      },
      {
      id: 2,
      headline: "Ahhhhhhhhh",
      img: "https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp",
      description: "The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.",
      url: "https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"
      }
      ]
    };

    // jest.spyOn(Component.prototype,'async componentDidMount').mockImplementation(()=>{
    //   App.updateState(fakeData);
    // })

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData)
      })
    );

    await act(async () => {
      render(<App/>);
    });

    const { debug, getByPlaceholderText, getByText,getByLabelText } = render(
      <App/>
    );
    expect(getByText("Spider-Man Will Remain in the Marvel Cinematic Universe")).toBeInTheDocument();

  });
});
