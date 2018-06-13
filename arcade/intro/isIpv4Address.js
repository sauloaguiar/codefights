function isIPv4Address(inputString) {
  const ips = inputString.split('.');
  if (ips.length < 4) {
      return false;
  }
  return ips.length === 4 && 
      ips.filter(elem => elem != '' && elem >= 0 && elem <= 255);
}
