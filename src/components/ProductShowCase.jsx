import { Carousel } from "@material-tailwind/react";
import imageA from "../Assets/image-product-1.jpg";
import imageAA from "../Assets/image-product-1-thumbnail.jpg";
import imageB from "../Assets/image-product-2.jpg";
import imageBA from "../Assets/image-product-2-thumbnail.jpg";
import imageC from "../Assets/image-product-3.jpg";
import imageCA from "../Assets/image-product-3-thumbnail.jpg";
import imageD from "../Assets/image-product-4.jpg";
import imageDA from "../Assets/image-product-4-thumbnail.jpg";

export function CarouselDefault() {
  return (
    <Carousel className="h-1/2 rounded-xl">
      <img
        src={imageA}
        alt="Product A"
        className="h-full w-full object-cover"
      />
      <img
        src={imageB}
        alt="Product B"
        className="h-full w-full object-cover"
      />
      <img
        src={imageC}
        alt="Product C"
        className="h-full w-full object-cover"
      />
       <img
        src={imageD}
        alt="Product D"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}