export enum Colors {
    SECONDARY = "#EB9B00",
    PRIMARY = "#002f52",
    WHITE ="#FFF"
}


export interface IDsAmount {
    type: 'primary' | 'secondary'
    maxValue: number
    onchangeValue: (value:number) => void
}
