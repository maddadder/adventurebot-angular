/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { userProfile } from '../models/userProfile';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class UserProfileService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Search each UserProfile by name
     * @param partitionKey The **partitionKey** parameter
     * @param preferredUsername The **PreferredUsername** parameter
     * @returns userProfile Search each UserProfile by name
     * @throws ApiError
     */
    public userProfileSearch(
        partitionKey: string,
        preferredUsername: string,
    ): Observable<Array<userProfile>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/UserProfile/search/{partitionKey}/{PreferredUsername}',
            path: {
                'partitionKey': partitionKey,
                'PreferredUsername': preferredUsername,
            },
        });
    }

    /**
     * Retrieve each UserProfile by name
     * @param partitionKey The **partitionKey** parameter
     * @returns userProfile Retrieve each UserProfile by name
     * @throws ApiError
     */
    public userProfileList(
        partitionKey: string,
    ): Observable<Array<userProfile>> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/UserProfile/list/{partitionKey}',
            path: {
                'partitionKey': partitionKey,
            },
        });
    }

    /**
     * Retrieve one UserProfile
     * @param partitionKey The **partitionKey** parameter
     * @param userProfileId The **UserProfileId** parameter
     * @returns userProfile The OK response
     * @throws ApiError
     */
    public userProfileGet(
        partitionKey: string,
        userProfileId: string,
    ): Observable<userProfile> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/UserProfile/get/{partitionKey}/{UserProfileId}',
            path: {
                'partitionKey': partitionKey,
                'UserProfileId': userProfileId,
            },
        });
    }

    /**
     * Create one UserProfile
     * @param partitionKey The **partitionKey** parameter
     * @param requestBody The **UserProfile** parameter
     * @returns userProfile The Created response
     * @throws ApiError
     */
    public userProfilePost(
        partitionKey: string,
        requestBody: userProfile,
    ): Observable<userProfile> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/UserProfile/post/{partitionKey}',
            path: {
                'partitionKey': partitionKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update one UserProfile
     * @param partitionKey The **partitionKey** parameter
     * @param userProfileId The **UserProfileId** parameter
     * @param requestBody The **UserProfile** parameter
     * @returns userProfile The OK response
     * @throws ApiError
     */
    public userProfilePut(
        partitionKey: string,
        userProfileId: string,
        requestBody: userProfile,
    ): Observable<userProfile> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/UserProfile/put/{partitionKey}/{UserProfileId}',
            path: {
                'partitionKey': partitionKey,
                'UserProfileId': userProfileId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete one UserProfile
     * @param partitionKey The **partitionKey** parameter
     * @param userProfileId The **UserProfileId** parameter
     * @returns any The OK response
     * @throws ApiError
     */
    public userProfileDelete(
        partitionKey: string,
        userProfileId: string,
    ): Observable<any> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/UserProfile/delete/{partitionKey}/{UserProfileId}',
            path: {
                'partitionKey': partitionKey,
                'UserProfileId': userProfileId,
            },
        });
    }

}
