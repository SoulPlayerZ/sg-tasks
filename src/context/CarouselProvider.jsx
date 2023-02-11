import React, { useState } from "react";
import CarouselContext from "./CarouselContext";

function CarouselProvider ({ children }) {
  const [Carousel, setCarousel] = useState('');

const contextValue = {
    Carousel,
    setCarousel,
};

return (
<CarouselContext.Provider value={contextValue}>
    {children}
</CarouselContext.Provider>
);
}

export default CarouselProvider;