interface ColorRelationship {
  name: string;
  type: 'component' | 'similar' | 'complementary';
  description: string;
}

interface ColorMetadata {
  name: string;
  relationships: ColorRelationship[];
  historicalNotes?: string;
  originalPageNumber?: number;
  wernerClassification?: string;
  commonUses?: string[];
  modernEquivalent?: {
    pantone?: string;
    ral?: string;
    ncs?: string;
  };
}

export const colorMetadata: { [key: string]: ColorMetadata } = {
  "Snow White": {
    name: "Snow White",
    relationships: [
      { 
        name: "Reddish White",
        type: "similar",
        description: "A direct variation with added crimson red"
      },
      {
        name: "Yellowish White",
        type: "similar",
        description: "A direct variation with added lemon yellow"
      }
    ],
    historicalNotes: "The characteristic colour of the whites in Werner's system, considered the purest white colour",
    originalPageNumber: 1,
    wernerClassification: "Pure White",
    commonUses: ["Scientific illustration", "Natural history documentation", "Mineralogy reference"]
  },
  "Crimson Red": {
    name: "Crimson Red",
    relationships: [
      {
        name: "Carmine Red",
        type: "component",
        description: "A primary component color"
      },
      {
        name: "Indigo Blue",
        type: "component",
        description: "A minor component that adds depth"
      },
      {
        name: "Lake Red",
        type: "similar",
        description: "A closely related red with different composition"
      }
    ],
    historicalNotes: "Used extensively in early 19th century botanical illustrations",
    originalPageNumber: 12,
    wernerClassification: "Pure Red",
    commonUses: ["Botanical illustration", "Mineral identification", "Natural history documentation"]
  },
  "Brownish Orange": {
    name: "Brownish Orange",
    relationships: [
      {
        name: "Orpiment Orange",
        type: "component",
        description: "The primary base color"
      },
      {
        name: "Hyacinth Red",
        type: "component",
        description: "Adds the reddish tint"
      },
      {
        name: "Chestnut Brown",
        type: "component",
        description: "Provides the brownish quality"
      }
    ],
    historicalNotes: "Commonly used in mineralogical studies of topaz and similar minerals",
    originalPageNumber: 15,
    commonUses: ["Mineral identification", "Geological documentation"]
  }
  // Add more colors as needed...
}; 