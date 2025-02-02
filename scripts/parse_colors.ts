import * as fs from 'fs';
import { parse } from 'csv-parse/sync';

interface WernerColor {
  group: string;
  name: string;
  hex: string;
  animal: string;
  vegetable: string;
  mineral: string;
  description: string;
}

// Read the CSV file
const csvContent = fs.readFileSync("Werner's Nomenclature of Colours - Colors.csv", 'utf-8');

// Parse CSV data
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true
});

// Transform the data into the format we need
const colors: WernerColor[] = records.map((record: any) => ({
  group: record.Group,
  name: record.Name,
  hex: record.Hex,
  animal: record.Animal,
  vegetable: record.Vegetable,
  mineral: record.Mineral,
  description: record.Description
}));

// Generate the code.ts content
const codeContent = `interface WernerColor {
  group: string;
  name: string;
  hex: string;
  animal: string;
  vegetable: string;
  mineral: string;
  description: string;
}

const wernerColors: WernerColor[] = ${JSON.stringify(colors, null, 2)};

figma.showUI(__html__, { width: 840, height: 640 });

// Send the color data to the UI
figma.ui.postMessage(wernerColors);

// Listen for color selection
figma.ui.onmessage = async (msg: { type: string; name?: string; hex?: string }) => {
  if (msg.type === 'create-color-style' && msg.name && msg.hex) {
    // Create a paint style
    const style = figma.createPaintStyle();
    style.name = msg.name;
    style.paints = [{
      type: 'SOLID',
      color: hexToRgb(msg.hex)
    }];
  }
};

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
}`;

// Write the generated code to src/code.ts
fs.writeFileSync('src/code.ts', codeContent); 