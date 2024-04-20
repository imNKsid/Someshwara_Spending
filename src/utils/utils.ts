import { IMAGES } from "../assets/images";
import { COLORS } from "../constants";

export const getCategoryImage = (title: string) => {
  switch (title) {
    case "Beauty":
      return IMAGES.beauty;
    case "Clothing":
      return IMAGES.clothing;
    case "Groceries":
      return IMAGES.shopping;
    case "Health & Fitness":
      return IMAGES.health;
    case "Food":
      return IMAGES.food;
    case "Housing":
      return IMAGES.housing;
    default:
      return null;
  }
};

export const getProgressBarColor = (title: string) => {
  switch (title) {
    case "Beauty":
      return COLORS.lightBlueFade;
    case "Clothing":
      return COLORS.yellowFade;
    case "Groceries":
      return COLORS.darkBlueFade;
    case "Health & Fitness":
      return COLORS.orangeFade;
    case "Food":
      return COLORS.blueFade;
    case "Housing":
      return COLORS.magentaFade;
    default:
      return "#ddd";
  }
};

export const getProgressBarFilledColor = (title: string) => {
  switch (title) {
    case "Beauty":
      return COLORS.lightBlue;
    case "Clothing":
      return COLORS.yellow;
    case "Groceries":
      return COLORS.darkBlue;
    case "Health & Fitness":
      return COLORS.orange;
    case "Food":
      return COLORS.blue;
    case "Housing":
      return COLORS.magenta;
    default:
      return "#ddd";
  }
};
