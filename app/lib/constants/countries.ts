import Zapier from "@/public/images/companies/zapier.svg";
import Adobe from "@/public/images/companies/adobe.svg";
import Spotify from "@/public/images/companies/spotify.svg";
import Amazon from "@/public/images/companies/amazon.svg";
import Slack from "@/public/images/companies/slack.svg";
import Zoom from "@/public/images/companies/zoom.svg";

export type Company = {
    name: string;
    logo: string;
}

export const companies: Company[] = [
    {
        name: "Zapier",
        logo: Zapier,
    },
    {
        name: "Adobe",
        logo: Adobe,
    },
    {
        name: "Spotify",
        logo: Spotify,
    },
    {
        name: "Amazon",
        logo: Amazon,
    },
    {
        name: "Slack",
        logo: Slack,
    },
    {
        name: "Zoom",
        logo: Zoom,
    }
];