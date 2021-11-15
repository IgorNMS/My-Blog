import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
  return media.url.startsWith("/") ? getStrapiURL(media.url) : media.url
}
