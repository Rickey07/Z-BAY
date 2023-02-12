import React from "react";
import CTABanner from "./CTABanner";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import SearchbarForFooter from "../SearchBars/SearchbarForFooter";
import PrimaryButton from "../Buttons/PrimaryButton";

const Footer = (prop) => {
  const theme = useTheme();

  const FooterStyles = {
    backgroundColor: `${theme.mainTheme.primaryColor}`,
  };

  const footerContentStyles = {};

  const headings = [
    "Z-Bay",
    "Subscribe to get important Update",
    "Follow Us",
    "Call Us",
  ];

  // Footer Social Media Links section

  const socialLinksWithIconsData = [
    { icon: <Instagram />, link: "#" },
    { icon: <Twitter />, link: "#" },
    { icon: <Facebook />, link: "#" },
  ];

  const SocialMediaMenu = () => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            flexWrap:"wrap"
          }}
        >
          {socialLinksWithIconsData.map((link) => {
            return (
              <>
                <a
                  href={link.link}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    padding: "10px",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                  }}
                >
                  {link.icon}
                </a>
              </>
            );
          })}
        </Box>
      </>
    );
  };

  const FooterContent = () => {
    <></>;
  };

  // Footer Search Bar Email Content Input

  const FooterContentEmailInput = () => {
    return (
      <>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            flexWrap:"wrap"
          }}
        >
          <SearchbarForFooter />
          <PrimaryButton text={"subscribe"} />
        </Box>
      </>
    );
  };

  return (
    <Box sx={FooterStyles}>
      <CTABanner CTAHeading={"Ready to Talk , Let's Talk Now"} />
      <Grid container columnGap={3} sx={{padding:"5rem 0 9rem",borderBottom:"2px solid white",display:"flex",flexWrap:"wrap"}}>
        <Grid item md={1}></Grid>
        {headings.map((heading, index) => {
          return (
            <Grid
              md={"2.5"}
              xs={12}
              sx={{ textAlign: "start", }}
              item
            >
              <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
                {heading}
              </Typography>
              {index === 0 ? (
                <Typography variant="p">
                  Best Ecommerce Available For your needs
                </Typography>
              ) : index === 1 ? (
                <FooterContentEmailInput />
              ) : index === 2 ? (
                <SocialMediaMenu />
              ) : (
                <Typography variant="p">
                  +918770898508
                </Typography>
              )}
            </Grid>
          );
        })}
        <Grid item md={1} xs={2}></Grid>
      </Grid>
      <Typography variant="h5" sx={{padding:"1rem"}}>
          Copy Rights @2023 All Rights Reserved to Z-Bay.
      </Typography>
    </Box>
  );
};

export default Footer;
