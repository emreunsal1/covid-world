import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ErrorCard from "../components/ErrorCard";
import * as reactRouter from "react-router";

describe("ErrorCard specs", () => {
  let navigateSpy = jest.fn();
  beforeEach(() => {
    jest.spyOn(reactRouter, "useNavigate").mockReturnValue(navigateSpy);
  });

  it("should render", () => {
    const wrapper = render(<ErrorCard />);

    const button = wrapper.baseElement.querySelector(".chakra-button");
    fireEvent.click(button);

    expect(navigateSpy).toHaveBeenCalled();
  });
});
