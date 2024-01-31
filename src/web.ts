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

  init(_options?: BiometricOptions): Promise<{ publicKey: string }> {
    throw new Error("Method not implemented.");
  }

  //call only if already initialized, otherwise it throws an error
  getPublicKey(): Promise<{ publicKey: string }> {
    throw new Error("Method not implemented.");
  }

  //sign payload with optional magic bytes
  sign(options: { payload: string }): Promise<{
    signature: string;
  }> {
    throw new Error("Method not implemented." + options);
  }
}
