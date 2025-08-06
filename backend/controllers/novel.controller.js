import { Novel } from "../model/novel.model.js";

// GET all novels
export const getAllNovel = async (req, res) => {
  try {
    const novels = await Novel.find();
    res.status(200).json(novels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET novel by ID
export const getNovelById = async (req, res) => {
  try {
    const novel = await Novel.findById(req.params.id);
    if (!novel) {
      return res.status(404).json({ message: "Novel not found" });
    }
    res.status(200).json(novel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE novel
export const createNovel = async (req, res) => {
  try {
    const novel = await Novel.create(req.body);
    res.status(201).json(novel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE novel
export const updateNovel = async (req, res) => {
  try {
    const novel = await Novel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!novel) {
      return res.status(404).json({ message: "Novel not found" });
    }
    res.status(200).json(novel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE novel
export const deleteNovel = async (req, res) => {
  try {
    const novel = await Novel.findByIdAndDelete(req.params.id);
    if (!novel) {
      return res.status(404).json({ message: "Novel not found" });
    }
    res.status(200).json({ message: "Novel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
