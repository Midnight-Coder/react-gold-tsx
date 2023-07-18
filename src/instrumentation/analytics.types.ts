
export enum EEvents {
  API_REQUEST = 'api_request',
  LOGIN = 'login',
  PAGE_VIEW = 'page_view',
  SIGNUP = 'signup',
}

export interface INetworkEvent {
  url: string;
  request_method: string;
  request_payload?: string | FormData | undefined;
  response_status: number;
  response: string;
}


export interface IIdentifyUserArgs {
  userId: string;
  [key: string]: unknown;
}

export type TEventProperties = Record<string, unknown> | INetworkEvent

