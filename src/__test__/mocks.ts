import { BJCPStyle } from "../beer-style-types";

export const mockStyle: BJCPStyle = {
  ['@_id']: '1A',
  name: 'German Bier',
  stats: {
    abv: { low: 3.4, high: 6.8 },
    ibu: { low: 25, high: 40 },
    og: { low: 1.05, high: 1.065 },
    fg: { low: 1.01, high: 1.015 },
    srm: { low: 3, high: 8 },
  },
  impression: 'good beer for judging',
  aroma: 'smells good',
  appearance: 'pale and foamy',
  flavor: 'tasty beer',
  mouthfeel: 'full-bodied and fizzy',
  comments: 'interesting fact about this beer',
  history: 'has its roots in Germany',
  ingredients: 'malt + hops + water + yeast',
  comparison: 'different from this other beer in this subtle way',
  examples: 'something from Germany, and an Americanized version',
  tags: ['bottom-fermented', 'central-europe', 'pale-color'],
};

export const mockStyleList: BJCPStyle[] = [
  {
    "@_id": "1A",
    "name": "American Light Lager",
    "aroma": "Low to no malt aroma, although it can be perceived as grainy, sweet, or corn-like if present. Hop aroma is light to none, with a spicy or floral hop character if present. While a clean fermentation character is desirable, a light amount of yeast character (particularly a light apple fruitiness) is not a fault. Light DMS is not a fault.",
    "appearance": "Very pale straw to pale yellow color. White, frothy head seldom persists. Very clear.",
    "flavor": "Relatively neutral palate with a crisp and dry finish and a low to very low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Hop flavor ranges from none to low levels, and can have a floral, spicy, or herbal quality (although rarely strong enough to detect). Low to very low hop bitterness. Balance may vary from slightly malty to slightly bitter, but is relatively close to even. High levels of carbonation may accentuate the crispness of the dry finish. Clean lager fermentation character.",
    "mouthfeel": "Very light (sometimes watery) body. Very highly carbonated with slight carbonic bite on the tongue.",
    "impression": "Highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst quenching.",
    "comments": "Designed to appeal to as broad a range of the general public as possible. Strong flavors are a fault.",
    "history": "Coors briefly made a light lager in the early 1940s. Modern versions were first produced by Rheingold in 1967 to appeal to diet-conscious drinkers, but only became popular starting in 1973 after Miller Brewing acquired the recipe and marketed the beer heavily to sports fans with the \"tastes great, less filling\" campaign. Beers of this genre became the largest sellers in the United States in the 1990s.",
    "ingredients": "Two- or six-row barley with high percentage (up to 40%) of rice or corn as adjuncts. Additional enzymes can further lighten the body and lower carbohydrates.",
    "comparison": "A lighter-bodied, lower-alcohol, lower calorie version of an American Lager. Less hop character and bitterness than a Leichtbier.",
    "examples": "Bud Light, Coors Light, Keystone Light, Michelob Light, Miller Lite, Old Milwaukee Light",
    "tags": [
      "session-strength",
      "pale-color",
      "bottom-fermented",
      "lagered",
      "north-america",
      "traditional-style",
      "pale-lager-family",
      "balanced"
    ],
    "stats": {
      "ibu": {
        "low": 8,
        "high": 12
      },
      "og": {
        "low": 1.028,
        "high": 1.04
      },
      "fg": {
        "low": 0.998,
        "high": 1.008
      },
      "srm": {
        "low": 2,
        "high": 3
      },
      "abv": {
        "low": 2.8,
        "high": 4.2
      }
    }
  },
  {
    "@_id": "1B",
    "name": "American Lager",
    "aroma": "Low to no malt aroma, although it can be perceived as grainy, sweet or corn-like if present. Hop aroma may range from none to a light, spicy or floral hop presence. While a clean fermentation character is desirable, a light amount of yeast character (particularly a light apple character) is not a fault. Light DMS is also not a fault.",
    "appearance": "Very pale straw to medium yellow color. White, frothy head seldom persists. Very clear.",
    "flavor": "Relatively neutral palate with a crisp and dry finish and a moderately-low to low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Hop flavor ranges from none to moderately-low levels, and can have a floral, spicy, or herbal quality (although often not strong enough to distinguish). Hop bitterness at low to medium-low level. Balance may vary from slightly malty to slightly bitter, but is relatively close to even. High levels of carbonation may accentuate the crispness of the dry finish. Clean lager fermentation character.",
    "mouthfeel": "Low to medium-low body. Very highly carbonated with slight carbonic bite on the tongue.",
    "impression": "A very pale, highly-carbonated, light-bodied, well-attenuated lager with a very neutral flavor profile and low bitterness. Served very cold, it can be a very refreshing and thirst quenching drink.",
    "comments": "Strong flavors are a fault. Often what non-craft beer drinkers expect to be served if they order beer in the United States. May be marketed as Pilsner beers outside of Europe, but should not be confused with traditional examples.",
    "history": "Although German immigrants had brewed traditional Pilsner-inspired lager beer in the United States since the mid-late 1800s, the modern American lager style was heavily influenced by Prohibition and World War II. Surviving breweries consolidated, expanded distribution, and heavily promoted a beer style that was appealing to a broad range of the population. Became the dominant beer style for many decades, and spawning many international rivals who would develop similarly bland products for the mass market supported by heavy advertising.",
    "ingredients": "Two- or six-row barley with high percentage (up to 40%) of rice or corn as adjuncts.",
    "comparison": "Stronger, more flavor and body than a Light American Lager. Less bitterness and flavor than an International Lager. Significantly less flavor, hops, and bitterness than traditional European Pilsners.",
    "examples": "Budweiser, Coors Original, Grain Belt Premium Lager, Miller High Life, Pabst Blue Ribbon, Special Export",
    "tags": [
      "standard-strength",
      "pale-color",
      "bottom-fermented",
      "lagered",
      "north-america",
      "traditional-style",
      "pale-lager-family",
      "balanced"
    ],
    "stats": {
      "ibu": {
        "low": 8,
        "high": 18
      },
      "og": {
        "low": 1.04,
        "high": 1.05
      },
      "fg": {
        "low": 1.004,
        "high": 1.01
      },
      "srm": {
        "low": 2,
        "high": 4
      },
      "abv": {
        "low": 4.2,
        "high": 5.3
      }
    }
  },
  {
    "@_id": "1C",
    "name": "Cream Ale",
    "aroma": "Medium-low to low malt notes, with a sweet, corn-like aroma. Low levels of DMS are allowable, but are not required. Hop aroma medium low to none, and can be of any variety although floral, spicy, or herbal notes are most common. Overall, a subtle aroma with neither hops nor malt dominating. Low fruity esters are optional.",
    "appearance": "Pale straw to moderate gold color, although usually on the pale side. Low to medium head with medium to high carbonation. Fair head retention. Brilliant, sparkling clarity.",
    "flavor": "Low to medium-low hop bitterness. Low to moderate maltiness and sweetness, varying with gravity and attenuation. Usually well-attenuated. Neither malt nor hops dominate the palate. A low to moderate corny flavor is commonly found, as is light DMS (optional). Finish can vary from somewhat dry to faintly sweet. Low fruity esters are optional. Low to medium-low hop flavor (any variety, but typically floral, spicy, or herbal).",
    "mouthfeel": "Generally light and crisp, although body can reach medium. Smooth mouthfeel with medium to high attenuation; higher attenuation levels can lend a \"thirst quenching\" quality. High carbonation.",
    "impression": "A clean, well-attenuated, flavorful American \"lawnmower\" beer. Easily drinkable and refreshing, with more character than typical American lagers.",
    "comments": "Pre-prohibition Cream Ales were slightly stronger, hoppier (including some dry hopping) and more bitter (25-30+ IBUs). These versions should be entered in the historical category. Most commercial examples are in the 1.050–1.053 OG range, and bitterness rarely rises above 20 IBUs.",
    "history": "A sparkling or present-use ale that existed in the 1800s and survived prohibition. An ale version of the American lager style. Produced by ale brewers to compete with lager brewers in Canada and the Northeast, Mid-Atlantic, and Midwest states. Originally known as sparkling or present use ales, lager strains were (and sometimes still are) used by some brewers, but were not historically mixed with ale strains. Many examples are kräusened to achieve carbonation. Cold conditioning isn't traditional, although modern brewers sometimes use it.",
    "ingredients": "American ingredients most commonly used. A grain bill of six-row malt, or a combination of six-row and North American two-row, is common. Adjuncts can include up to 20% maize in the mash, and up to 20% glucose or other sugars in the boil. Any variety of hops can be used for bittering and finishing.",
    "comparison": "Similar to a Standard American Lager, but with more character.",
    "examples": "Genesee Cream Ale, Liebotschaner Cream Ale, Little Kings Cream Ale, New Glarus Spotted Cow, Old Style, Sleeman Cream Ale",
    "tags": [
      "standard-strength",
      "pale-color",
      "any-fermentation",
      "north-america",
      "traditional-style",
      "pale-ale-family",
      "balanced"
    ],
    "stats": {
      "ibu": {
        "low": 8,
        "high": 20
      },
      "og": {
        "low": 1.042,
        "high": 1.055
      },
      "fg": {
        "low": 1.006,
        "high": 1.012
      },
      "srm": {
        "low": 2.5,
        "high": 5
      },
      "abv": {
        "low": 4.2,
        "high": 5.6
      }
    }
  },
  {
    "@_id": "1D",
    "name": "American Wheat Beer",
    "aroma": "Low to moderate grainy, bready, or doughy wheat character. A light to moderate malty sweetness is acceptable. Esters can be moderate to none, although should reflect relatively neutral yeast strains; banana is inappropriate. Hop aroma may be low to moderate, and can have a citrusy, spicy, floral, or fruity character. No clove phenols.",
    "appearance": "Usually pale yellow to gold. Clarity may range from brilliant to hazy with yeast approximating the German weissbier style of beer. Big, long-lasting white head.",
    "flavor": "Light to moderately-strong bready, doughy, or grainy wheat flavor, which can linger into the finish. May have a moderate malty sweetness or finish quite dry. Low to moderate hop bitterness, which sometimes lasts into the finish. Balance is usually even, but may be slightly bitter. Low to moderate hop flavor (citrusy, spicy, floral, or fruity). Esters can be moderate to none, but should not include banana. No clove phenols. May have a slightly crisp finish.",
    "mouthfeel": "Medium-light to medium body. Medium-high to high carbonation. Slight creaminess is optional; wheat beers sometimes have a soft, ‘fluffy' impression.",
    "impression": "Refreshing wheat beers that can display more hop character and less yeast character than their German cousins. A clean fermentation character allows bready, doughy, or grainy wheat flavors to be complemented by hop flavor and bitterness rather than yeast qualities.",
    "comments": "Different variations exist, from an easy-drinking fairly sweet beer to a dry, aggressively-hopped beer with a strong wheat flavor. American rye beers should be entered in the Alternative Fermentables specialty category.",
    "history": "An American craft beer adaptation of the German weissbier style using a cleaner yeast and more hops, first widely popularized by Widmer in the mid-1980s.",
    "ingredients": "Clean American ale or lager yeast (German weissbier yeast is inappropriate). Large proportion of wheat malt (often 30–50%, which is lower than is typical in German weissbiers). American, German, or New World hops are typical.",
    "comparison": "More hop character and less yeast character than German weissbier. Never with the banana and clove character of German weissbier. Generally can have the same range and balance as Blonde Ales, but with a wheat character as the primary malt flavor.",
    "examples": "Bell's Oberon, Boulevard Unfiltered Wheat Beer, Goose Island 312 Urban Wheat Ale, Widmer Hefeweizen",
    "tags": [
      "standard-strength",
      "pale-color",
      "any-fermentation",
      "north-america",
      "craft-style",
      "wheat-beer-family",
      "balanced"
    ],
    "stats": {
      "ibu": {
        "low": 15,
        "high": 30
      },
      "og": {
        "low": 1.04,
        "high": 1.055
      },
      "fg": {
        "low": 1.008,
        "high": 1.013
      },
      "srm": {
        "low": 3,
        "high": 6
      },
      "abv": {
        "low": 4,
        "high": 5.5
      }
    }
  },
  {
    "@_id": "2A",
    "name": "International Pale Lager",
    "aroma": "Low to medium-low malt aroma, which can be grainy-malty or slightly corny-sweet. Hop aroma may range from very low to a medium, spicy or floral hop presence. While a clean fermentation profile is generally most desirable, low levels of yeast character (such as a light apple fruitiness) are not a fault. A light amount of DMS or corn aroma is not a fault.",
    "appearance": "Pale straw to gold color. White, frothy head may not be long lasting. Very clear.",
    "flavor": "Low to moderate levels of grainy-malt flavor, with a crisp, dry, well-attenuated finish. The grain character can be somewhat neutral, or show a light bready-crackery quality or up to moderate corny or malty sweetness. Hop flavor ranges from none to medium levels, and often showing a floral, spicy, or herbal character if detected. Hop bitterness at medium-low to medium level. Balance may vary from slightly malty to slightly bitter, but is relatively close to even. Neutral aftertaste with light malt and sometimes hop flavors. A light amount of DMS is not a fault.",
    "mouthfeel": "Light to medium body. Moderately high to highly carbonated. Can have a slight carbonic bite on the tongue.",
    "impression": "A highly-attenuated pale lager without strong flavors, typically well-balanced and highly carbonated. Served cold, it is refreshing and thirst-quenching.",
    "comments": "International lagers tend to have fewer adjuncts than standard American lagers. They may be all-malt, although strong flavors are still a fault. A broad category of international mass-market lagers ranging from up-scale American lagers to the typical \"import\" or \"green bottle\" international beers found in America and many export markets. Often confusingly labeled as a \"Pilsner.\" Any skunkiness in commercial beers from being lightstruck in a green bottle is a mishandling fault, not a characteristic of the style.",
    "history": "In the United States, developed as a premium version of the standard American lager, with a similar history. Outside the United States, developed either as an imitation of American style lagers, or as a more accessible (and often drier and less bitter) version of a Pilsner-type beer. Often heavily marketed and exported by large industrial or multi-national breweries.",
    "ingredients": "Two- or six-row barley. May use rice, corn, or sugar as adjuncts, or may be all malt.",
    "comparison": "Generally more bitter and filling than American lager. Less hoppy and bitter than a German Pils. Less body, malt flavor, and hop character than a Czech Premium Pale Lager. More robust versions can approach a Munich Helles in flavor, although with more of an adjunct quality.",
    "examples": "Asahi Super Dry, Birra Moretti, Corona Extra, Devils Backbone Gold Leaf Lager, Full Sail Session Premium Lager, Heineken, Red Stripe, Singha",
    "tags": [
      "standard-strength",
      "pale-color",
      "bottom-fermented",
      "lagered",
      "traditional-style",
      "pale-lager-family",
      "balanced"
    ],
    "stats": {
      "ibu": {
        "low": 18,
        "high": 25
      },
      "og": {
        "low": 1.042,
        "high": 1.05
      },
      "fg": {
        "low": 1.008,
        "high": 1.012
      },
      "srm": {
        "low": 2,
        "high": 6
      },
      "abv": {
        "low": 4.6,
        "high": 6
      }
    }
  },
  {
    "@_id": "2B",
    "name": "International Amber Lager",
    "aroma": "Low to moderate malt aroma which can be grainy, with a very low to moderate caramel-sweet to toasty-malty aroma. Hop aroma can range from low to none with a mildly floral or spicy character. Clean lager profile. A slight DMS or corny aroma is acceptable.",
    "appearance": "Golden-amber to reddish-copper color. Bright clarity. White to off-white foam stand which may not last.",
    "flavor": "Low to moderate malt profile which can vary from dry to grainy-sweet. Low to moderate levels of caramel and toasty-bready notes can be evident. Low to medium-low corny sweetness is optional, but not a fault. Hop bitterness is low to moderate, and hop flavor is low to moderate with a spicy, herbal, or floral character. The balance can be fairly malty to nearly even, with the bitterness becoming more noticeable but not objectionable. The bitterness level can increase if the malt character increases to match. Clean fermentation profile. Finish is moderately dry with a moderately malty aftertaste.",
    "mouthfeel": "Light to medium body. Medium to high carbonation. Smooth; some examples can be creamy.",
    "impression": "A well-attenuated malty amber lager with an interesting caramel or toast quality and restrained bitterness. Usually fairly well-attenuated, often with an adjunct quality. Smooth, easily-drinkable lager character.",
    "comments": "A wide spectrum of mass-market Amber lagers developed either independently in various countries, or describing rather generic amber beers that may have had more historical relevance but who eventually changed into an indistinguishable product in modern times.",
    "history": "Varies by country, but generally represents an adaptation of the mass-market International Lager or an evolution of indigenous styles into a more generic product.",
    "ingredients": "Two-row or six-row base malt. Color malts such as victory, amber, etc. Caramel malt adjuncts. European or American hops or a combination of both.",
    "comparison": "Less well-developed malt flavor than a Vienna lager, often with an adjunct taste.",
    "examples": "Brooklyn Lager, Capital Winter Skål, Dos Equis Amber, Schell's Oktoberfest, Yuengling Lager",
    "tags": [
      "standard-strength",
      "amber-color",
      "bottom-fermented",
      "lagered",
      "traditional-style",
      "amber-lager-family",
      "malty"
    ],
    "stats": {
      "ibu": {
        "low": 8,
        "high": 25
      },
      "og": {
        "low": 1.042,
        "high": 1.055
      },
      "fg": {
        "low": 1.008,
        "high": 1.014
      },
      "srm": {
        "low": 7,
        "high": 14
      },
      "abv": {
        "low": 4.6,
        "high": 6
      }
    }
  },
  {
    "@_id": "2C",
    "name": "International Dark Lager",
    "aroma": "Little to no malt aroma; may have a light corn character. Medium-low to no roast and caramel malt aroma. Hop aroma may range from none to light spicy or floral hop presence. While a clean fermentation profile is generally most desirable, low levels of yeast character (such as a light apple fruitiness) are not a fault. A light amount of DMS or corn aroma is not a fault.",
    "appearance": "Deep amber to dark brown with bright clarity and ruby highlights. Foam stand may not be long lasting, and is beige to light tan in color.",
    "flavor": "Low to medium malty sweetness with medium-low to no caramel and/or roasted malt flavors (and may include hints of coffee, molasses or cocoa). Hop flavor ranges from none to low levels, and is typically floral, spicy, or herbal. Low to medium hop bitterness. May have a very light fruitiness. Moderately crisp finish. The balance is typically somewhat malty. Burnt or moderately strong roasted malt flavors are a defect.",
    "mouthfeel": "Light to medium-light body. Smooth with a light creaminess. Medium to high carbonation.",
    "impression": "A darker and somewhat sweeter version of international pale lager with a little more body and flavor, but equally restrained in bitterness. The low bitterness leaves the malt as the primary flavor element, and the low hop levels provide very little in the way of balance.",
    "comments": "A broad range of international lagers that are darker than pale, and not assertively bitter and/or roasted.",
    "history": "Darker versions of International Pale Lagers often created by the same large, industrial breweries and meant to appeal to a broad audience. Often either a colored or sweetened adaptation of the standard pale industrial lager, or a more broadly accessible (and inexpensive) version of more traditional dark lagers.",
    "ingredients": "Two- or six-row barley, corn, rice, or sugars as adjuncts. Light use of caramel and darker malts. Commercial versions may use coloring agents.",
    "comparison": "Less flavor and richness than Munich Dunkel, Schwarzbier, or other dark lagers. Frequently uses adjuncts, as is typical of other International Lagers.",
    "examples": "Baltika #4 Original, Devils Backbone Old Virginia Dark, Dixie Blackened Voodoo, Saint Pauli Girl Dark, San Miguel Dark, Session Black Dark Lager, Shiner Bock",
    "tags": [
      "standard-strength",
      "dark-color",
      "bottom-fermented",
      "lagered",
      "traditional-style",
      "dark-lager-family",
      "malty"
    ],
    "stats": {
      "ibu": {
        "low": 8,
        "high": 20
      },
      "og": {
        "low": 1.044,
        "high": 1.056
      },
      "fg": {
        "low": 1.008,
        "high": 1.012
      },
      "srm": {
        "low": 14,
        "high": 22
      },
      "abv": {
        "low": 4.2,
        "high": 6
      }
    }
  },
  {
    "@_id": "3A",
    "name": "Czech Pale Lager",
    "aroma": "Light to moderate bready-rich malt combined with light to moderate spicy or herbal hop bouquet; the balance between the malt and hops may vary. Faint hint of caramel is acceptable. Light (but never intrusive) diacetyl and light, fruity hop-derived esters are acceptable, but need not be present. No sulfur.",
    "appearance": "Light gold to deep gold color. Brilliant to very clear, with a long-lasting, creamy white head.",
    "flavor": "Medium-low to medium bready-rich malt flavor with a rounded, hoppy finish. Low to medium-high spicy or herbal hop flavor. Bitterness is prominent but never harsh. Flavorful and refreshing. Diacetyl or fruity esters are acceptable at low levels, but need not be present and should never be overbearing.",
    "mouthfeel": "Medium-light to medium body. Moderate carbonation.",
    "impression": "A lighter-bodied, rich, refreshing, hoppy, bitter pale Czech lager having the familiar flavors of the stronger Czech Premium Pale Lager (Pilsner-type) beer but in a lower alcohol, lighter-bodied, and slightly less intense format.",
    "comments": "The Czech name of the style is světlé výčepní pivo.",
    "history": "Josef Groll initially brewed two types of beer in 1842–3, a výčepní and a ležák, with the smaller beer having twice the production; Evan Rail speculates that these were probably 10 °P and 12 °P beers, but that the výčepní could have been weaker. This is the most consumed type of beer in the Czech Republic at present.",
    "ingredients": "Soft water with low sulfate and carbonate content, Saazer-type hops, Czech Pilsner malt, Czech lager yeast. Low ion water provides a distinctively soft, rounded hop profile despite high hopping rates.",
    "comparison": "A lighter-bodied, lower-intensity, refreshing, everyday version of Czech Premium Pale Lager.",
    "examples": "Březňák Světlé výčepní pivo, Notch Session Pils, Pivovar Kout na Šumavě Koutská 10°, Únětické pivo 10°",
    "tags": [
      "session-strength",
      "pale-color",
      "bottom-fermented",
      "lagered",
      "central-europe",
      "traditional-style",
      "pale-lager-family",
      "bitter",
      "hoppy"
    ],
    "stats": {
      "ibu": {
        "low": 20,
        "high": 35
      },
      "og": {
        "low": 1.028,
        "high": 1.044
      },
      "fg": {
        "low": 1.008,
        "high": 1.014
      },
      "srm": {
        "low": 3,
        "high": 6
      },
      "abv": {
        "low": 3,
        "high": 4.1
      }
    }
  },
  {
    "@_id": "3B",
    "name": "Czech Premium Pale Lager",
    "aroma": "Medium to medium-high bready-rich malt and medium-low to medium-high spicy, floral, or herbal hop bouquet; though the balance between the malt and hops may vary, the interplay is rich and complex. Light diacetyl, or very low fruity hop-derived esters are acceptable, but need not be present.",
    "appearance": "Gold to deep gold color. Brilliant to very clear clarity. Dense, long-lasting, creamy white head.",
    "flavor": "Rich, complex, bready maltiness combined with a pronounced yet soft and rounded bitterness and floral and spicy hop flavor. Malt and hop flavors are medium to medium-high, and the malt may contain a slight impression of caramel. Bitterness is prominent but never harsh. The long finish can be balanced towards hops or malt but is never aggressively tilted either way. Light to moderate diacetyl and low hop-derived esters are acceptable, but need not be present.",
    "mouthfeel": "Medium body. Moderate to low carbonation.",
    "impression": "Rich, characterful, pale Czech lager, with considerable malt and hop character and a long, rounded finish. Complex yet well-balanced and refreshing. The malt flavors are complex for a Pilsner-type beer, and the bitterness is strong but clean and without harshness, which gives a rounded impression that enhances drinkability.",
    "comments": "Generally a group of pivo Plzeňského typu, or Pilsner-type beers. This style is a combination of the Czech styles světlý ležák (11–12.9 °P) and světlé speciální pivo (13–14.9 °P). In the Czech Republic, only Pilsner Urquell is called a Pilsner, despite how widely adopted this name is worldwide. Kvasnicové (\"yeast beer\") versions are popular in the Czech Republic, and may be either kräusened with yeasted wort or given a fresh dose of pure yeast after fermentation. These beers are sometimes cloudy, with subtle yeastiness and enhanced hop character. Modern examples vary in their malt to hop balance and many are not as hop-forward as Pilsner Urquell.",
    "history": "Commonly associated with Pilsner Urquell, which was first brewed in 1842 after construction of a new brewhouse by burghers dissatisfied with the standard of beer brewed in Plzeň. Bavarian brewer Josef Groll is credited with first brewing the beer.",
    "ingredients": "Soft water with low sulfate and carbonate content, Saazer-type hops, Czech malt, Czech lager yeast. Low ion water provides a distinctively soft, rounded hop profile despite high hopping rates. The bitterness level of some larger commercial examples has dropped in recent years, although not as much as in many contemporary German examples.",
    "comparison": "More color, malt richness, and body than a German Pils, with a fuller finish and a cleaner, softer impression. Stronger than a Czech Pale Lager.",
    "examples": "Bernard Sváteční ležák, Gambrinus Premium, Kout na Šumavě Koutská 12°, Pilsner Urquell, Pivovar Jihlava Ježek 11°, Primátor Premium, Únětická 12°",
    "tags": [
      "standard-strength",
      "pale-color",
      "bottom-fermented",
      "lagered",
      "central-europe",
      "traditional-style",
      "pilsner-family",
      "balanced",
      "hoppy"
    ],
    "stats": {
      "ibu": {
        "low": 30,
        "high": 45
      },
      "og": {
        "low": 1.044,
        "high": 1.06
      },
      "fg": {
        "low": 1.013,
        "high": 1.017
      },
      "srm": {
        "low": 3.5,
        "high": 6
      },
      "abv": {
        "low": 4.2,
        "high": 5.8
      }
    }
  },
  {
    "@_id": "3C",
    "name": "Czech Amber Lager",
    "aroma": "Moderate intensity, rich malt aroma that can be either bready and Maillard product-dominant or slightly caramelly and candy-like. Spicy, floral or herbal hop character may be moderate to none. Clean lager character, though low fruity esters (stone fruit or berries) may be present. Diacetyl is optional and can range from low to none.",
    "appearance": "Deep amber to copper color. Clear to bright clarity. Large, off-white, persistent head.",
    "flavor": "Complex malt flavor is dominant (medium to medium-high), though its nature may vary from dry and Maillard product-dominant to caramelly and almost sweet. Some examples have a candy-like to graham-cracker malt character. Low to moderate spicy hop flavor. Prominent but clean hop bitterness provides a balanced finish. Subtle plum or berry esters optional. Low diacetyl optional. No roasted malt flavor. Finish may vary from dry and hoppy to relatively sweet.",
    "mouthfeel": "Medium-full to medium body. Soft and round, often with a gentle creaminess. Moderate to low carbonation.",
    "impression": "Malt-driven amber Czech lager with hop character that can vary from low to quite significant. The malt flavors can vary quite a bit, leading to different interpretations ranging from drier, bready, and slightly biscuity to sweeter and somewhat caramelly.",
    "comments": "The Czech name of the style is polotmavé pivo, which translates as half dark. This style is a combination of the Czech styles polotmavý ležák (11–12.9 °P) and polotmavé speciální pivo (13–14.9 °P).",
    "history": "A Vienna-style lager which has continued to be brewed in the Czech Republic. A resurgence of small breweries opening in the Czech Republic has increased the number of examples of this style.",
    "ingredients": "Pilsner and caramel malts, but Vienna and Munich malts may also be used. Low mineral content water, Saazer-type hops, Czech lager yeast.",
    "comparison": "The style can be similar to a Vienna lager but with Saazer-type hop character, or that approaching an English bitter but significantly richer with more of a deep caramel character. Large brewery versions are generally similar to Czech Premium Pale Lager with slightly darker malt flavors and less hop, while smaller breweries often make versions with considerable hop character, malt complexity, or residual sweetness.",
    "examples": "Bernard Jantarový ležák, Pivovar Vysoký Chlumec Démon, Primátor polotmavý 13°, Strakonický Dudák Klostermann polotmavý ležák 13°",
    "tags": [
      "standard-strength",
      "amber-color",
      "bottom-fermented",
      "lagered",
      "central-europe",
      "traditional-style",
      "amber-lager-family",
      "balanced"
    ],
    "stats": {
      "ibu": {
        "low": 20,
        "high": 35
      },
      "og": {
        "low": 1.044,
        "high": 1.06
      },
      "fg": {
        "low": 1.013,
        "high": 1.017
      },
      "srm": {
        "low": 10,
        "high": 16
      },
      "abv": {
        "low": 4.4,
        "high": 5.8
      }
    }
  },
  {
    "@_id": "3D",
    "name": "Czech Dark Lager",
    "aroma": "Medium to medium-high rich, deep, sometimes sweet maltiness, with optional qualities such as bread crusts, toast, nuts, cola, dark fruit, or caramel. Roasted malt characters such as chocolate or sweetened coffee can vary from moderate to none but should not overwhelm the base malt character. Low, spicy hop aroma is optional. Low diacetyl and low fruity esters (plums or berries) may be present.",
    "appearance": "Dark copper to almost black color, often with a red or garnet tint. Clear to bright clarity. Large, off-white to tan, persistent head.",
    "flavor": "Medium to medium-high deep, complex maltiness dominates, typically with malty-rich Maillard products and a light to moderate residual malt sweetness. Malt flavors such as caramel, toast, nuts, licorice, dried dark fruit, chocolate and coffee may also be present, with very low to moderate roast character. Spicy hop flavor can be moderately-low to none. Hop bitterness may be moderate to medium-low but should be perceptible. Balance can vary from malty to relatively well-balanced to gently hop-forward. Low to moderate diacetyl and light plum or berry esters may be present.",
    "mouthfeel": "Medium to medium-full body, considerable mouthfeel without being heavy or cloying. Moderately creamy in texture. Smooth. Moderate to low carbonation. Can have a slight alcohol warmth in stronger versions.",
    "impression": "A rich, dark, malty Czech lager with a roast character that can vary from almost absent to quite prominent. Malty with an interesting and complex flavor profile, with variable levels of hopping providing a range of possible interpretations.",
    "comments": "This style is a combination of the Czech styles tmavý ležák (11–12.9 °P) and tmavé speciální pivo (13–14.9 °P). More modern examples are drier and have higher bitterness while traditional versions often have IBUs in the 18–20 range with a sweeter balance.",
    "history": "The U Fleků brewery has been operating in Prague since 1499. Many small, new breweries are brewing this style.",
    "ingredients": "Pilsner and dark caramel malts with the addition of debittered roasted malts are most common, but additions of Vienna or Munich malt are also appropriate. Low mineral content water, Saazer-type hops, Czech lager yeast. Any fruity esters are typically from malt, not yeast.",
    "comparison": "The beer is the Czech equivalent of a dark lager ranging in character from Munich Dunkel to Schwarzbier, but typically with greater malt richness and hop character (aroma, flavor, and/or bitterness).",
    "examples": "Bohemian Brewery Cherny Bock 4%, Budweiser Budvar B:Dark tmavý ležák, Devils Backbone Morana, Kout na Šumavě Koutský tmavý speciál 14°, Notch Černé Pivo, Pivovar Březnice Herold, U Fleků Flekovský tmavý 13° ležák",
    "tags": [
      "standard-strength",
      "dark-color",
      "bottom-fermented",
      "lagered",
      "central-europe",
      "traditional-style",
      "dark-lager-family",
      "balanced"
    ],
    "stats": {
      "ibu": {
        "low": 18,
        "high": 34
      },
      "og": {
        "low": 1.044,
        "high": 1.06
      },
      "fg": {
        "low": 1.013,
        "high": 1.017
      },
      "srm": {
        "low": 14,
        "high": 35
      },
      "abv": {
        "low": 4.4,
        "high": 5.8
      }
    }
  },
];
