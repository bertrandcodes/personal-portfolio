export interface ApplicationProps {
  name: string;
  timePeriod: string;
  description: string;
  anchorLink: string;
  videoSrc: string;
  isMobileApp: boolean;
  technologies: string[];
  playLink: string | null;
  gitHubLink: string;
  modalContent: ModalContentProps;
}

export interface ModalContentProps {
  description: string | null;
  bulletPoints: string[];
}
