import { ICollection } from "../../context/types";

export const initialTab = [
  { category: "overview", name: "Overview" },
  { category: "character", name: "Character" },
];

export const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface IConfirm {
  visible: boolean;
  id: number;
  collectionName: string;
}

export interface IColor {
  primary: string;
  secondary: string;
  tertiary: string;
  success: string;
  warning: string;
  danger: string;
  dark: string;
  medium: string;
  light: string;
  lightmedium: string;

  "color-Action": string;
  "color-Adventure": string;
  "color-Comedy": string;
  "color-Drama": string;
  "color-Ecchi": string;
  "color-Fantasy": string;
  "color-unknown": string;
  "color-Hentai": string;
  "color-Horror": string;
  "color-Mahou Shoujo": string;
  "color-Mecha": string;
  "color-Music": string;
  "color-Mystery": string;
  "color-Psychological": string;
  "color-Romance": string;
  "color-Sci-Fi": string;
  "color-Slice of Life": string;
  "color-Sports": string;
  "color-Supernatural": string;

  // -------
  "bg-color-Action": string;
  "bg-color-Adventure": string;
  "bg-color-Comedy": string;
  "bg-color-Drama": string;
  "bg-color-Ecchi": string;
  "bg-color-Fantasy": string;
  "bg-color-unknown": string;
  "bg-color-Hentai": string;
  "bg-color-Horror": string;
  "bg-color-Mahou Shoujo": string;
  "bg-color-Mecha": string;
  "bg-color-Music": string;
  "bg-color-Mystery": string;
  "bg-color-Psychological": string;
  "bg-color-Romance": string;
  "bg-color-Sci-Fi": string;
  "bg-color-Slice of Life": string;
  "bg-color-Sports": string;
  "bg-color-Supernatural": string;
}

export interface IModals {
  visible: boolean;
  processing: boolean;
  success: boolean;
  onDismiss: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>, nickname: string) => void;
  errorMsg?: string;
}

export interface IModalChoice {
  visible: boolean;
  onDismiss: () => void;
  onRemove: (id: string | number, nickname: string) => void;
  type?: string;
  listCollection: ICollection[];
  success?: boolean;
}

export interface IModalConfirm {
  visible: boolean;
  onDismiss: () => void;
  onAgree: () => void;
  title: string;
  subtitle?: string;
}
