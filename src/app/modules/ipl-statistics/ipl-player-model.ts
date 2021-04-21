export interface Player{
    id:number,
    playerName:string,
    year:number,
    playerScore:PlayerScore[]
}

export interface PlayerScore{
    playerRun:number;
    year:number
}