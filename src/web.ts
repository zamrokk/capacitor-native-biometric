import { WebPlugin } from "@capacitor/core";
import {
  AvailableResult,
  BiometricOptions,
  NativeBiometricPlugin,
} from "./definitions";

export class NativeBiometricWeb
  extends WebPlugin
  implements NativeBiometricPlugin
{
  constructor() {
    super();
  }
  isAvailable(): Promise<AvailableResult> {
    throw new Error("Method not implemented.");
  }

  init(_options?: BiometricOptions): Promise<string> {
    throw new Error("Method not implemented.");
  }

  //call only if already initialized, otherwise it throws an error
  getPublicKey(): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
