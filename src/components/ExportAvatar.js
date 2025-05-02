"use client"

import { useRef } from "react"
import Avatar from "avataaars"

// This is a hidden component used only for exporting clean avatars
const ExportAvatar = ({ options, onExportReady }) => {
  const containerRef = useRef(null)

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        width: "500px",
        height: "500px",
        background: "transparent",
      }}
    >
      <Avatar style={{ width: "100%", height: "100%" }} avatarStyle="Circle" {...options} />
    </div>
  )
}

export default ExportAvatar
