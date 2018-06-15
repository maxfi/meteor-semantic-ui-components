/* global $ */

import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { Random } from 'meteor/random'
import { check } from 'meteor/check'

// #########################################################
//                     USAGE
// #########################################################
//  {{! Only create the modal DOM when it is required}}
//  {{#if showModal.get}}
//    {{#SemanticUIModal show=showModal classes=''}}
//      <div class="content">
//        Some content
//      </div>
//      <div class="actions">
//        <div class="ui positive right labeled icon button">
//          Got it!
//          <i class="checkmark icon"></i>
//        </div>
//      </div>
//    {{/SemanticUIModal}}
//  {{/if}}

const Tpl = Template.SemanticUIModal

Tpl.onCreated(function() {
  check(this.data.show, ReactiveVar)
  // Generate a unique id for the modal element as once it's shown
  // it will be moved to the dimmer outside of the template.
  this.modalElementId = Random.id()
  this.elSelector = `#${this.modalElementId}`
})

Tpl.onRendered(function() {
  const options = {
    closable: true,
    detachable: true, // Otherwise the sizing get's screwed up.
    observeChanges: true, // Whether any change in modal DOM should automatically refresh cached positions
    onHidden: () => Meteor.defer(() => this.data.show.set(false)),
  }

  return this.autorun(() => {
    if (this.data.show.get()) {
      return $(this.elSelector)
        .modal(options)
        .modal('show')
    }
    return $(this.elSelector).modal('hide')
  })
})

Tpl.onDestroyed(function() {
  // Hide the element and remove from the el from the DOM,
  // as it's outside of the template (detachable option set to true).
  return $(this.elSelector)
    .modal('hide')
    .remove()
})

Tpl.helpers({
  modalElementId() {
    return Template.instance().modalElementId
  },
})
