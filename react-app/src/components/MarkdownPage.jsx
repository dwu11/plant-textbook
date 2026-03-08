import React, { useMemo } from 'react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

function stripFrontMatter(raw) {
  // Remove YAML front matter blocks (--- ... ---) and Quarto callout markers (:::)
  return raw
    .replace(/^---[\s\S]*?---\s*/m, '')
    .replace(/^:::.*$/gm, '')
    .replace(/^\s*:::\s*$/gm, '');
}

export default function MarkdownPage({ content }) {
  const html = useMemo(() => md.render(stripFrontMatter(content)), [content]);

  return <article className="markdown" dangerouslySetInnerHTML={{ __html: html }} />;
}
