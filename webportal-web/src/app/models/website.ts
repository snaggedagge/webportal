export interface Website {
  websiteId: string;
  websiteName: string;
  websiteDescription: string;
  imageBase64: string;
  websiteLink: string;
  localWebsiteLink: string;
  infoLink: string;
  lastSeen: Date;
  hasLogin: boolean;
  permission: string;
}
