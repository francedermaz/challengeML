const { Router } = require("express");
const { getSearchResult, getItemById } = require("../controllers");

const router = Router();

router.get("/items", async (req, res) => {
  const query = req.query.q || undefined;
  if (query) {
    try {
      const result = await getSearchResult(query);
      return res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: "Error getting data" });
    }
  } else {
    res.status(400).json({ error: "Missing query" });
  }
});

router.get("/items/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await getItemById(id);
    return res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: "Error getting data" });
  }
});

module.exports = router;
