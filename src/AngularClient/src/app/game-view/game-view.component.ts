import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, retry } from 'rxjs/operators';
import { gameEntry } from '../NSwagClientRead';
import { GameEntryService as GameEntryReadWriteService } from '../NSwagClientReadWrite/services/GameEntryService';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit, OnDestroy {
  
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
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