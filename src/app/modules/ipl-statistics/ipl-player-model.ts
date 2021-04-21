export interface Player{
    id:number,
    playerName:string,
    playerScore:PlayerScore[]
}

export interface PlayerScore{
    playerRun:number;
    year:number
}