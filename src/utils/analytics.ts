import type { AnalyticsEvents, EventName } from "./analyticsContracts";

declare global {
    interface Window{
        dataLayer:any[];
    }
}

export const trackAppEvent = <Events extends EventName>(
    eventName: Events,
    payload: AnalyticsEvents[Events]
): void => {
    if(typeof window !== 'undefined'){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: eventName,
            ...payload,
        });
    }
};