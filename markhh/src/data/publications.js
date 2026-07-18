import learningToUnlearnThumbnail from "../pics/publications/learning-to-unlearn.webp";
import mcresThumbnail from "../pics/publications/mcres.webp";
import onlineSplatterThumbnail from "../pics/publications/onlinesplatter.webp";
import psivgThumbnail from "../pics/publications/psivg.webp";
import trafficQaThumbnail from "../pics/publications/trafficqa.webp";
import PUBLICATION_CONTENT from "./publicationContent.mjs";

const THUMBNAILS = {
    foo2026physical: {
        src: psivgThumbnail,
        alt: "PSIVG comparison showing a simulated bowling ball collision",
    },
    huang2025onlinesplatter: {
        src: onlineSplatterThumbnail,
        alt: "OnlineSplatter reconstructing a handheld camera from a stream of RGB views",
    },
    huang2024learning: {
        src: learningToUnlearnThumbnail,
        alt: "Learning-to-Unlearn meta-optimization and gradient harmonization pipeline",
    },
    xu2023meta: {
        src: mcresThumbnail,
        alt: "MCRES example contrasting learned concepts with a novel test-time composition",
    },
    xu2021sutd: {
        src: trafficQaThumbnail,
        alt: "SUTD-TrafficQA example with traffic frames and causal reasoning questions",
    },
};

const PUBLICATIONS = PUBLICATION_CONTENT.map((publication) => ({
    ...publication,
    thumbnail: THUMBNAILS[publication.id],
}));

export default PUBLICATIONS;
