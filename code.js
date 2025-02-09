const wernerColors = [
  {
    "group": "Whites",
    "name": "Snow White",
    "hex": "#f1e9cd",
    "animal": "Breast of the black-headed Gull.",
    "vegetable": "Snow-Drop.",
    "mineral": "Carara Marble and Calc Sinter.",
    "description": "Snow White, is the characteristic colour of the whites; it is the purest white colour; being free of all intermixture, it resembles new-fallen snow."
  },
  {
    "group": "Whites",
    "name": "Reddish White",
    "hex": "#f2e7cf",
    "animal": "Egg of Grey Linnet",
    "vegetable": "Back of the Christmas Rose.",
    "mineral": "Porcelain Earth.",
    "description": "Reddish White, is composed of [snow white], with a very minute portion of [crimson red] and [ash grey]."
  },
  {
    "group": "Whites",
    "name": "Purplish White",
    "hex": "#ece6d0",
    "animal": "Junction of the Neck and Back of the Kittiwake Gull.",
    "vegetable": "White Geranium or Storks Bill.",
    "mineral": "Arragonite.",
    "description": "Purplish White, is [snow white], with the slightest tinge of [crimson red] and [Berlin blue], and a very minute portion of [ash grey]."
  },
  {
    "group": "Whites",
    "name": "Yellowish White",
    "hex": "#f2eacc",
    "animal": "Egret.",
    "vegetable": "Hawthorn Blossom.",
    "mineral": "Chalk and Tripoli.",
    "description": "Yellowish White, is composed of [snow white], with a very little [lemon yellow] and [ash grey]."
  },
  {
    "group": "Whites",
    "name": "Orange coloured White",
    "hex": "#f3e9ca",
    "animal": "Breast of White or Screech Owl.",
    "vegetable": "Large Wild Convolvulus.",
    "mineral": "French Porcelain Clay.",
    "description": "Orange-coloured White, is [snow white], with a very small portion of [tile red] and [king's yellow], and a minute portion of [ash grey]."
  },
  {
    "group": "Whites",
    "name": "Greenish White",
    "hex": "#f2ebcd",
    "animal": "Vent Coverts of Golden crested Wren.",
    "vegetable": "Polyanthus Narcissus.",
    "mineral": "Calc sinter.",
    "description": "Greenish White, is [snow white], mixed with a very little [emerald green] and [ash grey]."
  },
  {
    "group": "Whites",
    "name": "Skimmed milk White",
    "hex": "#e6e1c9",
    "animal": "White of the Human Eyeballs.",
    "vegetable": "Back of the Petals of Blue Hepatica.",
    "mineral": "Common Opal.",
    "description": "Skimmed-milk White, is [snow white], mixed with a little [Berlin blue] and [ash grey]."
  },
  {
    "group": "Whites",
    "name": "Greyish White",
    "hex": "#e2ddc6",
    "animal": "Inside Quill-feathers of the Kittiwake.",
    "vegetable": "White Hamburgh Grapes.",
    "mineral": "Granular Limestone.",
    "description": "Greyish White, is [snow white], mixed with a little [ash grey]."
  },
  {
    "group": "Greys",
    "name": "Ash Grey",
    "hex": "#cbc8b7",
    "animal": "Breast of long tailed Hen Titmouse.",
    "vegetable": "Fresh Wood ashes.",
    "mineral": "Flint.",
    "description": "Ash Grey, is the characteristic colour of Werner's Greys; he gives no description of its component parts; it is composed of [snow white], with portions of [smoke] and [French grey], and a very little [yellowish grey] and [carmine red]."
  },
  {
    "group": "Greys",
    "name": "Smoke Grey",
    "hex": "#bfbbb0",
    "animal": "Breast of the Robin round the Red.",
    "vegetable": "",
    "mineral": "Flint.",
    "description": "Smoke Grey, is [ash grey] mixed with a little [brown]."
  },
  {
    "group": "Greys",
    "name": "French Grey",
    "hex": "#bebeb3",
    "animal": "Breast of Pied Wag tail.",
    "vegetable": "",
    "mineral": "",
    "description": "French Grey, nearly the steel grey of Werner, without the lustre, is [greyish white], with a slight tinge of [black] and [carmine red]."
  },
  {
    "group": "Greys",
    "name": "Pearl Grey",
    "hex": "#b7b5ac",
    "animal": "Backs of black headed and Kittiwake Gulls.",
    "vegetable": "Back of Petals of Purple Hepatica.",
    "mineral": "Porcelain Jasper.",
    "description": "Pearl Grey, is [ash grey] mixed with a little [crimson red] and [blue], or [bluish grey] with a little [red]."
  },
  {
    "group": "Greys",
    "name": "Yellowish Grey",
    "hex": "#bab191",
    "animal": "Vent coverts of White Rump.",
    "vegetable": "Stems of the Barberry.",
    "mineral": "Common Calcedony.",
    "description": "Yellowish Grey, is [ash grey] mixed with [lemon yellow] and a minute portion of [brown]."
  },
  {
    "group": "Greys",
    "name": "Bluish Grey",
    "hex": "#9c9d9a",
    "animal": "Back and tail Coverts Wood Pigeon.",
    "vegetable": "",
    "mineral": "Limestone",
    "description": "Bluish Grey, is [ash grey] mixed with a little [blue]."
  },
  {
    "group": "Greys",
    "name": "Greenish Grey",
    "hex": "#8a8d84",
    "animal": "Quill feathers of the Robin.",
    "vegetable": "Bark of Ash Tree.",
    "mineral": "Clay Slate Wacke.",
    "description": "Greenish Grey, is [ash grey] mixed with a little [emerald green], a small portion of [black], and a little [lemon yellow]."
  },
  {
    "group": "Greys",
    "name": "Blackish Grey",
    "hex": "#5b5c61",
    "animal": "Back of Nut-hatch.",
    "vegetable": "Old Stems of Hawthorn.",
    "mineral": "Flint.",
    "description": "Blackish Grey, a blackish lead grey of Werner without the lustre is [ash grey], with a little [blue] and a portion of [black]."
  },
  {
    "group": "Blacks",
    "name": "Greyish Black",
    "hex": "#555152",
    "animal": "Water Ousel. Breast and upper Part of Back of Water Hen.",
    "vegetable": "",
    "mineral": "Basalt.",
    "description": "Greyish Black, is composed of [velvet black], with a portion of [ash grey]."
  },
  {
    "group": "Blacks",
    "name": "Bluish Black",
    "hex": "#413f44",
    "animal": "Largest Black Slug",
    "vegetable": "Crowberry.",
    "mineral": "Black Cobalt Ochre.",
    "description": "Bluish Black, is [velvet black], mixed with a little [blue] and [blackish grey]."
  },
  {
    "group": "Blacks",
    "name": "Greenish Black",
    "hex": "#454445",
    "animal": "Breast of Lapwing",
    "vegetable": "",
    "mineral": "Hornblende",
    "description": "Greenish Black, is [velvet black], mixed with a little [brown], [yellow], and [green]."
  },
  {
    "group": "Blacks",
    "name": "Pitch or Brownish Black",
    "hex": "#423937",
    "animal": "Guillemot. Wing Coverts of Black Cock.",
    "vegetable": "",
    "mineral": "Yenite mica",
    "description": "Pitch, or Brownish Black, is [velvet black], mixed with a little [brown] and [yellow]."
  },
  {
    "group": "Blacks",
    "name": "Reddish Black",
    "hex": "#433635",
    "animal": "Spots on Large Wings of Tyger Moth. Breast of Pochard Duck.",
    "vegetable": "Berry of Fuchsia Coccinea.",
    "mineral": "Oliven ore",
    "description": "Reddish Black, is [velvet black], mixed with a very little [carmine red], and a small portion of [chestnut brown]."
  },
  {
    "group": "Blacks",
    "name": "Ink Black",
    "hex": "#252024",
    "animal": "",
    "vegetable": "Berry of Deadly Night Shade",
    "mineral": "Oliven ore",
    "description": "Ink Black, is [velvet black], with a little [indigo blue] in it."
  },
  {
    "group": "Blacks",
    "name": "Velvet Black",
    "hex": "#241f20",
    "animal": "Mole. Tail Feathers of Black Cock.",
    "vegetable": "Black of Red and Black West-Indian peas.",
    "mineral": "Obsidian",
    "description": "Velvet Black, is the characteristic colour of the blacks; it is the colour of black velvet."
  },
  {
    "group": "Blues",
    "name": "Scotch Blue",
    "hex": "#281f3f",
    "animal": "Throat of Blue Titmouse.",
    "vegetable": "Stamina of Single Purple Anemone.",
    "mineral": "Blue Copper Ore.",
    "description": "Scotch Blue, is [Berlin blue], mixed with a considerable portion of [velvet black], a very little [grey], and a slight tinge of [carmine red]."
  },
  {
    "group": "Blues",
    "name": "Prussian Blue",
    "hex": "#1c1949",
    "animal": "Beauty Spot on Wing of Mallard Drake.",
    "vegetable": "Stamina of Bluish Purple Anemone.",
    "mineral": "Blue Copper Ore",
    "description": "Prussian Blue, is [Berlin blue], with a considerable portion of [velvet black], and a small quantity of [indigo blue]."
  },
  {
    "group": "Blues",
    "name": "Indigo Blue",
    "hex": "#4f638d",
    "animal": "",
    "vegetable": "",
    "mineral": "Blue Copper Ore.",
    "description": "Indigo Blue, is composed of [berlin blue], a little [black], and a small portion of [apple green]."
  },
  {
    "group": "Blues",
    "name": "China Blue",
    "hex": "#383867",
    "animal": "Rhynchites Nitens",
    "vegetable": "Back Parts of Gentian Flower.",
    "mineral": "Blue Copper Ore from Chessy.",
    "description": "China Blue, is [azure blue], with a little [prussian blue] in it."
  },
  {
    "group": "Blues",
    "name": "Azure Blue",
    "hex": "#5c6b8f",
    "animal": "Breast of Emerald-crested Manakin",
    "vegetable": "Grape Hyacinth. Gentian.",
    "mineral": "Blue Copper Ore.",
    "description": "Azure Blue, is [Berlin blue], mixed with a little [carmine red]: it is a burning colour."
  },
  {
    "group": "Blues",
    "name": "Ultramarine Blue",
    "hex": "#657abb",
    "animal": "Upper Side of the Wings of small blue Heath Butterfly.",
    "vegetable": "Borrage.",
    "mineral": "Azure Stone or Lapis Lazuli.",
    "description": "Ultramarine Blue, is a mixture of equal parts of [Berlin] and [azure blue]."
  },
  {
    "group": "Blues",
    "name": "Flax-Flower Blue",
    "hex": "#6f88af",
    "animal": "Light Parts of the Margin of the Wings of Devil's Butterfly.",
    "vegetable": "Flax flower.",
    "mineral": "Blue Copper Ore",
    "description": "Flax-Flower Blue, is [Berlin blue], with a slight tinge of [ultramarine blue]."
  },
  {
    "group": "Blues",
    "name": "Berlin Blue",
    "hex": "#7994b5",
    "animal": "Wing Feathers of Jay.",
    "vegetable": "Hepatica.",
    "mineral": "Blue Sapphire.",
    "description": "Berlin Blue, is the pure, or characteristic colour of Werner."
  },
  {
    "group": "Blues",
    "name": "Verditter Blue",
    "hex": "#6fb5a8",
    "animal": "",
    "vegetable": "",
    "mineral": "Lenticular Ore.",
    "description": "Verditter Blue, is [Berlin blue], with a small portion of [verdigris green]."
  },
  {
    "group": "Blues",
    "name": "Greenish Blue",
    "hex": "#719ba2",
    "animal": "",
    "vegetable": "Great Fennel Flower.",
    "mineral": "Turquoise or Flour Spar.",
    "description": "Greenish Blue, the sky blue of Werner, is composed of [Berlin blue], [white], and a little [emerald green]."
  },
  {
    "group": "Blues",
    "name": "Greyish Blue",
    "hex": "#8aa1a6",
    "animal": "Back of blue Titmouse",
    "vegetable": "Small Fennel Flower.",
    "mineral": "Iron Earth.",
    "description": "Greyish Blue, the smalt blue of Werner, is composed of [Berlin blue], with [white], a small quantity of [grey], and a hardly perceptible portion of [red]."
  },
  {
    "group": "Purples",
    "name": "Bluish Lilac Purple",
    "hex": "#d0d5d3",
    "animal": "Male of the Lebellula Depressa.",
    "vegetable": "Blue Lilac.",
    "mineral": "Lepidolite.",
    "description": "Bluish Lilac Purple, is [bluish purple] and [white]."
  },
  {
    "group": "Purples",
    "name": "Bluish Purple",
    "hex": "#8590ae",
    "animal": "Papilio Argeotus. Azure Blue Butterfly.",
    "vegetable": "Parts of White and Purple Crocus.",
    "mineral": "",
    "description": "Bluish Purple, is composed of about equal parts of [Berlin blue] and [carmine red]."
  },
  {
    "group": "Purples",
    "name": "Violet Purple",
    "hex": "#3a2f52",
    "animal": "",
    "vegetable": "Purple Aster.",
    "mineral": "Amethyst.",
    "description": "Violet Purple, violet blue of Werner, is [Berlin blue] mixed with [red], and a little [brown]."
  },
  {
    "group": "Purples",
    "name": "Pansy Purple",
    "hex": "#39334a",
    "animal": "Chrysomela Goettingensis.",
    "vegetable": "Sweet-scented Violet.",
    "mineral": "Derbyshire Spar.",
    "description": "Pansy Purple, is [indigo blue], with [carmine red], and a slight tinge of [raven black]."
  },
  {
    "group": "Purples",
    "name": "Campanula Purple",
    "hex": "#6c6d94",
    "animal": "",
    "vegetable": "Canterbury Bell. Campanula Persicifolia.",
    "mineral": "Fluor Spar.",
    "description": "Campanula Purple, is [ultramarine blue] and [carmine red], about equal parts of each: it is the characteristic colour."
  },
  {
    "group": "Purples",
    "name": "Imperial Purple",
    "hex": "#584c77",
    "animal": "",
    "vegetable": "Deep Parts of Flower of Saffron Crocus.",
    "mineral": "Fluor Spar.",
    "description": "Imperial Purple, is [azure] and [indigo blue], with [carmine red], about equal parts of each."
  },
  {
    "group": "Purples",
    "name": "Auricula Purple",
    "hex": "#533552",
    "animal": "Egg of largest Bluebottle. or Flesh Fly.",
    "vegetable": "Largest Purple Auricula.",
    "mineral": "Fluor Spar.",
    "description": "Auricula Purple, is [plum purple], with [indigo blue] and much [carmine red]."
  },
  {
    "group": "Purples",
    "name": "Plum Purple",
    "hex": "#463759",
    "animal": "",
    "vegetable": "Plum.",
    "mineral": "Fluor Spar.",
    "description": "Plum Purple, the plum blue of Werner, is composed of [Berlin blue], with much [carmine red], a very little [brown], and an almost imperceptible portion of [black]."
  },
  {
    "group": "Purples",
    "name": "Red Lilac Purple",
    "hex": "#bfbac0",
    "animal": "Light Spots of the upper Wings of Peacock Butterfly.",
    "vegetable": "Red Lilac. Pale Purple Primrose.",
    "mineral": "Lepidolite.",
    "description": "Red Lilac Purple, is [campanula purple], with a considerable portio of [snow white], and a very little [carmine red]."
  },
  {
    "group": "Purples",
    "name": "Lavender Purple",
    "hex": "#77747f",
    "animal": "Light Parts of Spots on the under Wings of Peakcock Butterfly.",
    "vegetable": "Dried Lavender Flowers.",
    "mineral": "Porcelain Jasper.",
    "description": "Lavender Purple, the lavender blue of Werner, is composed of [blue], [red], and a little [brown] and [grey]."
  },
  {
    "group": "Purples",
    "name": "Pale Blackish Purple",
    "hex": "#4a475c",
    "animal": "",
    "vegetable": "",
    "mineral": "Porcelain Jasper.",
    "description": "Pale Bluish Purple, is [lavender purple] mixed with a little [red] and [black].†"
  },
  {
    "group": "Greens",
    "name": "Celadine Green",
    "hex": "#b8bfaf",
    "animal": "Phalœna. Margaritaria.",
    "vegetable": "Back of Tussilage Leaves.",
    "mineral": "Beryl.",
    "description": "Celindine Green, is composed of [verdigris green] and [ash grey].‡"
  },
  {
    "group": "Greens",
    "name": "Mountain Green",
    "hex": "#b2b599",
    "animal": "Phalœna Viridaria.",
    "vegetable": "Thick leaved Cudweed. Silver-leaved Almond.",
    "mineral": "Actynolite Beryl.",
    "description": "Mountain Green, is composed of [emerald green], with much [blue] and a little [yellowish grey]."
  },
  {
    "group": "Greens",
    "name": "Leek Green",
    "hex": "#979c84",
    "animal": "",
    "vegetable": "Sea Kale. Leaves of Leeks in Winter.",
    "mineral": "Actynolite Prase.",
    "description": "Leek Green, is composed of [emerald green], with a little [brown] and [bluish grey]."
  },
  {
    "group": "Greens",
    "name": "Blackish Green",
    "hex": "#5d6161",
    "animal": "Elytra of Meloe Violaceus.",
    "vegetable": "Dark Streaks on Leaves of Cayenne Pepper.",
    "mineral": "Serpentine.",
    "description": "Blackish Green, is [grass green] mixed with a considerable portion of [black]."
  },
  {
    "group": "Greens",
    "name": "Verdigris Green",
    "hex": "#61ac86",
    "animal": "Tail of small Long-tailed Green Parrot.",
    "vegetable": "",
    "mineral": "Copper Green.",
    "description": "Verdigris Green, is composed of [emerald green], much [Berlin blue], and a little [white]."
  },
  {
    "group": "Greens",
    "name": "Bluish Green",
    "hex": "#a4b6a7",
    "animal": "Egg of Thrush.",
    "vegetable": "Under Disk of Wild Rose Leaves.",
    "mineral": "Beryl.",
    "description": "Bluish Green, is composed of [Berlin blue], and a little [lemon yellow] and [greyish white]."
  },
  {
    "group": "Greens",
    "name": "Apple Green",
    "hex": "#adba98",
    "animal": "Under Side of Wings of Green Broom Moth.",
    "vegetable": "",
    "mineral": "Crysoprase.",
    "description": "Apple Green, is [emerald green] mixed with a little [greyish white]."
  },
  {
    "group": "Greens",
    "name": "Emerald Green",
    "hex": "#93b778",
    "animal": "Beauty Spot on Wing of Teal Drake.",
    "vegetable": "",
    "mineral": "Emerald.",
    "description": "Emerald Green, is the characteristic colour of Werner; he gives no description of the component parts of any of the characteristic colours; it is composed of about equal parts of [Berlin blue] and [gamboge yellow]."
  },
  {
    "group": "Greens",
    "name": "Grass Green",
    "hex": "#7d8c55",
    "animal": "Scarabœus Nobilis.",
    "vegetable": "General Appearance of Grass Fields. Sweet Sugar Pear",
    "mineral": "Uran Mica.",
    "description": "Grass Green, is [emerald green] mixed with a little [lemon yellow]."
  },
  {
    "group": "Greens",
    "name": "Duck Green",
    "hex": "#33431e",
    "animal": "Neck of Mallard",
    "vegetable": "Upper Disk of Yew Leaves.",
    "mineral": "Ceylanite",
    "description": "Duck Green, W. a new colour of Werner's, added since the publication of his nomenclature; it is composed of [emerald green], with a little [indigo blue], much [gamboge yellow], and a very little [carmine red]."
  },
  {
    "group": "Greens",
    "name": "Sap Green",
    "hex": "#7c8635",
    "animal": "Under Side of lower Wings of Orange tip Butterfly",
    "vegetable": "Upper Disk of Leaves of woody Night Shade.",
    "mineral": "",
    "description": "Sap Green, is [emerald green], with much [saffron yellow], and a little [chestnut brown]."
  },
  {
    "group": "Greens",
    "name": "Pistachio Green",
    "hex": "#8e9849",
    "animal": "Neck of Eider Drake",
    "vegetable": "Ripe Pound Pear. Hypman like Saxifrage.",
    "mineral": "Crysolite.",
    "description": "Pistachio Green, is [emerald green] mixed with a little [lemon yellow], and a small quantity of [brown]."
  },
  {
    "group": "Greens",
    "name": "Asparagus Green",
    "hex": "#c2c190",
    "animal": "Brimstone Butterfly.",
    "vegetable": "Veriegated Horse-Shoe Geranium.",
    "mineral": "Beryl.",
    "description": "Asparagus Green, is [pistachio green], mixed with much [greyish white]."
  },
  {
    "group": "Greens",
    "name": "Olive Green",
    "hex": "#67765b",
    "animal": "",
    "vegetable": "Foliage of Lignum vitœ.",
    "mineral": "Epidote Olvene Ore.",
    "description": "Olive Green, is [grass green] mixed with much [brown]."
  },
  {
    "group": "Greens",
    "name": "Oil Green",
    "hex": "#ab924b",
    "animal": "Animal and Shell of common Water Snail.",
    "vegetable": "Nonpareil Apple from the Wall.",
    "mineral": "Beryl.",
    "description": "Oil Green, is [emerald green] mixed with [lemon yellow], [chestnut brown], and [yellowish grey]."
  },
  {
    "group": "Greens",
    "name": "Siskin Green",
    "hex": "#c8c76f",
    "animal": "Siskin.",
    "vegetable": "Ripe Coalmar Pear. Irish Pitcher Apple.",
    "mineral": "Uran Mica.",
    "description": "Siskin Green, is [emerald green] mixed with much [lemon yellow], and a little [yellowish white]."
  },
  {
    "group": "Yellows",
    "name": "Sulphur Yellow",
    "hex": "#ccc050",
    "animal": "Yellow Parts of large Dragon Fly.",
    "vegetable": "Various Coloured Snap dragon.",
    "mineral": "Sulphur",
    "description": "Sulphur Yellow, is [lemon yellow] mixed with [emerald green] and [white]."
  },
  {
    "group": "Yellows",
    "name": "Primrose Yellow",
    "hex": "#ebdd99",
    "animal": "Pale Canary Bird.",
    "vegetable": "Wild Primrose",
    "mineral": "Pale coloured Sulphur.",
    "description": "Primrose Yellow, is [gamboge yellow] mixed with a little [sulphur yellow], and much [snow white]."
  },
  {
    "group": "Yellows",
    "name": "Wax Yellow",
    "hex": "#ab9649",
    "animal": "Larva of large Water Beetle.",
    "vegetable": "Greenish Parts of Nonpareil Apple.",
    "mineral": "Semi Opal.",
    "description": "Wax Yellow, is composed of [lemon yellow], [reddish brown], and a little [ash grey]."
  },
  {
    "group": "Yellows",
    "name": "Lemon Yellow",
    "hex": "#dbc364",
    "animal": "Large Wasp or Hornet",
    "vegetable": "Shrubby Goldylocks.",
    "mineral": "Yellow Orpiment.",
    "description": "Lemon Yellow, the characteristic colour of the yellow series of Werner, the colour of ripe lemons; W. it is found to be a mixture of [gamboge yellow] and a little [ash grey]: being a mixed colour, it cannot be adopted as the characteristic colour; the characteristic colours of the blues, reds, and yellows ought to be pure and free from all intermixture with any other colour; gamboge, as the purest yellow colour, is adopted instead of lemon yellow, as the characteristic colour of the yellows."
  },
  {
    "group": "Yellows",
    "name": "Gamboge Yellow",
    "hex": "#e6d058",
    "animal": "Wings of Goldfinch. Canary Bird.",
    "vegetable": "Yellow Jasmine.",
    "mineral": "High coloured Sulphur.",
    "description": "Gamboge Yellow, is the characteristic colour."
  },
  {
    "group": "Yellows",
    "name": "Kings Yellow",
    "hex": "#ead665",
    "animal": "Head of Golden Pheasant.",
    "vegetable": "Yellow tulip. Cinque foil.",
    "mineral": "",
    "description": "Kings Yellow, is [gamboge yellow], with a small portion of [saffron yellow]."
  },
  {
    "group": "Yellows",
    "name": "Saffron Yellow",
    "hex": "#d09b2c",
    "animal": "Tail Coverts of Golden Pheasant.",
    "vegetable": "Anhers of Saffron Grocus.",
    "mineral": "",
    "description": "Saffron Yellow, is [gamboge yellow], with [gallstone yellow], about equal parts of each."
  },
  {
    "group": "Yellows",
    "name": "Gallstone Yellow",
    "hex": "#a36629",
    "animal": "Gallstones.",
    "vegetable": "Marigold Apple.",
    "mineral": "",
    "description": "Gallstone Yellow, is [gamboge yellow], with a small quantity of [Dutch orange], and a minute portion of [honey yellow]."
  },
  {
    "group": "Yellows",
    "name": "Honey Yellow",
    "hex": "#a77d35",
    "animal": "Lower Parts of Neck of Bird of Paradise.",
    "vegetable": "",
    "mineral": "Fluor Spar.",
    "description": "Honey Yellow, is [sulphur yellow] mixed with [chestnut brown]."
  },
  {
    "group": "Yellows",
    "name": "Straw Yellow",
    "hex": "#f0d696",
    "animal": "Polar Bear.",
    "vegetable": "Oat Straw.",
    "mineral": "Schorlite. Calamine.",
    "description": "Straw Yellow, is [sulphur yellow] mixed with much [greyish white] and a little [ochre yellow]."
  },
  {
    "group": "Yellows",
    "name": "Wine Yellow",
    "hex": "#d7c485",
    "animal": "Body of Silk Moth.",
    "vegetable": "White Currants.",
    "mineral": "Saxon Topaz.",
    "description": "Wine Yellow, is [sulphur yellow] mixed with [reddish brown] and [grey], with much [snow white]."
  },
  {
    "group": "Yellows",
    "name": "Sienna Yellow",
    "hex": "#f1d28c",
    "animal": "Vent Parts of Tail of Bird of Paradise.",
    "vegetable": "Stamina of Honey-suckle.",
    "mineral": "Pale Brazilian Topaz.",
    "description": "Sienna Yellow, is [primrose yellow], with a little [ochre yellow]."
  },
  {
    "group": "Yellows",
    "name": "Ochre Yellow",
    "hex": "#efcc83",
    "animal": "Vent Coverts of Red Start.",
    "vegetable": "",
    "mineral": "Porcelain Jasper.",
    "description": "Ochre Yellow, is [sienna yellow], with a litlte light [chestnut brown]."
  },
  {
    "group": "Yellows",
    "name": "Cream Yellow",
    "hex": "#f3daa7",
    "animal": "Breast of Teal Drake.",
    "vegetable": "",
    "mineral": "Porcelain Jasper.",
    "description": "Cream Yellow, is [ochre yellow] mixed with a little [white] and a very small quantity of [Dutch orange]."
  },
  {
    "group": "Oranges",
    "name": "Dutch Orange",
    "hex": "#dfa837",
    "animal": "Crest of Golden crested Wren.",
    "vegetable": "Common Marigold. Seedpod of Spindle-tree.",
    "mineral": "Streak of Red Orpiment.",
    "description": "Dutch Orange, the orange yellow of Werner, is [gamboge yellow], with [carmine red]."
  },
  {
    "group": "Oranges",
    "name": "Buff Orange",
    "hex": "#ebbc71",
    "animal": "Streak from the Eye of the King Fisher.",
    "vegetable": "Stamina of the large White Cistus.",
    "mineral": "Natrolite.",
    "description": "Buff Orange, is [sienna yellow], with a little [Dutch Orange]."
  },
  {
    "group": "Oranges",
    "name": "Orpiment Orange",
    "hex": "#d17c3f",
    "animal": "The Neck Ruff of the Golden Pheasant. Belly of the Warty Newt.",
    "vegetable": "Indian Cress.",
    "mineral": "",
    "description": "Orpiment Orange, the characteristic colour, is about equal parts of [gamboge yellow] and [arterial blood red]."
  },
  {
    "group": "Oranges",
    "name": "Brownish Orange",
    "hex": "#92462f",
    "animal": "Eyes of the largest Flesh Fly.",
    "vegetable": "Style of the Orange Lily.",
    "mineral": "Dark Brazilian Topaz.",
    "description": "Brownish Orange, is [orpiment orange], with a little [hyacinth red], and a small quantity of light [chestnut brown]."
  },
  {
    "group": "Oranges",
    "name": "Reddish Orange",
    "hex": "#be7249",
    "animal": "Lower Wings of Tyger Moth.",
    "vegetable": "Hemimeris. Buff Hibiscus.",
    "mineral": "",
    "description": "Reddish Orange, is [buff orange] mixed with a considerable portion of [tile red]."
  },
  {
    "group": "Oranges",
    "name": "Deep Reddish Orange",
    "hex": "#bb603c",
    "animal": "Gold Fish lustre abstracted.",
    "vegetable": "Scarlet Leadington Apple.",
    "mineral": "",
    "description": "Deep Reddish Orange, is [Dutch orange] mixed with much [scarlet red]."
  },
  {
    "group": "Reds",
    "name": "Tile Red",
    "hex": "#c76b4a",
    "animal": "Breast of the Cock Bullfinch.",
    "vegetable": "Shrubby Pimpernel.",
    "mineral": "Porcelain Jasper.",
    "description": "Tile Red, is [hyacinth red] mixed with much [greyish white], and a small portion of [scarlet red]."
  },
  {
    "group": "Reds",
    "name": "Hyacinth Red",
    "hex": "#a75536",
    "animal": "Red Spots of the Lygœns Apterus Fly.",
    "vegetable": "Red on the golden Rennette Apple.",
    "mineral": "Hyacinth.",
    "description": "Hyacinth Red, is [scarlet red], with [lemon yellow] and a minute proportion of [brown]."
  },
  {
    "group": "Reds",
    "name": "Scarlet Red",
    "hex": "#b63e36",
    "animal": "Scarlet Ibis or Curlew. Mark on the Head of Red Grouse.",
    "vegetable": "Large red Oriental Poppy. Red Parts of red and black Indian Peas.",
    "mineral": "Light red Cinnaber.",
    "description": "Scarlet Red, is [arterial blood red], with a little [gamboge yellow]."
  },
  {
    "group": "Reds",
    "name": "Vermilion Red",
    "hex": "#b5493a",
    "animal": "Red Coral.",
    "vegetable": "Love Apple.",
    "mineral": "Cinnaber.",
    "description": "Vermilion Red, is [scarlet red], with a minute portion of [brownish red]."
  },
  {
    "group": "Reds",
    "name": "Aurora Red",
    "hex": "#cd6d57",
    "animal": "Vent convers of Pied Wood-Pecker.",
    "vegetable": "Red on the Naked Apple.",
    "mineral": "Red Orpiment.",
    "description": "Aurora Red, is [tile red], with a little [arterial blood red], and a slight tinge of [carmine red]."
  },
  {
    "group": "Reds",
    "name": "Arterial Blood Red",
    "hex": "#711518",
    "animal": "Head of the Cock Gold-finch.",
    "vegetable": "Corn Poppy Cherry.",
    "mineral": "",
    "description": "Aterial Blood Red, is the characteristic colour of the red series."
  },
  {
    "group": "Reds",
    "name": "Flesh Red",
    "hex": "#e9c49d",
    "animal": "Human Skin.",
    "vegetable": "Larkspur.",
    "mineral": "Heavy Spar. Limestone.",
    "description": "Flesh Red, is [rose red] mixed with [tile red] and a little [white]."
  },
  {
    "group": "Reds",
    "name": "Rose Red",
    "hex": "#eedac3",
    "animal": "",
    "vegetable": "Common Garden Rose.",
    "mineral": "Figure Stone.",
    "description": "Rose Red, is [carmine red], with a great quantity of [snow white], and a very small portion of [cochineal red]."
  },
  {
    "group": "Reds",
    "name": "Peach Blossom Red",
    "hex": "#eecfbf",
    "animal": "",
    "vegetable": "Peach Blossom.",
    "mineral": "Red Cobolt Ore.",
    "description": "Peach Blossom Red, is [lake red] mixed with much [white]."
  },
  {
    "group": "Reds",
    "name": "Carmine Red",
    "hex": "#ce536b",
    "animal": "",
    "vegetable": "Raspberry. Cocks Comb. Carnation Pink.",
    "mineral": "Oriental Ruby.",
    "description": "Carmine Red, the characteristic colour of Werner is [lake red], with a little [arterial blood red]."
  },
  {
    "group": "Reds",
    "name": "Lake Red",
    "hex": "#b74a70",
    "animal": "",
    "vegetable": "Red Tulip. Rose Officinalus.",
    "mineral": "Spinel.",
    "description": "Lake Red, the crimson red of Werner, is [arterial blood red], with a portion of [Berlin blue]."
  },
  {
    "group": "Reds",
    "name": "Crimson Red",
    "hex": "#b7757c",
    "animal": "",
    "vegetable": "",
    "mineral": "Precious Garnet.",
    "description": "Crimson Red, is [carmine red], with a little [indigo blue]."
  },
  {
    "group": "Reds",
    "name": "Purplish Red",
    "hex": "#612741",
    "animal": "Outside of Quills of Terico.",
    "vegetable": "Dark Crimson Officinal Garden Rose.",
    "mineral": "Precious Garnet.",
    "description": "Purplish Red, the columbine red of Werner, is [carmine red], with a little [Berlin blue], and a small portion of [indigo blue]."
  },
  {
    "group": "Reds",
    "name": "Cochineal Red",
    "hex": "#7a4848",
    "animal": "",
    "vegetable": "Under Disk of decayed Leaves of None-so-pretty.",
    "mineral": "Dark Cinnaber",
    "description": "Cochineal Red, is [lake red] mixed with [bluish grey]."
  },
  {
    "group": "Reds",
    "name": "Veinous Blood Red",
    "hex": "#3f3033",
    "animal": "Veinous Blood.",
    "vegetable": "Musk Flower, or dark Purple Scabious.",
    "mineral": "Pyrope.",
    "description": "Veinous Blood Red, is [carmine red] mixed with [brownish black]."
  },
  {
    "group": "Reds",
    "name": "Brownish Purple Red",
    "hex": "#8d746f",
    "animal": "",
    "vegetable": "Flower of deadly Nightshade.",
    "mineral": "Red Antimony Ore.",
    "description": "Brownish Purple Red, the cherry red of Werner, is [lake red] mixed with [brownish black] and a small portion of [grey]."
  },
  {
    "group": "Reds",
    "name": "Chocolate Red",
    "hex": "#4d3635",
    "animal": "Breast of Bird of Paradise.",
    "vegetable": "Brown Disk of common Marigold.",
    "mineral": "",
    "description": "Chocoloate Red is [veinous blood red] mixed with a little [brownish red]."
  },
  {
    "group": "Reds",
    "name": "Brownish Red",
    "hex": "#6e3b31",
    "animal": "Mark on Throat of Red-throated Diver.",
    "vegetable": "",
    "mineral": "Iron Flint.",
    "description": "Brownish Red, is [chocolate red] mixed with [hyacinth red] and a little [chestnut brown]."
  },
  {
    "group": "Browns",
    "name": "Deep Orange-coloured Brown",
    "hex": "#864735",
    "animal": "Head of Pochard. Wing coverts of Sheldrake.",
    "vegetable": "Female Spike of Catstail Reed.",
    "mineral": "",
    "description": "Deep Orange-coloured Brown, is [chestnut brown], with a little [reddish brown], and a small quantity of [orange brown]."
  },
  {
    "group": "Browns",
    "name": "Deep Reddish Brown",
    "hex": "#553d3a",
    "animal": "Breast of Pochard, and Neck of Teal Drake.",
    "vegetable": "Dead Leaves of green Panic Grass.",
    "mineral": "Brown Blende.",
    "description": "Deep Reddish Brown, is [chestnut brown] with a little [chocolate red]."
  },
  {
    "group": "Browns",
    "name": "Umber Brown",
    "hex": "#613936",
    "animal": "Moor Buzzard.",
    "vegetable": "Disk of Rubeckia.",
    "mineral": "",
    "description": "Umber Brown, is [chestnut brown], with a little [blackish brown]."
  },
  {
    "group": "Browns",
    "name": "Chestnut Brown",
    "hex": "#7a4b3a",
    "animal": "Neck and Breast of Red Grouse.",
    "vegetable": "Chestnuts.",
    "mineral": "Egyptian Jasper.",
    "description": "Chestnut Brown, the characteristic colour of the browns of Werner's series, W. is [deep reddish brown] and [yellowish brown]."
  },
  {
    "group": "Browns",
    "name": "Yellowish Brown",
    "hex": "#946943",
    "animal": "Light Brown Spots on Guinea-Pig. Breast of a Hoopoe.",
    "vegetable": "",
    "mineral": "Iron Flint, and common Jasper.",
    "description": "Yellowish Brown, is [chestnut brown] mixed with a considerable portion of [lemon yellow]."
  },
  {
    "group": "Browns",
    "name": "Wood Brown",
    "hex": "#c39e6d",
    "animal": "Common Weasel. Light parts of Feathers on the Back of the Snipe.",
    "vegetable": "Hazel Nuts.",
    "mineral": "Mountain Wood.",
    "description": "Wood Brown, is [yellowish brown] mixed with [ash grey]."
  },
  {
    "group": "Browns",
    "name": "Liver Brown",
    "hex": "#513e32",
    "animal": "Middle Parts of Feathers of Hen Pheasant, and Wing coverts of Gosbeak.",
    "vegetable": "",
    "mineral": "Semi Opal.",
    "description": "Liver Brown, is [chestnut brown] mixed with a little [black] and [olive green]."
  },
  {
    "group": "Browns",
    "name": "Hair Brown",
    "hex": "#8b7859",
    "animal": "Head of Pintail Duck",
    "vegetable": "",
    "mineral": "Wood Tin.",
    "description": "Hair Brown, is [clove brown] mixed with [ash grey]."
  },
  {
    "group": "Browns",
    "name": "Broccoli Brown",
    "hex": "#9b856b",
    "animal": "Head of Black headed Gull.",
    "vegetable": "",
    "mineral": "Zircon.",
    "description": "Broccoli Brown, is [clove brown] mixed with [ash grey], and a small tinge of [red]."
  },
  {
    "group": "Browns",
    "name": "Clove Brown",
    "hex": "#766051",
    "animal": "Head and Neck of Male Kestril.",
    "vegetable": "Stems of Black Currant Bush.",
    "mineral": "Axinite, Rok Cristal.",
    "description": "Olive Brown, is [ash grey] mixed with a little [blue], [red], and [chestnut brown].§"
  },
  {
    "group": "Browns",
    "name": "Blackish Brown",
    "hex": "#453b32",
    "animal": "Stormy Petril. Wing Coverts of black Cock. Forehead of Foumart.",
    "vegetable": "",
    "mineral": "Mineral Pitch.",
    "description": "Blackish Brown, is composed of [chestnut brown] and [black]."
  }
];

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
}