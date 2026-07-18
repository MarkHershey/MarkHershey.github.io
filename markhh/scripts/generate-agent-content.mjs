import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import PROFILE from "../src/data/profile.mjs";
import PUBLICATIONS from "../src/data/publicationContent.mjs";
import SOCIAL_LINKS, { GOOGLE_SCHOLAR_URL } from "../src/data/socialLinks.mjs";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const publicDirectory = resolve(scriptDirectory, "../public");

const absoluteUrl = (url) => new URL(url, PROFILE.siteUrl).href;
const markdownLink = (label, url) => `[${label}](${absoluteUrl(url)})`;

const formatAuthors = (authors) => authors
    .map((author) => author.url ? markdownLink(author.name, author.url) : author.name)
    .join(", ");

const formatResources = (links) => Object.entries(links)
    .filter(([, url]) => Boolean(url))
    .map(([label, url]) => markdownLink(label, url))
    .join(" · ");

const publicationSections = PUBLICATIONS.map((publication) => `### ${publication.title}

- Venue: ${publication.venue}
- Authors: ${formatAuthors(publication.authors)}
- Resources: ${formatResources(publication.links)}
- Stable ID: \`${publication.id}\`

\`\`\`bibtex
${publication.citation}
\`\`\``).join("\n\n");

const profileLinks = SOCIAL_LINKS.map((socialLink) =>
    `- ${markdownLink(socialLink.name, socialLink.link)}`
).join("\n");

const profileMarkdown = `# ${PROFILE.name}

> Computer Science PhD student based in ${PROFILE.location}, working on ${PROFILE.researchFocus}.

## Biography

Hi there, I'm ${PROFILE.name}, currently based in ${PROFILE.location}. I work on ${PROFILE.researchFocus}. I'm a PhD student in ${PROFILE.degreeField} at ${markdownLink(PROFILE.institution.name, PROFILE.institution.url)}, and my PhD research is generously supported by ${markdownLink(PROFILE.fundingAgency.name, PROFILE.fundingAgency.url)} ${PROFILE.scholarship}.

## Publications

${publicationSections}

## Scholarly and social profiles

${profileLinks}

## Website metadata

- Canonical website: ${markdownLink(PROFILE.siteUrl, PROFILE.siteUrl)}
- Google Scholar: ${markdownLink("Full publication list", GOOGLE_SCHOLAR_URL)}
- Agent-oriented index: ${markdownLink("llms.txt", "/llms.txt")}
- Last updated: ${PROFILE.lastUpdated}
`;

const llmsLinks = SOCIAL_LINKS
    .filter(({ name }) => ["Google Scholar", "ORCID", "OpenReview", "arXiv", "DBLP", "GitHub"].includes(name))
    .map((socialLink) => `- ${markdownLink(socialLink.name, socialLink.link)}: ${PROFILE.name}'s ${socialLink.name} profile.`)
    .join("\n");

const llmsMarkdown = `# ${PROFILE.name}

> Personal academic website of ${PROFILE.name}, a Computer Science PhD student based in ${PROFILE.location} who works on ${PROFILE.researchFocus}.

This site contains a short biography, publication metadata, individually linked authors, project and paper resources, BibTeX citations, and scholarly profiles.

## Core content

- ${markdownLink("Full Markdown profile", "/profile.md")}: Complete biography, publications, resources, citations, and profile links in one text-only document.
- ${markdownLink("Human-facing website", PROFILE.siteUrl)}: Canonical visual version of the website.

## Research profiles

${llmsLinks}

## Optional

- ${markdownLink("GPG public key", "/GPG.txt")}: Public key for verifying signed communication.
`;

await Promise.all([
    writeFile(resolve(publicDirectory, "profile.md"), profileMarkdown, "utf8"),
    writeFile(resolve(publicDirectory, "llms.txt"), llmsMarkdown, "utf8"),
]);

console.log("Generated public/profile.md and public/llms.txt");
