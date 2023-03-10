import React, { useState } from "react";
import CarouselContext from "./CarouselContext";

function CarouselProvider ({ children }) {
  const [width, setWidth] = useState(0);

const contextValue = {
    width,
    setWidth,
};

return (
<CarouselContext.Provider value={contextValue}>
    {children}
</CarouselContext.Provider>
);
}

export default CarouselProvider;