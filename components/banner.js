import React from "react"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"

const getBanner = ({ banner }) => {
  if (banner.Name === null) {
    return ""
  }
  const bannerName = banner.Name
  const { url, alternativeText } = bannerName
  const loader = () => {
    return getStrapiMedia(bannerName)
  }
  return (
    <div className="photoBanner">
      <Image
        loader={loader}
        layout="responsive"
        width={bannerName.width}
        height={banner.height}
        objectFit="contain"
        src={url}
        alt={alternativeText || ""}
      />
    </div>
  )
}

export default getBanner
