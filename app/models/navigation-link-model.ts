export interface NavigationLinksModel {
    id: string;
    title: string;
    subLinks?: NavigationLinksModel[];
}