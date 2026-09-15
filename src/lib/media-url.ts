const MEDIA_BASE_URL = import.meta.env.VITE_MEDIA_BASE_URL;

export function mediaUrl(path: string) {
  return `${MEDIA_BASE_URL}${path}`;
}
