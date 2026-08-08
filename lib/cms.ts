const CMS_URL = process.env.PAYLOAD_API_URL || "http://localhost:3000";

export async function getHomepage() {
  const res = await fetch(`${CMS_URL}/api/globals/homepage`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch homepage");
  }

  return res.json();
}
