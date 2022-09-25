import { appConfig } from "config";

const apiVersion: number = appConfig.pushNodeApiVersion;
const channelsRoute: string = `/v${apiVersion}/channels`;
const usersRoute: string = `/v${apiVersion}/users`;

export const usersServiceEndpoints = {
    userSubscriptions: (userAddressInCAIP: string) => `${usersRoute}/${userAddressInCAIP}/subscriptions`,
    userDelegations: (userAddressInCAIP: string) => `${usersRoute}/${userAddressInCAIP}/delegations`
}

export const channelsServiceEndpoints = {
    channelsInfo: (queryParams?: string) => `${channelsRoute}?${queryParams}`,
    channelsSearch: (queryParams: string) => `${channelsRoute}/search?${queryParams}`
}