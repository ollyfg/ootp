export type OtpAlgorithm = "SHA1";

export type Otp = {
  /** A friendly name for this OTP */
  name: string;
  /** The service that issued this OTP */
  issuer: string;
  /** The profile ID this OTP belongs in */
  profileId: `profile_${string}`;
  /** The hash algorithm used for this OTP */
  algorithm: OtpAlgorithm;
  /** The base32 encoded secret */
  secret: string;
};

/** A container for Otps */
export type Profile = {
  id: `profile_${string}`;
  name: string;
  logo: string;
};
