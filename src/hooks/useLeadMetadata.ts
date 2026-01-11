import { useState, useEffect } from "react";

interface LeadMetadata {
  ipAddress: string;
  isMobile: string;
  platform: string;
  url: string;
  utmSource: string;
  utmCampaign: string;
}

export const useLeadMetadata = (): LeadMetadata => {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    // Fetch IP address from public API
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIpAddress(data.ip))
      .catch(() => setIpAddress("unknown"));
  }, []);

  // Detect if mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // Get platform
  const platform = navigator.platform || navigator.userAgent.split("(")[1]?.split(")")[0] || "Unknown";

  // Get UTM parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || "";
  const utmCampaign = urlParams.get("utm_campaign") || "";

  return {
    ipAddress,
    isMobile: String(isMobile),
    platform,
    url: window.location.href,
    utmSource,
    utmCampaign,
  };
};
