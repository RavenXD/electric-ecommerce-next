const baseUrl = "https://cdn.contentful.com/spaces";

export const getProducts = async () => {
  const res = await fetch(
    `${baseUrl}/${process.env.SPACE_ID}/environments/master/entries/?select=&content_type=electricStoreItems`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getProductsByCategory = async (categoryName) => {
  const sanitizedCategory = sanitize(categoryName);

  const res = await fetch(
    `${baseUrl}/${process.env.SPACE_ID}/environments/master/entries/?select=&content_type=electricStoreItems&fields.productCategory[all]=${sanitizedCategory}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data;
};

export const getProductsBySearch = async (search) => {
  const sanitizedSearch = search.replace(/[^A-Za-z0-9\s%]/g, "");
  console.log(sanitizedSearch);

  const res = await fetch(
    `${baseUrl}/${process.env.SPACE_ID}/environments/master/entries/?select=&content_type=electricStoreItems&fields.productName[match]=${sanitizedSearch}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data;
};

export const getProduct = async (id) => {
  const sanitizedId = sanitize(id);

  const res = await fetch(
    `${baseUrl}/${process.env.SPACE_ID}/environments/master/entries/${sanitizedId}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await res.json();

  return data;
};

export const getAssets = async () => {
  const res = await fetch(`${baseUrl}/${process.env.SPACE_ID}/environments/master/assets/`, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });

  const data = await res.json();
  return data;
};

export const getAsset = async (id) => {
  const sanitizedId = sanitize(id);

  const res = await fetch(
    `${baseUrl}/${process.env.SPACE_ID}/environments/master/assets/${sanitizedId}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data;
};

export const getCategories = async () => {
  const res = await fetch(
    `${baseUrl}/${process.env.SPACE_ID}/environments/master/entries/?select=fields.productCategory&content_type=electricStoreItems`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await res.json();
  return data;
};

function sanitize(string) {
  string = string.replace(/[^A-Za-z0-9\s]/g, "");
  return string;
}
