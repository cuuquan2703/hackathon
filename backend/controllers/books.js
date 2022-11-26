const { query } = require("express")
const { MongoClient, Db } = require("mongodb")
const config = require("../config/properties")
const SchemaBooks = require
const uri = config.DBDriver
const client = new MongoClient(uri)

function err(error) {
  console.log("[*] ", error.message)
}

client.connect()

module.exports = {
  create: async (book) => {
    const books = client.db("test").collection("Books")

    await books.insertOne(book)
  },
  getAll: async () => {
    var data = []
    const books = client.db("test").collection("Books")
    await books.find().forEach((book) => data.push(book))
    return data
  },
  getById: async (id) => {
    const books = client.db("test").collection("Books")
    var filter = {
      _id: parseInt(id)
    }
    var res = await books.findOne(filter)
    return res
  },
  update: async (id, book) => {
    const books_collection = client.db("test").collection("Books")
    console.log("id", parseInt(id))
    console.log("book", book)
    var filter = {
      _id: parseInt(id)
    }
    var query = {
      $set: {
        "name": book.name,
        "image": book.image,
        "postfix": book.postfix,
        "author": book.author,
        "createAt": book.createAt,
        "plot": book.plot
      }
    }
    await books_collection.updateOne(filter, query)
  },
  delete: async (id) => {
    const books = client.db("test").collection("Books")
    await books.deleteOne({ _id: parseInt(id) })
  }
}
