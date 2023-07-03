<h1 align="center">WebP Converter Browser</h1>

<div align="center">
  <img
    src="https://repository-images.githubusercontent.com/584793683/0db86c0f-83ac-4387-991c-9ab84ba2e60c"
    alt=""
    width="300"
  />
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<br />

<div align="center">
  <a href="https://snyk.io/test/github/juunini/webp-converter-browser">
    <img src="https://snyk.io/test/github/juunini/webp-converter-browser/badge.svg" />
  </a>
</div>

---

## [Demo](https://juunini.github.io/webp-converter-browser)

## Introduce

Convert your image in browser side(frontend side).  

## Install

```bash
# npm
npm install webp-converter-browser

# yarn
yarn add webp-converter-browser

# pnpm
pnpm add webp-converter-browser

# bun
bun add webp-converter-browser
```

## Usage

```ts
import { srcToWebP, blobToWebP, arrayBufferToWebP } from 'webp-converter-browser'

// ...

// When it cause CORS, you may failed to use `srcToWebP`
const webpBlob = await srcToWebP(pngSrc, { /** options */ })
// or
const webpBlob = await blobToWebP(pngBlob, { /** options */ })
// or
const webpBlob = await arrayBufferToWebP(jpgArrayBuffer, { /** options */ })
```

### Vanilla

```html
<script src="https://cdn.jsdelivr.net/npm/webp-converter-browser@latest/dist/index.min.js"></script>

<script>
  // ...

  // When it cause CORS, you may failed to use `srcToWebP`
  const webpBlob = await webpConverterBrowser.srcToWebP(pngSrc, { /** options */ })
  // or
  const webpBlob = await webpConverterBrowser.blobToWebP(pngBlob, { /** options */ })
  // or
  const webpBlob = await webpConverterBrowser.arrayBufferToWebP(jpgArrayBuffer, { /** options */ })
</script>
```

## Options

| Name | Description | Default            |
|-|-|--------------------|
| quality | image quality | 0.75               |
| width | image width | Given image width  |
| height | image height | Given image height |
