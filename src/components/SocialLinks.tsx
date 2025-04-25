import {
  faChrome,
  faDeezer,
  faFacebook,
  faInstagram,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface SocialLinksProps {
  spotify?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
  soundcloud?: string;
  deezer?: string;
  linktree?: string;
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
  linktree,
  size = "lg",
  className = "",
  onClickCapture,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Précharger les icônes
    const preloadIcons = async () => {
      try {
        // Attendre un court délai pour s'assurer que les icônes sont chargées
        await new Promise((resolve) => setTimeout(resolve, 100));
        setIsLoaded(true);
      } catch (error) {
        console.error("Erreur lors du chargement des icônes:", error);
        setIsLoaded(true); // On continue quand même si ça échoue
      }
    };

    preloadIcons();
  }, []);

  const socialLinks: SocialLink[] = [
    {
      type: "spotify",
      url: spotify,
      icon: faSpotify,
      hoverColor: "hover:text-[#1DB954]",
    },
    {
      type: "youtube",
      url: youtube,
      icon: faYoutube,
      hoverColor: "hover:text-[#FF0000]",
    },
    {
      type: "instagram",
      url: instagram,
      icon: faInstagram,
      hoverColor: "hover:text-[#E1306C]",
    },
    {
      type: "facebook",
      url: facebook,
      icon: faFacebook,
      hoverColor: "hover:text-[#4267B2]",
    },
    {
      type: "soundcloud",
      url: soundcloud,
      icon: faSoundcloud,
      hoverColor: "hover:text-[#FF7700]",
    },
    {
      type: "deezer",
      url: deezer,
      icon: faDeezer,
      hoverColor: "hover:text-[#FF0000]",
    },
    {
      type: "linktree",
      url: linktree,
      icon: faChrome,
      hoverColor: "hover:text-[#43E97B]",
    },
  ];

  const textSize = size === "sm" ? "text-lg" : "text-2xl lg:text-3xl";

  return (
    <div
      className={`flex space-x-4 ${className} ${
        !isLoaded ? "opacity-0" : "opacity-100 transition-opacity duration-300"
      }`}
    >
      {socialLinks.map(
        (social) =>
          social.url && (
            <a
              key={social.type}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textSize} transition-colors duration-300 ${social.hoverColor} text-white`}
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
