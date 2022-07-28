export interface CardItem{
    id: number;
    link?: string;
    icon: any;
    name: string;
    description: string;
}

export interface CardItemSimple2{
    name: string;
    description: string;
    color?: string ;
}                

export interface CardItemSimple{
    _id: string,
    name: string;
    description: string;
    color?: string ;
}

export interface CardItemSimple3{
    id: number,
    name: string;
    description: string;
    color: string ;
}