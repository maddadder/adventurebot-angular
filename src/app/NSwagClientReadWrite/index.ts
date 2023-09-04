/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { checkStatusResponse } from './models/checkStatusResponse';
export type { emailConfirmationInput } from './models/emailConfirmationInput';
export type { gameEntry } from './models/gameEntry';
export type { gameOption } from './models/gameOption';
export type { userProfile } from './models/userProfile';

export { EmailConfirmationService } from './services/EmailConfirmationService';
export { GameEntryService } from './services/GameEntryService';
export { StartGameService } from './services/StartGameService';
export { UserProfileService } from './services/UserProfileService';
