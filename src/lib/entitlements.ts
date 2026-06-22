import type { CloudUser, Entitlements } from "@/types";

/**
 * PATCHED: Always returns max tier entitlements.
 * Bypasses all frontend PRO locks and limits.
 */
export function getEntitlements(
  user: CloudUser | null | undefined,
): Entitlements {
  return {
    active: true,
    browserAutomation: true,
    crossOsFingerprints: true,
    cloudBackup: true,
    teamCollaboration: true,
    profileLimit: 9999999,
    requestsPerHour: 10000,
  } as Entitlements;
}
