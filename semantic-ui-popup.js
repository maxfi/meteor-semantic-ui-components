import { Template } from 'meteor/templating'
import { check } from 'meteor/check'

// Context
// -------
//   selector: String      - selector for element that is linked to popup
//   template: String      - the template to use as popup content
//   [classes]: String     - additional popup classes. eg. "fluid"
//   [settings]: Object    - popup settings object

const Tpl = Template.SemanticUIPopup

Tpl.onCreated(function() {
  check(this.data.selector, String)
  check(this.data.template, String)
})

Tpl.onRendered(function() {
  const settings = Object.assign({}, this.data.settings, { inline: true })
  this.$(this.data.selector).popup(settings)
})

Tpl.helpers({
  classes() {
    return `ui ${this.classes || ''} popup`
  },
})
