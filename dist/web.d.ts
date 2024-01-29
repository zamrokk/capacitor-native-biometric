import { WebPlugin } from "@capacitor/core";
import { AvailableResult, BiometricOptions, Credentials, DeleteCredentialOptions, GetCredentialOptions, NativeBiometricPlugin, SetCredentialOptions } from "./definitions";
export declare class NativeBiometricWeb extends WebPlugin implements NativeBiometricPlugin {
    constructor();
    isAvailable(): Promise<AvailableResult>;
    isInitialized(): Promise<boolean>;
    verifyIdentity(_options?: BiometricOptions): Promise<void>;
    getCredentials(_options: GetCredentialOptions): Promise<Credentials>;
    setCredentials(_options: SetCredentialOptions): Promise<void>;
    deleteCredentials(_options: DeleteCredentialOptions): Promise<void>;
}
