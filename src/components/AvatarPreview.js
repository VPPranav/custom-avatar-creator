import Avatar from "avataaars"
import "./AvatarPreview.css"

function AvatarPreview({ options }) {
  return (
    <div className="avatar-preview-wrapper">
      <div id="avatar-preview-container" className="avatar-preview">
        <Avatar
          style={{ width: "280px", height: "280px" }}
          avatarStyle="Circle"
          topType={options.topType}
          accessoriesType={options.accessoriesType}
          hairColor={options.hairColor}
          facialHairType={options.facialHairType}
          facialHairColor={options.facialHairColor}
          clotheType={options.clotheType}
          clotheColor={options.clotheColor}
          eyeType={options.eyeType}
          eyebrowType={options.eyebrowType}
          mouthType={options.mouthType}
          skinColor={options.skinColor}
          graphicType={options.graphicType}
        />
      </div>
    </div>
  )
}

export default AvatarPreview
