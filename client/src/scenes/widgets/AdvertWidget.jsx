import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import React from 'react';

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="/api/assets/mcAd.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MCDonalds</Typography>
        <Typography color={medium}>mcdonalds.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Every McDelivery order in the app lets you earn MyMcDonald’s Rewards points—use those to get your free food. And, yup, you can get ‘em delivered, too. Imagine, McD’s you didn’t pay for brought right to you. Check out how easy ordering delivery is in the app.*
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
