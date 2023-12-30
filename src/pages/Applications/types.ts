export interface ApplicationProps {
  name: string;
  description: string;
  anchorLink: string;
  videoSrc: string;
  isMobileApp: boolean;
  technologies: string[];
  playLink: string | null;
  gitHubLink: string;
}
