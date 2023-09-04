/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { gameEntry } from '../models/gameEntry';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class GameEntryService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Search each GameEntry by name
     * @param partitionKey The **partitionKey** parameter
     * @param gameEntryName The **name** parameter
     * @returns gameEntry Search each GameEntry by name
     * @throws ApiError
     */
    public gameEntrySearch(
        partitionKey: string,
        gameEntryName: string,
    ): Observable<Array<gameEntry>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/GameEntry/search/{partitionKey}/{GameEntryName}',
            path: {
                'partitionKey': partitionKey,
                'GameEntryName': gameEntryName,
            },
        });
    }

    /**
     * Retrieve one GameEntry
     * @param partitionKey The **partitionKey** parameter
     * @param gameEntryId The **GameEntryId** parameter
     * @returns gameEntry The OK response
     * @throws ApiError
     */
    public gameEntryGet(
        partitionKey: string,
        gameEntryId: string,
    ): Observable<gameEntry> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/GameEntry/get/{partitionKey}/{GameEntryId}',
            path: {
                'partitionKey': partitionKey,
                'GameEntryId': gameEntryId,
            },
        });
    }

    /**
     * Create one GameEntry
     * @param partitionKey The **partitionKey** parameter
     * @param requestBody The **GameEntry** parameter
     * @returns gameEntry The Created response
     * @throws ApiError
     */
    public gameEntryPost(
        partitionKey: string,
        requestBody: gameEntry,
    ): Observable<gameEntry> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/GameEntry/post/{partitionKey}',
            path: {
                'partitionKey': partitionKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update one GameEntry
     * @param partitionKey The **partitionKey** parameter
     * @param gameEntryId The **GameEntryId** parameter
     * @param requestBody The **GameEntry** parameter
     * @returns gameEntry The OK response
     * @throws ApiError
     */
    public gameEntryPut(
        partitionKey: string,
        gameEntryId: string,
        requestBody: gameEntry,
    ): Observable<gameEntry> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/GameEntry/put/{partitionKey}/{GameEntryId}',
            path: {
                'partitionKey': partitionKey,
                'GameEntryId': gameEntryId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete one GameEntry
     * @param partitionKey The **partitionKey** parameter
     * @param gameEntryId The **GameEntryId** parameter
     * @returns any The OK response
     * @throws ApiError
     */
    public gameEntryDelete(
        partitionKey: string,
        gameEntryId: string,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/GameEntry/delete/{partitionKey}/{GameEntryId}',
            path: {
                'partitionKey': partitionKey,
                'GameEntryId': gameEntryId,
            },
        });
    }

}
