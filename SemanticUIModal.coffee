##########################################################
#                     USAGE
##########################################################
#  {{! Only create the modal DOM when it is required}}
#  {{#if showModal.get}}
#    {{#SemanticUIModal show=showModal classes=''}}
#      <div class="content">
#        Some content
#      </div>
#      <div class="actions">
#        <div class="ui positive right labeled icon button">
#          Got it!
#          <i class="checkmark icon"></i>
#        </div>
#      </div>
#    {{/SemanticUIModal}}
#  {{/if}}

Tpl = Template.SemanticUIModal

Tpl.onCreated ->
  check @data.show, ReactiveVar
  # Generate a unique id for the modal element as once it's shown
  # it will be moved to the dimmer outside of the template.
  @modalElementId = Random.id()
  @elSelector = '#'+@modalElementId

Tpl.onRendered ->
  options =
    closable: true
    detachable: true # Otherwise the sizing get's screwed up.
    observeChanges: true # Whether any change in modal DOM should automatically refresh cached positions
    onHidden: => Meteor.defer => @data.show.set false

  @autorun =>
    if @data.show.get()
      $(@elSelector).modal(options).modal('show')
    else
      $(@elSelector).modal('hide')

Tpl.onDestroyed ->
  # Hide the element and remove from the el from the DOM,
  # as it's outside of the template (detachable option set to true).
  $(@elSelector).modal('hide').remove()

Tpl.helpers
  modalElementId: -> Template.instance().modalElementId