import React, { useEffect, useState, useCallback } from "react";
import { CarouselCard, CarouselWrapper } from "./carouselStyles";
import Image from "next/image";
import { OrangeButton } from "@/styles/common-styles";
import { useRouter } from "next/router";
import { useProducts } from "@/context/productsContext";

interface ICarouselItems {
  title: string;
  description: string;
  path: string;
  imageSrc: string;
}

const CarouselComponent = ({ autoPlayInterval = 4000 }) => {
  const router = useRouter();
  const { setCategoryProducts } = useProducts();

  //local state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel items
  const items: ICarouselItems[] = [
    {
      title: "Electronics",
      description: "Discover the latest gadgets and cutting-edge technology.",
      path: "/category/electronics",
      imageSrc: "/carousel-images/electronics.png",
    },
    {
      title: "Jewelery",
      description: "Explore our exclusive collection of fine jewelry pieces.",
      path: "/category/jewelery",
      imageSrc: "/carousel-images/jewelry.png",
    },
    {
      title: "Men's Clothing",
      description: "Trendy fashion styles for every modern man.",
      path: "/category/Men's Clothing",
      imageSrc: "/carousel-images/suit.png",
    },
    {
      title: "Women's Clothing",
      description: "Elegant and stylish outfits for every occasion.",
      path: "/category/Women's Clothing",
      imageSrc: "/carousel-images/dress.png",
    },
  ];

  // Memoize nextImage to prevent it from being recreated on every render
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  // Memoize prevImage to prevent it from being recreated on every render
  // const prevImage = useCallback(() => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + items.length) % items.length
  //   );
  // }, [items.length]);

  // Auto move the carousel every autoPlayInterval milliseconds
  useEffect(() => {
    const interval = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(interval); // Cleanup interval on unmount or re-render
  }, [nextImage, autoPlayInterval]); // Add nextImage to dependencies

  return (
    <CarouselWrapper>
      <CarouselCard>
        <article>
          <h2>{items[currentIndex].title}</h2>
          <p>{items[currentIndex].description}</p>
        </article>
        <Image
          src={items[currentIndex].imageSrc}
          alt={items[currentIndex].title}
          width={200}
          height={200}
        />
        <OrangeButton
          onClick={() => {
            router.push(items[currentIndex].path);
            setCategoryProducts([]);
          }}
          sx={{ mt: "20px", position: "absolute !important", bottom: "40px" }}
        >
          Learn more
        </OrangeButton>
      </CarouselCard>
    </CarouselWrapper>
  );
};

export default CarouselComponent;
