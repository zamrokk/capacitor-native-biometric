import { WebPlugin } from "@capacitor/core";
import {
  AvailableResult,
  BiometricOptions,
  Credentials,
  DeleteCredentialOptions,
  GetCredentialOptions,
  NativeBiometricPlugin,
  SetCredentialOptions,
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

  isInitialized(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  verifyIdentity(_options?: BiometricOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getCredentials(_options: GetCredentialOptions): Promise<Credentials> {
    throw new Error("Method not implemented.");
  }
  setCredentials(_options: SetCredentialOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteCredentials(_options: DeleteCredentialOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
