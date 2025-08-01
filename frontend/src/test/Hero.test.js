import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landingPage/home/Hero";

// Test Suite(multiple test cases can be given)

describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImg = screen.getByAltText("hero Image");
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute("src", "media/images/homeHero.png");
  });
});
