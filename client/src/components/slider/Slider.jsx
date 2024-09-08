import autoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-react";
import sliders from "../../constaices/slider";
import SliderItem from "./SliderItem";

const Slider = () => {
  return (
    <section>
      <Carousel
        className="relative"
        options={{ loop: true }}
        plugins={[autoPlay()]}
      >
        <CarouselSlides>
          {sliders.map((slide) => (
            <SliderItem key={slide.id} slide={slide} />
          ))}
        </CarouselSlides>
        <CarouselControl>
          <CarouselIndicators className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </CarouselControl>
      </Carousel>
    </section>
  );
};

export default Slider;
