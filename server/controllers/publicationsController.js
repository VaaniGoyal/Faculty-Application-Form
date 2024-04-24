const Publications = require('../models/Publications'); 
const Best_Publications = require('../models/Best_Publications');
const Patents = require('../models/Patents');
const Books = require('../models/Books');
const Book_Chapters = require('../models/Book_Chapters');


async function createPublications(req, res) {
    try {
      const { intj_paper, natj_paper, intc_paper, natc_paper, no_patent, no_book, no_bookch, google_link, app_number } = req.body;
      const newPublications = await Publications.create({ intj_paper, natj_paper, intc_paper, natc_paper, no_patent, no_book, no_bookch, google_link, app_number });
      res.status(201).json({
            ...newPublications.toJSON(),
            pub_id: newPublications.id, // Include the pub_id in the response
        });
    } catch (error) {
      console.error("Error creating publication:", error);
      return res.status(500).json({ message: "Failed to create publication." });
    }
}

async function addBestPublications(req, res) {
    try {
      const { author, title, name, yearvolpage, impact, doi, status, pub_id } = req.body;
      const newBestPublications = await Best_Publications.create({ author, title, name, yearvolpage, impact, doi, status, pub_id });
      return res.status(201).json(newBestPublications);
    } catch (error) {
      console.error("Error adding best publications:", error);
      return res.status(500).json({ message: "Failed to add best publications." });
    }
}

async function addPatents(req, res) {
    try {
      const { inventor, title, country, number, date_file, date_publish, status, pub_id } = req.body;
      const newPatents = await Patents.create({ inventor, title, country, number, date_file, date_publish, status, pub_id });
      return res.status(201).json(newPatents);
    } catch (error) {
      console.error("Error adding patents:", error);
      return res.status(500).json({ message: "Failed to add patents." });
    }
}

async function addBooks(req, res) {
    try {
      const { author, title, year, isbn, pub_id } = req.body;
      const newBooks = await Books.create({ author, title, year, isbn, pub_id });
      return res.status(201).json(newBooks);
    } catch (error) {
      console.error("Error adding books:", error);
      return res.status(500).json({ message: "Failed to add books." });
    }
}

async function addBookChapters(req, res) {
    try {
      const { author, title, year, isbn, pub_id } = req.body;
      const newBookChapters = await Book_Chapters.create({ author, title, year, isbn, pub_id });
      return res.status(201).json(newBookChapters);
    } catch (error) {
      console.error("Error adding book chapters:", error);
      return res.status(500).json({ message: "Failed to add book chapters." });
    }
}


module.exports = { createPublications, addBestPublications, addPatents, addBooks, addBookChapters };
