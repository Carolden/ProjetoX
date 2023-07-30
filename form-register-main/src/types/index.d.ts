declare module "AppTypes" {
  import { IconName } from "lucide-react";

  export interface UserServiceConfiguration {
    userInfo: UserInfo;
    segments: Addon[];
    interests: Addon[];
    connectors: Connector[];
  }

  export interface UserInfo {
    name: string;
    email: string;
    phone: string;
    company: string;
    office: string;
  }

  export interface Addon {
    icon: IconName;
    name: string;
  }

}
