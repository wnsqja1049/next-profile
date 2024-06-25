"use client";
import React, { useState, useEffect } from "react";

import { Button } from "@nextui-org/react";

export const TopButton = () => {
  const [hideButton, setHideButton] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 1000) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  };

  return (
    <>
      {hideButton ? <></> : 
      <Button isIconOnly  className="sticky bottom-10 float-right bg-transparent border-2 border-black dark:border-white" radius="full"
        onPress={() => {
          var anchor = document.querySelector(`#id_about_me`)
          anchor!.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }}>
          <div className="text-4xl font-bold">↑</div>
          </Button>}
    </>
  );
};
