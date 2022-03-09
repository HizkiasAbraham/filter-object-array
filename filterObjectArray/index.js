const fuzzysearch = require("fuzzysearch")

function compare(word, term) {
  return term && fuzzysearch(word?.toLowerCase(), term.toLowerCase())
}

function filterObjectArray(list, searchTerm = "", fieldsToLookup = []) {
  if (!(list && Array.isArray(list)))
    throw new Error("Please provide list of arrays")

  if (!list.length) return list
  if (!(typeof list[0] == "object" && !Array.isArray(list[0])))
    throw new Error("Please provide array of objects only")

  if (!fieldsToLookup.length) {
    fieldsToLookup = Object.keys(list[0])
  }

  return list.filter((item) => {
    let match = false

    fieldsToLookup.forEach((field) => {
      match = match || compare(searchTerm, (item[field] || "").toString())
    })

    return match
  })
}

module.exports = { filterObjectArray }
