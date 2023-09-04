/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { checkStatusResponse } from '../models/checkStatusResponse';
import type { gameLoopInput } from '../models/gameLoopInput';
import type { initializeGameLoopInput } from '../models/initializeGameLoopInput';
import type { votingCounter } from '../models/votingCounter';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class GameLoopService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Create one GameLoop
     * @param requestBody The **InitializeGameLoopInput** parameter
     * @returns checkStatusResponse A Check Status Response
     * @throws ApiError
     */
    public gameLoopPost(
        requestBody: initializeGameLoopInput,
    ): Observable<checkStatusResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/GameLoop/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Put one GameLoop
     * @param instanceId The **instanceId** parameter
     * @param requestBody The **GameLoopInput** parameter
     * @returns string The OK response
     * @throws ApiError
     */
    public gameLoopPut(
        instanceId: string,
        requestBody: gameLoopInput,
    ): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/GameLoop/put/{instanceId}',
            path: {
                'instanceId': instanceId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get one GameLoop
     * @param instanceId The **instanceId** parameter
     * @returns votingCounter The OK response
     * @throws ApiError
     */
    public gameLoopGet(
        instanceId: string,
    ): Observable<votingCounter> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/GameLoop/get/{instanceId}',
            path: {
                'instanceId': instanceId,
            },
        });
    }

}
