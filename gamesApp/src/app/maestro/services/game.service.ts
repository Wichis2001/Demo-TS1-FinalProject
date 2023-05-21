import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuesAn } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl: string = environment.baseUrl;
  private _quesAn: QuesAn[] = [];
  private _scores: number[] = [];

  get quesAn(){
    return this._quesAn ;
  }

  get scores(){
    return  this._scores
  }

  addQuestion( pregunta:QuesAn ){
    this._quesAn.push( pregunta );

  }

  addScore( score: number ){
    this._scores.push( score )
  }

  resetQuestion( ){

    this._quesAn = [];
  }

  resetScores(){
    this._scores = [];
  }
  constructor() { }
}
