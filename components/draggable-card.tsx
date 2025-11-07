import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
 const items = [
    {
      title: "Australia",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Germany",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Ireland",
      image:
        "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Singapore",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "UK",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "US",
      image:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
    
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 ">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
