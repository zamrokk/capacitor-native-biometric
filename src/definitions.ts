export enum BiometryType {
  // Android, iOS
  NONE = 0,
  // iOS
  TOUCH_ID = 1,
  // iOS
  FACE_ID = 2,
  // Android
  FINGERPRINT = 3,
  // Android
  FACE_AUTHENTICATION = 4,
  // Android
  IRIS_AUTHENTICATION = 5,
  // Android
  MULTIPLE = 6,
}

export interface IsAvailableOptions {
  /**
   * Specifies if should fallback to passcode authentication if biometric authentication is not available.
   */
  useFallback: boolean;
}

export interface AvailableResult {
  isAvailable: boolean;
  biometryType: BiometryType;
  errorCode?: number;
}

export interface BiometricOptions {
  reason?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  negativeButtonText?: string;
  /**
   * Specifies if should fallback to passcode authentication if biometric authentication fails.
   */
  useFallback?: boolean;
  /**
   * Only for iOS.
   * Set the text for the fallback button in the authentication dialog.
   * If this property is not specified, the default text is set by the system.
   */
  fallbackTitle?: string;
  /**
   * Only for Android.
   * Set a maximum number of attempts for biometric authentication. The maximum allowed by android is 5.
   * @default 1
   */
  maxAttempts?: number;
}

/**
 * Keep this in sync with BiometricAuthError in README.md
 * Update whenever `convertToPluginErrorCode` functions are modified
 */
export enum BiometricAuthError {
  UNKNOWN_ERROR = 0,
  BIOMETRICS_UNAVAILABLE = 1,
  USER_LOCKOUT = 2,
  BIOMETRICS_NOT_ENROLLED = 3,
  USER_TEMPORARY_LOCKOUT = 4,
  AUTHENTICATION_FAILED = 10,
  APP_CANCEL = 11,
  INVALID_CONTEXT = 12,
  NOT_INTERACTIVE = 13,
  PASSCODE_NOT_SET = 14,
  SYSTEM_CANCEL = 15,
  USER_CANCEL = 16,
  USER_FALLBACK = 17,
}

export interface NativeBiometricPlugin {
  //if Biometrics are available on the device
  isAvailable(options?: IsAvailableOptions): Promise<AvailableResult>;

  //returns the public key
  init(options?: BiometricOptions): Promise<{ publicKey: string }>;

  //call only if already initialized, otherwise it throws an error
  getPublicKey(): Promise<{ publicKey: string }>;

  //sign payload with optional magic bytes
  sign(watermarkedBytes: string): Promise<{
    signature: string;
  }>;
}
