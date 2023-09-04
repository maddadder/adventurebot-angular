/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { checkStatusResponse } from '../models/checkStatusResponse';
import type { userRegistrationInput } from '../models/userRegistrationInput';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class UserRegistrationService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Create one UserRegistration
     * @param requestBody The **UserRegistrationInput** parameter
     * @returns checkStatusResponse A Check Status Response
     * @throws ApiError
     */
    public userRegistrationPost(
        requestBody: userRegistrationInput,
    ): Observable<checkStatusResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/UserRegistration/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve one UserRegistration
     * @param instanceId The **instanceId** parameter
     * @returns string The OK response
     * @throws ApiError
     */
    public userRegistrationGet(
        instanceId: string,
    ): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/UserRegistration/get/{instanceId}',
            path: {
                'instanceId': instanceId,
            },
        });
    }

}
