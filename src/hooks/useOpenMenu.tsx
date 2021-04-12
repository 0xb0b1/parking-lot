import {
  useEffect,
  useState,
  ReactNode,
  useContext,
  Context,
  createContext,
} from "react";

interface MenuProviderProps {
  children: ReactNode;
}

interface MenuContextData {
  isOpenMenu: false | true;
  handleShowMenu: () => void;
}

const OpenMenuContext: Context<MenuContextData> = createContext(
  {} as MenuContextData
);

export function OpenMenuProvider({ children }: MenuProviderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuOpen = () => setIsOpenMenu(true);

  useEffect(() => {
    window.addEventListener("onclick", handleMenuOpen);

    return () => window.removeEventListener("onclick", handleMenuOpen);
  }, []);

  function handleShowMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <OpenMenuContext.Provider value={{ isOpenMenu, handleShowMenu }}>
      {children}
    </OpenMenuContext.Provider>
  );
}

export function useOpenMenu() {
  const context = useContext(OpenMenuContext);

  return context;
}
