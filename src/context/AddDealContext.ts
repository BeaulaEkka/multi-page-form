import { createContext } from "react";

type AddDealContextType = {
  newDealData: newDeal;
  updateNewDealDetails: (dealDetails: Partial<NewDeal>) => void;
};
export const AddDealContext = createContext<>(null);
