const express = require('express');
const router = express.Router();

const User = require('../models/userdb');

// Add-donar
router.post("/book_donation", async (req, res, next) => {
    console.log(req.body);

    let newBook_donation = new User({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    const result = await newBook_donation.save();
    if (result.err) {
        res.json({ msg: "Fail" });
    } else {
        res.json({ msg: "Added" });
    }
});

// Add-offer
router.post("/book_offer", async (req, res, next) => {
    console.log(req.body);

    let newBook_offer = new User({
        book_title: req.body.book_title,
        author: req.body.author,
        generation: req.body.generation,
        year_of_publication: req.body.year_of_publication,
        isbn: req.body.isbn
    });

    const result = await newBook_offer.save();
    if (result.err) {
        res.json({ msg: "Fail" });
    } else {
        res.json({ msg: "Added" });
    }
});

// Update book offer
router.put("/update_book_offer/:id", async (req, res, next) => {
    const bookOfferId = req.params.id;
    const { book_title, author, generation, year_of_publication, isbn } = req.body;

    try {
        // Find the book offer by ID
        const bookOffer = await BookOffer.findById(bookOfferId);

        if (!bookOffer) {
            return res.status(404).json({ msg: "Book offer not found" });
        }

        // Update book offer fields if provided in the request body
        if (book_title) bookOffer.book_title = book_title;
        if (author) bookOffer.author = author;
        if (generation) bookOffer.generation = generation;
        if (year_of_publication) bookOffer.year_of_publication = year_of_publication;
        if (isbn) bookOffer.isbn = isbn;

        // Save the updated book offer
        const result = await bookOffer.save();

        if (result.err) {
            res.json({ msg: "Fail" });
        } else {
            res.json({ msg: "Updated" });
        }
    } catch (error) {
        console.error('Error updating book offer:', error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

// Delete book offer
router.delete("/delete_book_offer/:id", async (req, res, next) => {
    const bookOfferId = req.params.id;

    try {
        // Find the book offer by ID and remove it
        const result = await BookOffer.findByIdAndRemove(bookOfferId);

        if (!result) {
            return res.status(404).json({ msg: "Book offer not found" });
        }

        res.json({ msg: "Deleted" });
    } catch (error) {
        console.error('Error deleting book offer:', error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

module.exports = router;