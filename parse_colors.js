const fs = require('fs');
const csv = require('csv-parse/sync');

// Read the CSV file
const csvContent = fs.readFileSync("Werner's Nomenclature of Colours - Colors.csv", 'utf-8');

// Parse CSV data
const records = csv.parse(csvContent, {
  columns: true,
  skip_empty_lines: true
});

// Transform the data into the format we need
const colors = records.map(record => ({
  group: record.Group,
  name: record.Name,
  hex: record.Hex,
  animal: record.Animal,
  vegetable: record.Vegetable,
  mineral: record.Mineral,
  description: record.Description
}));

// Generate the code.js content
const codeContent = `const wernerColors = ${JSON.stringify(colors, null, 2)};

figma.showUI(__html__, { width: 840, height: 640 });

// Send the color data to the UI
figma.ui.postMessage(wernerColors);

// Listen for color selection
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-color-style') {
    const { name, hex } = msg;
    
    // Create a paint style
    const style = figma.createPaintStyle();
    style.name = name;
    style.paints = [{
      type: 'SOLID',
      color: hexToRgb(hex)
    }];
  }
};

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
}`;

// Write the generated code to code.js
fs.writeFileSync('code.js', codeContent); 