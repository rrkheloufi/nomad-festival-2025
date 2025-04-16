import {
  faDeezer,
  faFacebook,
  faInstagram,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialLinksProps {
  spotify?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
  soundcloud?: string;
  deezer?: string;
  size?: "sm" | "lg";
  className?: string;
  onClickCapture?: (e: React.MouseEvent) => void;
}

interface SocialLink {
  type: string;
  url?: string;
  icon: any;
  hoverColor: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  spotify,
  youtube,
  instagram,
  facebook,
  soundcloud,
  deezer,
  size = "lg",
  className = "",
  onClickCapture,
}) => {
  const socialLinks: SocialLink[] = [
    {
      type: "spotify",
      url: spotify,
      icon: faSpotify,
      hoverColor: "#1DB954",
    },
    {
      type: "youtube",
      url: youtube,
      icon: faYoutube,
      hoverColor: "#FF0000",
    },
    {
      type: "instagram",
      url: instagram,
      icon: faInstagram,
      hoverColor: "#E1306C",
    },
    {
      type: "facebook",
      url: facebook,
      icon: faFacebook,
      hoverColor: "#4267B2",
    },
    {
      type: "soundcloud",
      url: soundcloud,
      icon: faSoundcloud,
      hoverColor: "#FF7700",
    },
    {
      type: "deezer",
      url: deezer,
      icon: faDeezer,
      hoverColor: "#FF0000",
    },
  ];

  const textSize = size === "sm" ? "text-lg" : "text-2xl lg:text-3xl";

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map(
        (social) =>
          social.url && (
            <a
              key={social.type}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textSize} transition-colors duration-300`}
              style={{ color: "var(--color-text)" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = social.hoverColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
              onClick={onClickCapture}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          )
      )}
    </div>
  );
};

export default SocialLinks;
