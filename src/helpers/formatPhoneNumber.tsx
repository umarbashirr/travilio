export function formatPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/[^\d+()]/g, "");
}
