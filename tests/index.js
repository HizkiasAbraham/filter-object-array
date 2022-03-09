const test = require("ava").default
const { filterObjectArray } = require("../filterObjectArray")

test.serial("Should throw error if array of a non object provided", (t) => {
  try {
    const result = filterObjectArray(['herwew'], "iuh")
  } catch (error) {
    t.truthy(error, "Error should be thrown")
  }
})

test.serial("Should return correct filtered data", (t) => {
  const list = [
    { city: "Addis Ababa" },
    { city: "Nairobi" },
    { city: "Johansburg" },
    { city: "Lagos" },
  ]

  const expectedFilterResult = [{ city: "Addis Ababa" }]

  const actualFilterResult = filterObjectArray(list, "Addis")
  t.deepEqual(expectedFilterResult, actualFilterResult)
})

test.serial("Should filter with provided fields only", (t) => {
  const list = [
    {
      firstName: "Jhon",
      lastName: "Doe",
    },
    {
      firstName: "Alice",
      lastName: "Bob",
    },
  ]

  const expectedFilterResult = [
    {
      firstName: "Alice",
      lastName: "Bob",
    },
  ]

  const actualFilterResult = filterObjectArray(list, "Al", ["firstName"])
  t.deepEqual(expectedFilterResult, actualFilterResult)
})
