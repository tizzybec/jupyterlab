// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { ISignal } from '@phosphor/signaling';

import { IManager as IBaseManager } from '../basemanager';
import { ISpecModel, ISpecModels } from './restapi';
export { ISpecModel, ISpecModels };

/**
 * Object which manages kernel instances for a given base url.
 *
 * #### Notes
 * The manager is responsible for maintaining the state of kernel specs.
 */
export interface IManager extends IBaseManager {
  /**
   * A signal emitted when the kernel specs change.
   */
  specsChanged: ISignal<IManager, ISpecModels>;

  /**
   * The kernel spec models.
   *
   * #### Notes
   * The value will be null until the manager is ready.
   */
  readonly specs: ISpecModels | null;

  /**
   * Force a refresh of the specs from the server.
   *
   * @returns A promise that resolves when the specs are fetched.
   *
   * #### Notes
   * This is intended to be called only in response to a user action,
   * since the manager maintains its internal state.
   */
  refreshSpecs(): Promise<void>;
}
