//Hooks 
import { useTranslation } from "react-i18next";

//CSS
import "./Footer.css";

//Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { IconButton } from "@mui/material";

const FooterIcons = () => {
  const { t } = useTranslation()

    const externalLinkInstagramHandler = () => {
        window.open("https://instagram.com", '_blank')
      }
    
      const externalLinkFacebookHandler = () => {
        window.open("https://facebook.com", '_blank')
      }
    
      const externalLinkYoutubeHandler = () => {
        window.open("https://youtube.com", '_blank')
      }

  return (
    <div className="footer-bottom-info-container__social-media">
      <h3>{t("fallow_us")}</h3>
      <div className="social-media-icons">
        <IconButton onClick={() => externalLinkInstagramHandler()}>
          <InstagramIcon
            sx={{
              fontSize: 40,
              color: "#e7415b",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "all .3s ease-in-out",
              },
            }}
          />
        </IconButton>
        <IconButton onClick={() => externalLinkFacebookHandler()}>
          <FacebookIcon
            sx={{
              fontSize: 40,
              color: "#3b589f",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "all .3s ease-in-out",
              },
            }}
          />
        </IconButton>
        <IconButton onClick={() => externalLinkYoutubeHandler()}>
          <YouTubeIcon
            sx={{
              fontSize: 40,
              color: "red",
              "&:hover": {
                transform: "scale(1.2)",
                transition: "all .3s ease-in-out",
              },
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default FooterIcons;
