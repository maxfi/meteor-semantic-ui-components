Tpl = Template.SemanticUIMenu

# Context should be:
#   {
#     class: String # Eg, 'secondary pointing'
#     style: String # Eg, 'margin-top: 0px;'
#     tabs: [
#       name: String # Used for identification and text in the tab if `tabTemplate` not set
#       tabTemplate: String # Template to use instead of `tabText`
#       contentTemplate: String # The template to render for content
#       data: Object # Data context for the rendered template
#     ]
#   }
Tpl.onCreated ->
  @state = new ReactiveDict()
  # Set active tab as first tab by default
  @state.setDefault activeTab: @data.tabs[0]

Tpl.helpers
  class: -> @class
  style: -> @style
  activeClass: ->
    state = Template.instance().state
    if state.get('activeTab').name is @name then 'active' else ''
  contentTemplate: -> Template.instance().state.get('activeTab').contentTemplate
  data: -> Template.instance().state.get('activeTab').data

Tpl.events
  'click .js-tab': (e, tpl) ->
    e.stopImmediatePropagation() # Stop the event from triggering parent menu events: http://blazejs.org/api/templates.html#Event-Maps
    tpl.state.set 'activeTab', @