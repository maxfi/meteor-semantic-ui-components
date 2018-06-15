import { Template } from 'meteor/templating'

// -------
// Context
// -------
//   [name]: String                    - input name
//   [classes]: String                 - additional classes. eg. "selection"
//   [placeholder]: String             - placeholder text
//   [options]: Mongo.Cursor or Array  - [String]||[{text: String, value: String] : options in dropdown **note:** An empty data-value `data-value=""` sets the default selection
//   [settings]: Object                - dropdown settings object - http://semantic-ui.com/modules/dropdown.html#/settings

// -----------
// Description
// -----------
//
// A reusable semantic-ui dropdown component for the Blaze templating engine.
//
// Example:

// ```
// // view.html
// {{> SemanticUIDropdown dropdownArgs}}

// // template.coffee
// Template.demo.helpers
// 	dropdownArgs: ->
// 		name: 'status'
// 		classes: 'selection'
// 		placeholder: 'Status'
// 		options: [
// 		  {text: "Open", selected: true}
// 		  {text: "Closed"}
// 		]
// 		settings:
// 			onChange: (val) -> doSomething(val)
// 			...
// ```

const Tpl = Template.SemanticUIDropdown

Tpl.onRendered(function() {
  const settings = this.data.settings || {}
  this.$('.ui.dropdown').dropdown(settings)
  const selected = this.data.options.find(o => o.selected)
  if (selected) {
    return this.$('.ui.dropdown').dropdown(
      'set selected',
      selected.value || selected.text
    )
  }
})

Tpl.helpers({
  value() {
    if (typeof this === 'string') {
      return this
    }
    return this.value || this.text
  },
  text() {
    if (typeof this === 'string') {
      return this
    }
    return this.text
  },
})
