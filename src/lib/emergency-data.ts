
export interface EmergencyModuleSection {
  title: string;
  content: string[];
  image?: string;
  imageHint?: string;
}

export interface EmergencyModuleContent {
  pageTitle: string;
  overallIntroduction: string;
  mainImage?: string;
  mainImageHint?: string;
  sections: EmergencyModuleSection[];
}

export const firstAidContent: EmergencyModuleContent = {
  pageTitle: "First Aid Essentials",
  overallIntroduction: "Critical first aid knowledge can save lives. This module provides step-by-step guidance for common emergency situations.",
  mainImage: "https://placehold.co/600x300.png",
  mainImageHint: "medical kit",
  sections: [
    {
      title: "Treating Severe Bleeding",
      content: [
        "1. Call for emergency medical help immediately if available.",
        "2. Lay the person down. Elevate the site of bleeding if possible.",
        "3. Apply firm, direct pressure to the wound using a clean cloth, bandage, or your hands. Maintain pressure continuously.",
        "4. If bleeding seeps through the material, do not remove it. Add more layers on top and continue pressure.",
        "5. If an object is embedded in the wound, do not remove it. Apply pressure around the object.",
        "6. Use a tourniquet only as a last resort if bleeding is life-threatening and cannot be controlled by direct pressure. Ensure you know how to apply it correctly."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "dressing wound"
    },
    {
      title: "Managing Burns",
      content: [
        "For minor burns (first-degree, small second-degree):",
        "1. Cool the burn: Hold under cool (not cold) running water for 10-15 minutes or apply a cool, wet compress.",
        "2. Protect the burn: Cover with a sterile non-adhesive bandage or clean cloth.",
        "3. Prevent infection: Do not apply ointments, butter, or ice directly to the burn. Do not break blisters.",
        "For major burns (large second-degree, any third-degree):",
        "1. Call for emergency medical help immediately.",
        "2. Do not remove burnt clothing stuck to the skin.",
        "3. Cover the burn area with a clean, dry sheet or dressing.",
        "4. Do not immerse large severe burns in cold water, as this can cause hypothermia."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "burn care"
    },
    {
      title: "Cardiopulmonary Resuscitation (CPR)",
      content: [
        "CPR is a life-saving technique for when someone's breathing or heartbeat has stopped. Proper training is essential.",
        "Basic steps for adult CPR (Hands-Only CPR is recommended for untrained bystanders):",
        "1. Check for responsiveness and breathing. If none, call for help.",
        "2. Push hard and fast in the center of the chest: Place one hand on top of the other in the center of the chest. Use your body weight to help you administer compressions at least 2 inches deep and at a rate of 100 to 120 compressions per minute.",
        "3. Continue compressions until medical help arrives or the person starts to breathe."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "CPR training"
    }
  ]
};

export const fireStarterContent: EmergencyModuleContent = {
  pageTitle: "Fire Starting Techniques",
  overallIntroduction: "Fire is crucial for warmth, cooking, purifying water, and signaling. Learn various methods to start a fire in survival situations.",
  mainImage: "https://placehold.co/600x300.png",
  mainImageHint: "campfire",
  sections: [
    {
      title: "Using a Ferro Rod (Fire Steel)",
      content: [
        "1. Gather tinder (dry grass, birch bark, cotton balls with petroleum jelly), kindling (small twigs), and fuelwood (larger pieces).",
        "2. Prepare a tinder bundle. Create a small nest or pile.",
        "3. Hold the ferro rod close to the tinder. Scrape the striker down the rod firmly, aiming sparks directly onto the tinder.",
        "4. Gently blow on the ember to encourage it into a flame. Add kindling gradually, then fuelwood."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "fire steel"
    },
    {
      title: "Using Magnifying Glass",
      content: [
        "This method requires bright sunlight.",
        "1. Gather fine, dry tinder.",
        "2. Angle the magnifying glass to focus the sun's rays into a small, intense point of light on the tinder.",
        "3. Hold steady until the tinder begins to smolder. Gently blow to create a flame."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "magnifying glass"
    }
  ]
};

export const waterPurificationContent: EmergencyModuleContent = {
  pageTitle: "Water Purification Methods",
  overallIntroduction: "Access to clean drinking water is vital for survival. Untreated water can cause severe illness. Here are common purification methods.",
  mainImage: "https://placehold.co/600x300.png",
  mainImageHint: "clear water",
  sections: [
    {
      title: "Boiling",
      content: [
        "Boiling is one of the most effective methods to kill pathogens.",
        "1. Filter water through a cloth to remove large particles if it's murky.",
        "2. Bring water to a rolling boil for at least 1 minute. At altitudes above 6,500 feet (2,000 meters), boil for 3 minutes.",
        "3. Let the water cool before drinking. Boiled water might taste flat; aerate it by pouring it between containers."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "boiling water"
    },
    {
      title: "Using Purification Tablets",
      content: [
        "Water purification tablets (iodine or chlorine-based) are lightweight and effective.",
        "1. Follow the manufacturer's instructions carefully.",
        "2. Typically, you add tablets to a specific volume of water and wait for a designated time (e.g., 30 minutes) before drinking.",
        "3. Effective against most bacteria and viruses, but may not kill all parasites like Cryptosporidium."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "water tablets"
    },
    {
      title: "Makeshift Filtration (Charcoal Filter)",
      content: [
        "This method can reduce sediment and some impurities but may not make water fully safe. Combine with boiling if possible.",
        "1. Create layers in a container (e.g., cut plastic bottle): cloth, charcoal (from completely burned hardwood), sand, gravel, then another cloth.",
        "2. Slowly pour water through the layers. The filtered water will collect at the bottom.",
        "3. This is primarily for clarifying water; boil afterwards for safety."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "water filter"
    }
  ]
};

export const navigationTipsContent: EmergencyModuleContent = {
  pageTitle: "Navigation Without GPS",
  overallIntroduction: "Knowing how to find your way without modern technology is a critical survival skill. These tips can help you navigate using natural signs.",
  mainImage: "https://placehold.co/600x300.png",
  mainImageHint: "compass map",
  sections: [
    {
      title: "Using the Sun",
      content: [
        "The sun generally rises in the east and sets in the west.",
        "Shadow Stick Method:",
        "1. Place a straight stick upright in the ground. Mark the tip of its shadow.",
        "2. Wait 15-30 minutes. Mark the new position of the shadow's tip.",
        "3. A line drawn from the first mark to the second mark points roughly east. Your left foot on the first mark and right foot on the second mark will have you facing approximately north (in the Northern Hemisphere)."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "sun shadow"
    },
    {
      title: "Using Stars (Northern Hemisphere)",
      content: [
        "Find the North Star (Polaris):",
        "1. Locate the Big Dipper (Ursa Major). The two stars forming the outer edge of the Big Dipper's 'cup' point towards Polaris.",
        "2. Polaris is the last star in the handle of the Little Dipper (Ursa Minor) and stays almost directly above the North Pole."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "starry sky"
    },
    {
      title: "Natural Signs",
      content: [
        "Moss often grows thicker on the shadier side of trees (north side in the Northern Hemisphere).",
        "Prevailing winds can shape tree growth; branches might be shorter or sparser on the windward side.",
        "Observe water flow: streams generally flow downhill and can lead to larger bodies of water or civilization.",
        "These signs are general indicators and should be used with caution and cross-referenced if possible."
      ],
      image: "https://placehold.co/400x250.png",
      imageHint: "tree moss"
    }
  ]
};
