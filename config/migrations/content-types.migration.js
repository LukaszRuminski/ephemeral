module.exports = function (migration) {
    const labels = migration
        .createContentType("labelGroup")
        .name("Label group")
        .description(
            'Storing group of labels for a particular page or the whole website. The name should indicate for which page those labels are meant to. If labels are reused between multiple pages, name it "Global"'
        )
        .displayField("name")

    labels
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([
            {
                "unique": true
            }
        ])
        .disabled(false)
        .omitted(false)
    labels
        .createField("id")
        .name("Id")
        .type("Symbol")
        .localized(false)
        .required(true)
        .validations([
            {
                "unique": true
            }
        ])
        .disabled(false)
        .omitted(false)
    labels
        .createField("labels")
        .name("Labels")
        .type("Object")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
    labels.changeFieldControl("name", "builtin", "singleLine", {})
    labels.changeFieldControl("labels", "builtin", "objectEditor", {})

    const allLabels = migration
        .createContentType("allLabels")
        .name("_All labels")
        .description(
            "This content type should include all entries of Labels type. This way content editors can easily access all labels from a single place."
        )
        .displayField("name")

    allLabels
        .createField("name")
        .name("Name")
        .type("Symbol")
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)

    allLabels
        .createField("labelGroups")
        .name("Label groups")
        .type("Array")
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false)
        .items({
            type: "Link",

            validations: [
                {
                    linkContentType: ["labelGroup"]
                }
            ],

            linkType: "Entry"
        })

    allLabels.changeFieldControl("name", "builtin", "singleLine", {})

    allLabels.changeFieldControl(
        "labelGroups",
        "builtin",
        "entryCardsEditor",
        {
            bulkEditing: true
        }
    )
}
