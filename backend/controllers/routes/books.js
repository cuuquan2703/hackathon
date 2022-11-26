const express = require("express")
const bodyParser = require('body-parser')
const books = require("../books")
const router = express.Router()

function err(error) {
  console.log("[*] ", error.message)
}

router.use(express.json())
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }))

router.post("/create", (req, res) => {
  books.create(req.body)
    .then(() => {
      res.status(200).json(req.body)
    })
    .catch((error) => {
      res.send("[*] Post failed")
    })
})

router.get("/", (req, res) => {
  books.getAll()
    .then((data) => {
      res.json(data)
    })
})

router.get("/:id", (req, res) => {
  books.getById(req.params.id)
    .then((book) => {
      res.json(book)
    })
})

router.patch("/update", (req, res) => {
  books.update(req.body._id, req.body.updatedBook)
    .then(() => {
      res.send("[*] Book updated")
    })
    .catch(() => {
      res.send("[*] Update failed")
    })
})

router.delete("/delete", (req, res) => {
  books.delete(req.body._id)
    .then(() => {
      res.send("[*] Book deleted")
    })
    .catch(() => {
      res.send("[*] Delete failed")
    })
})

module.exports = router
