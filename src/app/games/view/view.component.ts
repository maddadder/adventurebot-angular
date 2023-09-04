import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, retry, throwError } from 'rxjs';
import { gameEntry } from '../../NSwagClientReadWrite';
import { GameEntryService as GameEntryReadWriteService } from '../../NSwagClientReadWrite/services/GameEntryService';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit, OnDestroy {

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
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
