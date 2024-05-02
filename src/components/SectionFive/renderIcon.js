import FlashIcon from "./Icons/FlashIcon";
import EyeIcon from "./Icons/EyeIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import ChatIcon from "./Icons/ChatIcon";
import PersonIcon from "./Icons/PersonIcon";
import DocumentIcon from "./Icons/DocumentIcon";

/**
 * Renderiza un ícono basado en el número proporcionado.
 * @param {number} number - El número que determina qué ícono renderizar.
 * @returns {JSX.Element|null} El componente JSX del ícono correspondiente o null si no se encuentra ningún ícono para el número dado.
 */

export const renderIcon = (number) => {
  switch (number) {
    case 0:
      return <FlashIcon />;
    case 1:
      return <EyeIcon />;
    case 2:
      return <SettingsIcon />;
    case 3:
      return <ChatIcon />;
    case 4:
      return <PersonIcon />;
    case 5:
      return <DocumentIcon />;
    default:
      return null;
  }
};
