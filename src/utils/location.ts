// features/order/utils/geolocation.ts

export async function getAddressFromCoordinates(
  latitude: number,
  longitude: number,
): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
    );

    const data: { display_name?: string } = await res.json();

    return data.display_name ?? `${latitude}, ${longitude}`;
  } catch {
    return `${latitude}, ${longitude}`;
  }
}

export function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
    }

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
