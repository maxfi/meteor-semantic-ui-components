# Context
# -------
#   selector: String      - selector for element that is linked to popup
#   template: String      - the template to use as popup content
#   [classes]: String     - additional popup classes. eg. "fluid"
#   [settings]: Object    - popup settings object

Tpl = Template.SemanticUIPopup

Tpl.onCreated ->
  check @data.selector, String
  check @data.template, String

Tpl.onRendered ->
  settings = Object.assign {}, @data.settings, {inline: true}
  @$(@data.selector).popup(settings)

Tpl.helpers
  classes: -> "ui #{@classes or ''} popup"