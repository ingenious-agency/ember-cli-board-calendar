import { A } from '@ember/array';
import Component from '@ember/component';
import { assert } from '@ember/debug';
import Board from 'ember-cli-board-calendar/classes/board';
import layout from '../templates/components/board-calendar';

const BoardCalendar = Component.extend({
  layout,
  boardActions: A(),
  board: null,
  categories: A(),
  header: A(),
  columns: A(),

  init() {
    this.super(...arguments);

    let board = this.get('board');

    assert('[ember-cli-board-calendar] board must be an instance of Board', board instanceof Board);
  }
});

BoardCalendar.reopenClass({
  positionalParams: ['board']
});


export default BoardCalendar;