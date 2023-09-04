/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { gameOption } from './gameOption';

export type gameEntry = {
    name: string;
    description: Array<string>;
    options: Array<gameOption>;
    id: string;
    __T?: string;
    created?: string;
    modified?: string;
    createdBy?: string | null;
    modifiedBy?: string | null;
};

