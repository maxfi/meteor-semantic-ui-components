# -------
# Context
# -------
#   [name]: String                    - input name
#   [classes]: String                 - additional classes. eg. "selection"
#   [placeholder]: String             - placeholder text
#   [options]: Mongo.Cursor or Array  - [String]||[{text: String, value: String] : options in dropdown **note:** An empty data-value `data-value=""` sets the default selection
#   [settings]: Object                - dropdown settings object - http://semantic-ui.com/modules/dropdown.html#/settings

# -----------
# Description
# -----------
#
# A reusable semantic-ui dropdown component for the Blaze templating engine.
#
# Example:

# ```
# // view.html
# {{> SemanticUIDropdown dropdownArgs}}

# // template.coffee
# Template.demo.helpers
# 	dropdownArgs: ->
# 		name: 'status'
# 		classes: 'selection'
# 		placeholder: 'Status'
# 		options: [
# 		  {text: "Open", selected: true}
# 		  {text: "Closed"}
# 		]
# 		settings:
# 			onChange: (val) -> doSomething(val)
# 			...
# ```

Tpl = Template.SemanticUIDropdown

Tpl.onRendered ->
  settings = @data.settings || {}
  @$('.ui.dropdown').dropdown(settings)
  selected = @data.options.find (o) -> o.selected
  if selected
    @$('.ui.dropdown').dropdown 'set selected', selected.value or selected.text

Tpl.helpers
  value: -> if _.isString @ then @ else @value or @text
  text: -> if _.isString @ then @ else @text