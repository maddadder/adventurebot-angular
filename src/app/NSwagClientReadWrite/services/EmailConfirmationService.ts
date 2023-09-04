/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { checkStatusResponse } from '../models/checkStatusResponse';
import type { emailConfirmationInput } from '../models/emailConfirmationInput';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class EmailConfirmationService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Create one EmailConfirmation
     * @param requestBody The **EmailConfirmationInput** parameter
     * @returns checkStatusResponse A Check Status Response
     * @throws ApiError
     */
    public emailConfirmationPost(
        requestBody: emailConfirmationInput,
    ): Observable<checkStatusResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/EmailConfirmation/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve one EmailConfirmation
     * @param instanceId The **instanceId** parameter
     * @returns string The OK response
     * @throws ApiError
     */
    public emailConfirmationGet(
        instanceId: string,
    ): Observable<string> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/EmailConfirmation/get/{instanceId}',
            path: {
                'instanceId': instanceId,
            },
        });
    }

}
