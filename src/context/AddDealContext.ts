import { newDeal } from "@/app/schemas";
import { createContext } from "react";

type AddDealContextType = {
  newDealData: newDeal;
  updateNewDealDetails: (dealDetails: Partial<newDeal>) => void;
  dataLoaded: boolean;
  resetLocalStorage: () => void;
};
export const AddDealContext = createContext<AddDealContextType | null>(null);
export const AddDealContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [newDealData, setNewDealData] = useState<NewDeal>({} as NewDeal);
  return <AddDealContext.Provider value={}>{children}</AddDealContext.Provider>;
};
