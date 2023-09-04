/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { checkStatusResponse } from '../models/checkStatusResponse';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class StartGameService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Retrieve one StartGame
     * @returns checkStatusResponse A Check Status Response
     * @throws ApiError
     */
    public startGameGet(): Observable<checkStatusResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/StartGame/get',
        });
    }

}
