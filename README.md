# Werner's Nomenclature of Colors - Figma Plugin

A Figma plugin that brings Werner's historical color system to modern design workflows. This plugin provides access to Werner's complete color catalog, including detailed descriptions, examples from nature, and historical context for each color.

## Installation (For Users)

1. Open Figma Desktop App
2. Go to Menu > Plugins > Browse plugins in Community
3. Search for "Werner's Colors"
4. Click "Install"

## Features

- Browse the complete Werner's color catalog
- Search colors by name, group, or description
- View detailed information about each color including:
  - Original color descriptions
  - Examples from animal, vegetable, and mineral kingdoms
  - Historical context
- Generate random colors for inspiration
- Create Figma color styles directly from the plugin
- Copy hex codes with one click
- Navigate related colors through interactive links

## Development Setup

If you want to modify or contribute to the plugin:

1. Clone the repository
```bash
git clone https://github.com/pauljunbear/wado-sanzo-figma-plugin.git
cd wado-sanzo-figma-plugin
```

2. Install dependencies
```bash
npm install
```

3. Build the plugin
```bash
npm run build
```

4. Import into Figma:
   - Open Figma Desktop App
   - Go to Menu > Plugins > Development > Import plugin from manifest
   - Select the `manifest.json` file from this directory

5. To make changes:
   - Edit the source files
   - Run `npm run build` to compile
   - Use the Refresh button in Figma's plugin menu to see changes

## Credits

This project is based on Werner's Nomenclature of Colors, compiled by Patrick Syme (1814), which was a crucial color reference system used by naturalists and scientists in the 19th century, including Charles Darwin.

Data sources:
- [Werner's Nomenclature of Colors](https://www.c82.net/werner) by Nicholas Rougeux
- Smithsonian Libraries' digital edition of Werner's Nomenclature of Colors

## License

MIT License - See LICENSE file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
