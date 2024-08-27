export interface IListItem {
    name: string,
    description: string,
    isComplete: boolean,
}

export interface IProject {
    name: string,
    items: IListItem[],
}
