(() => {
  const catalogs = {
    clothes: {
      title: "Clothes",
      folder: "CLOTHES",
      firstImage: 1,
      intro: "Everyday essentials and statement pieces for building a wardrobe that feels like you.",
      labels: [
        "T-Shirt", "Hoodie", "Dress", "Sweater", "Coat", "Skirts",
        "Shorts", "Jeans", "Cardigan", "Polo", "Casual", "Preppy",
        "Formal", "Gown", "Ethnic", "Hiphop", "Sportswear", "Underwear"
      ]
    },
    accessories: {
      title: "Accessories",
      itemName: "Accessory",
      folder: "ACCESSORIES",
      firstImage: 19,
      intro: "Finishing touches and everyday accessories to complete your personal style."
    },
    cosmetics: {
      title: "Cosmetics",
      itemName: "Cosmetic",
      folder: "COSMETICS",
      firstImage: 37,
      intro: "Beauty essentials for everyday routines and special occasions."
    }
  };

  const root = document.querySelector("#catalog-root");
  const catalog = root && catalogs[root.dataset.catalog];
  if (!root || !catalog) return;

  const itemCount = 18;
  const layout = document.createElement("div");
  layout.className = "catalog-layout";

  const content = document.createElement("section");
  content.className = "catalog-content";
  const header = document.createElement("header");
  header.className = "catalog-header";
  const kicker = document.createElement("p");
  kicker.className = "catalog-kicker";
  kicker.textContent = "RUEL / COLLECTION";
  const heading = document.createElement("h1");
  heading.textContent = catalog.title;
  const intro = document.createElement("p");
  intro.className = "catalog-intro";
  intro.textContent = catalog.intro;
  const count = document.createElement("p");
  count.className = "catalog-count";
  count.textContent = `${itemCount} pieces`;
  header.append(kicker, heading, intro, count);

  const grid = document.createElement("div");
  grid.className = "catalog-grid";

  for (let index = 0; index < itemCount; index += 1) {
    const itemNumber = index + 1;
    const label = catalog.labels?.[index] ?? `${catalog.itemName} ${String(itemNumber).padStart(2, "0")}`;
    const imageNumber = catalog.firstImage + index;
    const itemId = `${root.dataset.catalog}-${String(itemNumber).padStart(2, "0")}`;

    const card = document.createElement("article");
    card.className = "catalog-card";
    card.id = itemId;
    const imageLink = document.createElement("a");
    imageLink.href = `#${itemId}`;
    imageLink.setAttribute("aria-label", label);
    const imageWrap = document.createElement("div");
    imageWrap.className = "catalog-image-wrap";
    const image = document.createElement("img");
    image.src = `Images/${catalog.folder}/${imageNumber}.png`;
    image.alt = label;
    image.loading = itemNumber <= 6 ? "eager" : "lazy";
    imageWrap.append(image);
    imageLink.append(imageWrap);

    const info = document.createElement("div");
    info.className = "catalog-card-info";
    const number = document.createElement("p");
    number.className = "catalog-card-number";
    number.textContent = `Item ${String(itemNumber).padStart(2, "0")}`;
    const title = document.createElement("h2");
    title.textContent = label;
    info.append(number, title);
    card.append(imageLink, info);
    grid.append(card);
  }

  content.append(header, grid);
  layout.append(content);
  root.append(layout);
})();