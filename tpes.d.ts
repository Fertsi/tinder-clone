declare module "react-native-card-stack-swiper" {
    import { ReactNode } from "react";
  
    export interface CardStackProps {
      children: ReactNode;
      loop?: boolean;
      verticalSwipe?: boolean;
      renderNoMoreCards: () => ReactNode;
      ref: (newSwiper: CardStack | null) => void;
    }
  
    export interface CardProps {
      children: ReactNode;
      key: number;
    }
  }
  