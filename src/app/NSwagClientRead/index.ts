/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { checkStatusResponse } from './models/checkStatusResponse';
export type { gameEntry } from './models/gameEntry';
export type { gameLoopInput } from './models/gameLoopInput';
export type { gameOption } from './models/gameOption';
export type { initializeGameLoopInput } from './models/initializeGameLoopInput';
export type { userRegistrationInput } from './models/userRegistrationInput';
export type { votingCounter } from './models/votingCounter';

export { GameEntryService } from './services/GameEntryService';
export { GameLoopService } from './services/GameLoopService';
export { UserRegistrationService } from './services/UserRegistrationService';
