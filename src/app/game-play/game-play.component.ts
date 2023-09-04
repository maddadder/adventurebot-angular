import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, retry } from 'rxjs/operators';
import { gameEntry } from '../NSwagClientReadWrite';
import { GameEntryService as GameEntryReadWriteService } from '../NSwagClientReadWrite/services/GameEntryService';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit, OnDestroy {
  
  constructor(private _Activatedroute:ActivatedRoute,
    private readonly gameEntryService: GameEntryReadWriteService) { }
  sub;
  _gameEntries: gameEntry[] = []
  pageName:string;
  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.pageName = params.get('id');
      this.gameEntryService
      .gameEntrySearch("ge",this.pageName)
      .pipe(
          retry(3),
          catchError(error =>
              throwError(error)
          )
      ).subscribe((result) => {
        this._gameEntries = result;
      })
    });
    
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}