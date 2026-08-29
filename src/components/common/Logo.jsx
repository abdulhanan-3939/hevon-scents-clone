/**
 * Logo — renders the correct HEVON SCENTS logo asset based on `variant`.
 *
 * variant options:
 *   "white"    → transparent background, white text  (use on dark / hero backgrounds)
 *   "black"    → transparent background, black text  (use on light / scrolled backgrounds)
 *   "black-bg" → black canvas, white text            (use when a contained dark badge is needed)
 *   "white-bg" → white canvas, black text            (use when a contained light badge is needed)
 *
 * IMPORTANT: Never use CSS filter: invert() to simulate logo variants.
 *            Always swap the actual asset file.
 */
import React from 'react';

const LOGO_ASSETS = {
  'white':    '/images/logo/hevon-logo-white.png.png',
  'black':    '/images/logo/hevon-logo-black.png.png',
  'black-bg': '/images/logo/hevon-logo-black-bg.png.png',
  'white-bg': '/images/logo/hevon-logo-white-bg.png.png',
};

export default function Logo({
  variant = 'white',
  height = 44,
  className = '',
  style = {},
}) {
  const src = LOGO_ASSETS[variant] ?? LOGO_ASSETS['white'];

  return (
    <img
      src={src}
      alt="HEVON SCENTS"
      height={height}
      width="auto"
      className={className}
      style={{ height, width: 'auto', objectFit: 'contain', display: 'block', ...style }}
      draggable={false}
    />
  );
}
