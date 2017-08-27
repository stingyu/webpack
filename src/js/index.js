import _ from 'lodash'
import '../css/style.css'
import $ from 'jquery'
import foo from './foo'

function component () {
    var element = $('<div></div>')
    console.log(1)
    /* lodash is required for the next line to work */
    element.html(_.join(['Hello','webpack'], ' ') );
    element.addClass('hello');
    return element.get(0);
  }
  
  document.body.appendChild(component());
  console.log(foo);
  console.log(foo())