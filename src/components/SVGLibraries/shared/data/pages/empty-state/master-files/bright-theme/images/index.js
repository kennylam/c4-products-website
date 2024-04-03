import darkBox from "./empty-state-dark-box.svg";
import darkError from "./empty-state-dark-error.svg";
import darkLock from "./empty-state-dark-lock.svg";
import darkMagnifying from "./empty-state-dark-magnifying-glass.svg";
import darkNotification from "./empty-state-dark-notification.svg";
import darkTag from "./empty-state-dark-tag.svg";
import brightBox from "./empty-state-bright-box.svg";
import brightError from "./empty-state-bright-error.svg";
import brightLock from "./empty-state-bright-lock.svg";
import brightMagnifying from "./empty-state-bright-magnifying-glass.svg";
import brightNotification from "./empty-state-bright-notification.svg";
import brightTag from "./empty-state-bright-tag.svg";

const emptyStateBrightImages = [
  {
    title: "No data",
    images: {
      bright: brightBox,
      dark: darkBox,
    },
  },
  {
    title: "No results found",
    images: {
      bright: brightMagnifying,
      dark: darkMagnifying,
    },
  },
  {
    title: "System error (API error, generic error, etc)",
    images: {
      bright: brightError,
      dark: darkError,
    },
  },
  {
    title: "Not authorized",
    images: {
      bright: brightLock,
      dark: darkLock,
    },
  },
  {
    title: "No notifications",
    images: {
      bright: brightNotification,
      dark: darkNotification,
    },
  },
  {
    title: "No label/tags",
    images: {
      bright: brightTag,
      dark: darkTag,
    },
  },
];

export default emptyStateBrightImages;
